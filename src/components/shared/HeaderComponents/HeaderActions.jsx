import { Fragment, useEffect, useState } from "react";
import {
    Logout,
    Login,
    GitHub,
    DarkMode,
    LightMode,
    LightModeOutlined,
    DarkModeOutlined,
    DesktopMac,
    DesktopMacOutlined,
    AddCircle,
} from "@mui/icons-material";
import {
    Avatar,
    Container,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Skeleton,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    styled,
    useMediaQuery,
} from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";
import { enqueueSnackbar } from "notistack";

export default function DesktopActions(props) {
    const navigate = useNavigate();
    const confirmDialog = useConfirm();

    const [iconAnchor, setIconAnchor] = useState(null);
    const [avatarImgLoad, setAvatarImgLoad] = useState(false);

    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)")
        ? true
        : false;

    const MyMenuItem = styled(MenuItem)(({ theme }) => ({
        fontSize: props.isMobile ? "16px" : "18px",
        width: "100%",
        padding: props.isMobile ? "20px 30px" : "10px 30px",
        gap: "10px",
        justifyContent: "flex-start",
        transition: theme.transitions.create(),
    }));

    const MyAvatar = styled(Avatar)(({ theme }) => ({
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
    }));

    const TooltipSX = {
        tooltip: {
            sx: {
                backgroundColor: (theme) => theme.palette.accent.primary,
                color: (theme) => theme.palette.text.primary,
                fontSize: "0.8rem",
                borderRadius: "15px",
                transition: (theme) => theme.transitions.create(),
            },
        },
    };

    const DividerHorizontalSX = {
        borderBottomWidth: 2,
    };
    const DividerVerticalSX = {
        borderRightWidth: 2,
    };

    useEffect(() => {
        const handleScroll = () => {
            setIconAnchor(null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const RenderAvatar = () => {
        return avatarImgLoad ? (
            <MyAvatar src={props.isLoggedIn.avatar} />
        ) : (
            <Skeleton variant="circular">
                <Avatar
                    src={props.isLoggedIn.avatar}
                    onLoad={() => {
                        setAvatarImgLoad(true);
                    }}
                />
            </Skeleton>
        );
    };

    const handleLogout = () => {
        setTimeout(() => {
            Cookies.remove("token");
            Cookies.remove("userID");
            props.setIsLoggedIn({
                logged: false,
                name: "",
                avatar: "",
            });

            enqueueSnackbar("You are logged out!", { variant: "info" });
        }, 200);
    };

    return (
        <Fragment>
            <props.NavbarButton
                onClick={() => {
                    setTimeout(() => {
                        if (props.isLoggedIn.logged) {
                            navigate("/createBlog");
                        } else {
                            navigate("/authUser");
                        }
                        props.setShowLoading(false);
                    }, 200);
                    props.setShowLoading(true);
                }}
                startIcon={<AddCircle color="icon" />}
            >
                New
            </props.NavbarButton>

            <Divider orientation="vertical" flexItem sx={DividerVerticalSX} />

            <IconButton
                onClick={(e) => {
                    setIconAnchor(e.currentTarget);
                }}
            >
                {props.isLoggedIn.logged ? RenderAvatar() : <MyAvatar />}
            </IconButton>
            <Menu
                open={Boolean(iconAnchor)}
                anchorEl={iconAnchor}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                onClose={() => {
                    setIconAnchor(null);
                }}
                disableScrollLock={true}
                PaperProps={{
                    elevation: 1,
                    style: {
                        borderRadius: "15px",
                    },
                }}
            >
                <Container disableGutters>
                    {props.isLoggedIn.logged ? (
                        <Fragment>
                            <MyMenuItem
                                disabled
                                dense
                                sx={{
                                    justifyContent: "center",
                                    gap: "10px",
                                    opacity: "1",
                                    "&.Mui-disabled": {
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                {RenderAvatar()}
                                <i>{props.isLoggedIn.name}</i>
                            </MyMenuItem>

                            <MyMenuItem
                                dense
                                onClick={() => {
                                    setIconAnchor(null);

                                    confirmDialog({
                                        title: "Logout",
                                        content:
                                            "Are you sure you want to logout?",
                                        confirmationText: "Yes",
                                        cancellationText: "No",
                                    })
                                        .then(handleLogout)
                                        .catch(() => {
                                            /* */
                                        });
                                }}
                            >
                                <Logout color="icon" />
                                Logout
                            </MyMenuItem>
                        </Fragment>
                    ) : (
                        <MyMenuItem
                            onClick={() => {
                                setTimeout(() => {
                                    navigate("/authUser");
                                    props.setShowLoading(false);
                                }, 200);
                                setIconAnchor(null);
                                props.setShowLoading(true);
                            }}
                        >
                            <Login color="icon" /> Login
                        </MyMenuItem>
                    )}
                    <Divider flexItem sx={DividerHorizontalSX} />
                    <MyMenuItem
                        dense
                        onClick={() => {
                            confirmDialog({
                                title: "GitHub",
                                content: "View source code on GitHub?",
                                confirmationText: "Yes",
                                cancellationText: "No",
                            })
                                .then(() => {
                                    window.open(
                                        "https://github.com/harmeet9013/blogs"
                                    );
                                })
                                .catch(() => {
                                    /* */
                                });
                            setIconAnchor(null);
                        }}
                    >
                        <GitHub color="icon" /> Source Code
                    </MyMenuItem>

                    <Divider flexItem sx={DividerHorizontalSX} />

                    <ToggleButtonGroup
                        value={props.selectedTheme}
                        exclusive
                        onChange={(event, nextView) => {
                            if (nextView !== null) {
                                props.setSelectedTheme(nextView);
                                if (nextView === "system") {
                                    Cookies.remove("theme");
                                    props.setDarkMode(systemTheme);
                                } else {
                                    Cookies.set("theme", nextView);
                                    props.setDarkMode(
                                        nextView === "dark" ? true : false
                                    );
                                }
                            }
                        }}
                        sx={{
                            "& .MuiToggleButtonGroup-grouped": {
                                transition: (theme) =>
                                    theme.transitions.create(),
                                margin: (theme) => theme.spacing(0.5),
                                padding: (theme) => theme.spacing(2),
                                border: 0,

                                "&:not(:first-of-type)": {
                                    borderRadius: "15px",
                                },
                                "&:first-of-type": {
                                    borderRadius: "15px",
                                },
                            },
                        }}
                    >
                        <Tooltip
                            title="Light Mode"
                            disableInteractive
                            componentsProps={TooltipSX}
                        >
                            <ToggleButton value="light" aria-label="list">
                                {props.selectedTheme === "light" ? (
                                    <LightMode color="icon" />
                                ) : (
                                    <LightModeOutlined />
                                )}
                            </ToggleButton>
                        </Tooltip>

                        <Tooltip
                            title="System"
                            disableInteractive
                            componentsProps={TooltipSX}
                        >
                            <ToggleButton value="system" aria-label="system">
                                {props.selectedTheme === "system" ? (
                                    <DesktopMac color="icon" />
                                ) : (
                                    <DesktopMacOutlined />
                                )}
                            </ToggleButton>
                        </Tooltip>

                        <Tooltip
                            title="Dark Mode"
                            disableInteractive
                            componentsProps={TooltipSX}
                        >
                            <ToggleButton value="dark" aria-label="dark">
                                {props.selectedTheme === "dark" ? (
                                    <DarkMode color="icon" />
                                ) : (
                                    <DarkModeOutlined />
                                )}
                            </ToggleButton>
                        </Tooltip>
                    </ToggleButtonGroup>
                </Container>
            </Menu>
        </Fragment>
    );
}

{
    /* <MyMenuItem
                        dense
                        onClick={() => {
                            Cookies.set("theme", "light");
                            props.setSelectedTheme("light");
                            props.setDarkMode(false);
                        }}
                        sx={
                            props.selectedTheme === "light" && {
                                backgroundColor: (theme) =>
                                    theme.palette.accent.primary,
                                "&:hover": {
                                    backgroundColor: (theme) =>
                                        theme.palette.accent.primary,
                                },
                            }
                        }
                    >
                        {props.selectedTheme === "light" ? (
                            <LightMode color="icon" />
                        ) : (
                            <LightModeOutlined />
                        )}
                        Light mode
                    </MyMenuItem>
                    <MyMenuItem
                        dense
                        onClick={() => {
                            props.setDarkMode(systemTheme);
                            props.setSelectedTheme("system");
                            Cookies.remove("theme");
                        }}
                        sx={
                            props.selectedTheme === "system" && {
                                backgroundColor: (theme) =>
                                    theme.palette.accent.primary,
                                "&:hover": {
                                    backgroundColor: (theme) =>
                                        theme.palette.accent.primary,
                                },
                            }
                        }
                    >
                        {props.selectedTheme === "system" ? (
                            <DesktopMac color="icon" />
                        ) : (
                            <DesktopMacOutlined />
                        )}
                        System
                    </MyMenuItem>
                    <MyMenuItem
                        dense
                        onClick={() => {
                            Cookies.set("theme", "dark");
                            props.setSelectedTheme("dark");
                            props.setDarkMode(true);
                        }}
                        sx={
                            props.selectedTheme === "dark" && {
                                backgroundColor: (theme) =>
                                    theme.palette.accent.primary,
                                "&:hover": {
                                    backgroundColor: (theme) =>
                                        theme.palette.accent.primary,
                                },
                            }
                        }
                    >
                        {props.selectedTheme === "dark" ? (
                            <DarkMode color="icon" />
                        ) : (
                            <DarkModeOutlined />
                        )}
                        Dark Mode
                    </MyMenuItem> */
}
