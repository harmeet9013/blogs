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
    Fade,
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
    const [avatarImgLoad, setAvatarImgLoad] = useState(false);

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
            {/* home button */}
            <NavbarHomeButton
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
                onMouseOver={(e) => {
                    !props.isMobile && setIconAnchor(e.currentTarget);
                }}
                onClick={(e) => {
                    setIconAnchor(e.currentTarget);
                }}
            >
                {props.isLoggedIn.logged ? RenderAvatar() : <MyAvatar />}
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
                PaperProps={{
                    elevation: 0,
                    sx: {
                        borderRadius: "15px",
                        transition: (theme) => theme.transitions.create(),
                    },
                    onMouseLeave: () => {
                        !props.isMobile && setIconAnchor(null);
                    },
                }}
                TransitionComponent={Fade}
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
                                {RenderAvatar()}
                                {props.isLoggedIn.name}
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
