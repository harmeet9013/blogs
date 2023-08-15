import { Fragment, useEffect, useState } from "react";
import {
    Add,
    Logout,
    Login,
    GitHub,
    DarkMode,
    LightMode,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Container,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Skeleton,
    styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function DesktopActions(props) {
    const [iconAnchor, setIconAnchor] = useState(null);
    const [avatarImgLoad, setAvatarImgLoad] = useState(false);

    const navigate = useNavigate();

    const MyMenuItem = styled(MenuItem)(({ theme }) => ({
        fontSize: props.isMobile ? "16px" : "18px",
        width: "100%",
        padding: props.isMobile ? "20px 30px" : "10px 30px",
        gap: "10px",
        justifyContent: "flex-start",
    }));

    const MyAvatar = styled(Avatar)(({ theme }) => ({
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
    }));

    const DividerHorizontalSX = {
        borderBottomWidth: 2,
        borderRadius: "15px",
    };
    const DividerVerticalSX = {
        borderRightWidth: 2,
        borderRadius: "15px",
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

    return (
        <Fragment>
            <props.NavbarButton
                onClick={() => {
                    setTimeout(() => {
                        if (props.isLoggedIn.logged) {
                            navigate("/blogs/createBlog");
                        } else {
                            navigate("/blogs/authUser");
                        }
                        props.setShowLoading(false);
                    }, 200);
                    props.setShowLoading(true);
                }}
                startIcon={<Add color="icon" />}
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

                                    props.setDialogInputs({
                                        open: true,
                                        title: "Logout",
                                        content:
                                            "Are you sure you want to logout?",
                                        navigate: "logout",
                                        icon: <Logout color="icon" />,
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
                                    navigate("/blogs/authUser");
                                    props.setShowLoading(false);
                                }, 200);
                                setIconAnchor(null);
                                props.setShowLoading(true);
                            }}
                        >
                            <Login color="icon" /> Login
                        </MyMenuItem>
                    )}
                    <Divider
                        flexItem
                        variant="middle"
                        sx={DividerHorizontalSX}
                    />
                    <MyMenuItem
                        dense
                        onClick={() => {
                            props.setDialogInputs({
                                open: true,
                                title: "GitHub",
                                content: "View source code on GitHub?",
                                navigate:
                                    "https://github.com/harmeet9013/blogs",
                                icon: <GitHub color="icon" />,
                            });
                            setIconAnchor(null);
                        }}
                    >
                        <GitHub color="icon" /> Source Code
                    </MyMenuItem>

                    <MyMenuItem
                        dense
                        onClick={() => {
                            const theme = !props.darkMode;

                            props.setDarkMode(theme);
                            Cookies.remove("theme");
                            if (theme === true) {
                                Cookies.set("theme", "dark");
                            } else if (theme === false) {
                                Cookies.set("theme", "light");
                            }
                        }}
                    >
                        {props.darkMode ? (
                            <Fragment>
                                <LightMode color="icon" /> Light Mode
                            </Fragment>
                        ) : (
                            <Fragment>
                                <DarkMode color="icon" /> Dark Mode
                            </Fragment>
                        )}
                    </MyMenuItem>
                </Container>
            </Menu>
        </Fragment>
    );
}
