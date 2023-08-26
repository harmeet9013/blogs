import { Fragment, useEffect, useState } from "react";
import {
    Avatar,
    CircularProgress,
    Divider,
    Grow,
    IconButton,
    Menu,
    MenuItem,
    Skeleton,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
    styled,
} from "@mui/material";
import {
    GitHub,
    LightModeOutlined,
    DarkModeOutlined,
    DesktopMacOutlined,
    InfoRounded,
    LogoutRounded,
    AddCircleRounded,
    LoginRounded,
    LightModeRounded,
    DesktopMacRounded,
    DarkModeRounded,
} from "@mui/icons-material";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";

import { TooltipSX, confirmDialog, navigate } from "../CustomComponents";

export default function DesktopActions(props) {
    const [iconAnchor, setIconAnchor] = useState(null);
    const [isAvatarLoading, setIsAvatarLoading] = useState(true);

    // avatar on the header
    const MyAvatar = styled(Avatar)(({ theme }) => ({
        transition: theme.transitions.create(),
        color: theme.palette.primary.container.main,
        backgroundColor: theme.palette.primary.container.on,
    }));

    // menu items
    const MyMenuItem = styled(MenuItem)(({ theme }) => ({
        transition: theme.transitions.create(),
        fontSize: theme.typography.subtitle1.fontSize,
        padding: "1.2rem",
        gap: 10,
        fontWeight: 500,
        borderRadius: 50,
        justifyContent: "flex-start",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.highest,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

    // scroll check
    useEffect(() => {
        const handleScroll = () => {
            setIconAnchor(null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // logout click handle
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
            <props.NavbarHomeButton
                onClick={() => {
                    setTimeout(() => {
                        navigate("/about");
                        props.setShowLoading(false);
                    }, 200);
                    props.setShowLoading(true);
                }}
                startIcon={<InfoRounded />}
            >
                About
            </props.NavbarHomeButton>

            <Divider orientation="vertical" variant="middle" flexItem />

            {/* avatar/menu button */}
            <IconButton
                sx={(theme) => ({
                    transition: `${theme.transitions.create()} !important`,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.container.main,
                    },
                })}
                onClick={(e) => {
                    setIconAnchor(e.currentTarget);
                }}
            >
                {props.isLoggedIn.logged ? (
                    isAvatarLoading ? (
                        <Skeleton variant="circular">
                            <MyAvatar
                                src={props.isLoggedIn.avatar}
                                onLoad={() => setIsAvatarLoading(false)}
                            />
                        </Skeleton>
                    ) : (
                        <Grow in={!isAvatarLoading}>
                            <MyAvatar
                                src={props.isLoggedIn.avatar}
                                sx={(theme) => ({
                                    display: isAvatarLoading && "none",
                                    border: `2px solid ${theme.palette.primary.main}`,
                                })}
                            />
                        </Grow>
                    )
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
                PaperProps={{
                    elevation: 0,
                    sx: (theme) => ({
                        marginTop: 2,
                        borderRadius: 10,
                        padding: 1.5,
                        backgroundColor: theme.palette.background.med,
                        transition: theme.transitions.create(),
                    }),
                }}
            >
                <Stack spacing={2}>
                    {/* login/logout buttons */}
                    {props.isLoggedIn.logged ? (
                        <Fragment>
                            <MyMenuItem
                                disabled
                                sx={(theme) => ({
                                    justifyContent: "center",
                                    gap: theme.spacing(1),
                                    padding: "0.8rem 1.2rem",
                                    backgroundColor:
                                        theme.palette.background.high,
                                    opacity: "1",
                                    "&.Mui-disabled": {
                                        opacity: 0.8,
                                    },
                                })}
                            >
                                {isAvatarLoading ? (
                                    <CircularProgress
                                        size={25}
                                        color="primary"
                                    />
                                ) : (
                                    <MyAvatar
                                        src={props.isLoggedIn.avatar}
                                        onLoad={() => setIsAvatarLoading(false)}
                                        sx={(theme) => ({
                                            display: isAvatarLoading && "none",
                                            border: `2px solid ${theme.palette.primary.main}`,
                                        })}
                                    />
                                )}
                                <Stack
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={0}
                                >
                                    <Typography
                                        variant="caption"
                                        marginBottom={-1}
                                    >
                                        Hey,
                                    </Typography>
                                    {props.isLoggedIn.name}
                                </Stack>
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
                                <AddCircleRounded /> New Blog
                            </MyMenuItem>

                            <MyMenuItem
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
                                <LogoutRounded />
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
                            <LoginRounded /> Login
                        </MyMenuItem>
                    )}

                    {/* source code button */}
                    <MyMenuItem
                        onClick={() => {
                            confirmDialog({
                                title: "Source Code",
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
                        <GitHub /> Source Code
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
                                    props.setDarkMode(props.systemTheme);
                                } else {
                                    Cookies.set("theme", nextView);
                                    props.setDarkMode(
                                        nextView === "dark" ? true : false
                                    );
                                }
                            }
                        }}
                        sx={(theme) => ({
                            ".MuiToggleButtonGroup-grouped": {
                                transition: theme.transitions.create(),
                                marginLeft: theme.spacing(1),
                                marginRight: theme.spacing(1),
                                padding: "1.2rem",
                                border: 0,
                                backgroundColor:
                                    theme.palette.background.highest,
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.primary.container.main,
                                },

                                "&:not(:first-of-type)": {
                                    borderRadius: 6,
                                },
                                "&:first-of-type": {
                                    borderRadius: 6,
                                },
                            },
                        })}
                    >
                        <Tooltip
                            title="Light Mode"
                            disableInteractive
                            componentsProps={TooltipSX}
                        >
                            <ToggleButton value="light" aria-label="light">
                                {props.selectedTheme === "light" ? (
                                    <LightModeRounded color="primary" />
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
                                    <DesktopMacRounded color="primary" />
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
                                    <DarkModeRounded color="primary" />
                                ) : (
                                    <DarkModeOutlined />
                                )}
                            </ToggleButton>
                        </Tooltip>
                    </ToggleButtonGroup>
                </Stack>
            </Menu>
        </Fragment>
    );
}
