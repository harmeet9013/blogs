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
    InfoRounded,
} from "@mui/icons-material";
import {
    Avatar,
    CircularProgress,
    Container,
    Divider,
    Grow,
    IconButton,
    Menu,
    Skeleton,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
} from "@mui/material";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";
import {
    MyAvatar,
    MyMenuItem,
    NavbarHomeButton,
    TooltipSX,
    confirmDialog,
    navigate,
    systemTheme,
} from "../CustomComponents";

export default function DesktopActions(props) {
    const [iconAnchor, setIconAnchor] = useState(null);
    const [isAvatarLoading, setIsAvatarLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIconAnchor(null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        props.setShowLoading(true);
        setTimeout(() => {
            Cookies.remove("token");
            Cookies.remove("userID");
            props.setIsLoggedIn({
                logged: false,
                name: "",
                avatar: "",
            });
            props.setShowLoading(false);
            enqueueSnackbar("You are logged out!", { variant: "info" });
        }, 200);
    };

    return (
        <Fragment>
            <NavbarHomeButton
                onClick={() => {
                    setTimeout(() => {
                        navigate("/about");
                        props.setShowLoading(false);
                    }, 200);
                    props.setShowLoading(true);
                }}
                startIcon={<InfoRounded color="icon" />}
            >
                About
            </NavbarHomeButton>

            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    borderRightWidth: 2,
                }}
            />

            {/* avatar/menu button */}
            <IconButton
                sx={{
                    "&:hover": {
                        backgroundColor: (theme) => theme.palette.accent.hover,
                    },
                }}
                onClick={(e) => {
                    setIconAnchor(e.currentTarget);
                }}
            >
                {props.isLoggedIn.logged ? (
                    <Fragment>
                        {isAvatarLoading && (
                            <Skeleton variant="circular">
                                <Avatar />
                            </Skeleton>
                        )}

                        <Grow in={!isAvatarLoading}>
                            <MyAvatar
                                src={props.isLoggedIn.avatar}
                                onLoad={() => setIsAvatarLoading(false)}
                                sx={{
                                    display: isAvatarLoading && "none",
                                }}
                            />
                        </Grow>
                    </Fragment>
                ) : (
                    <Grow in={true}>
                        <MyAvatar />
                    </Grow>
                )}
            </IconButton>

            {/* menu */}
            <Menu
                open={Boolean(iconAnchor)}
                anchorEl={iconAnchor}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                onClose={() => {
                    setIconAnchor(null);
                }}
                disableScrollLock={true}
                TransitionComponent={Grow}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        borderRadius: "15px",
                        transition: (theme) => theme.transitions.create(),
                    },
                }}
            >
                <Container disableGutters>
                    {/* login/logout buttons */}
                    {props.isLoggedIn.logged ? (
                        <Fragment>
                            <MyMenuItem
                                disabled
                                sx={{
                                    justifyContent: "center",
                                    gap: "10px",
                                    opacity: "1",
                                    "&.Mui-disabled": {
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                {isAvatarLoading ? (
                                    <CircularProgress size={25} color="icon" />
                                ) : (
                                    <MyAvatar
                                        src={props.isLoggedIn.avatar}
                                        onLoad={() => setIsAvatarLoading(false)}
                                        sx={{
                                            display: isAvatarLoading && "none",
                                        }}
                                    />
                                )}

                                {props.isLoggedIn.name}
                            </MyMenuItem>

                            <MyMenuItem
                                onClick={() => {
                                    setIconAnchor(null);

                                    setTimeout(() => {
                                        navigate("/createBlog");
                                        props.setShowLoading(false);
                                    }, 200);
                                    props.setShowLoading(true);
                                }}
                            >
                                <AddCircle color="icon" /> New Blog
                            </MyMenuItem>

                            <MyMenuItem
                                divider
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
                            divider
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

                    {/* source code button */}
                    <MyMenuItem
                        divider
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

                    {/* theme options in menu */}
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
                                "&:hover": {
                                    backgroundColor: (theme) =>
                                        theme.palette.accent.hover,
                                },

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
                            <ToggleButton value="light" aria-label="light">
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
