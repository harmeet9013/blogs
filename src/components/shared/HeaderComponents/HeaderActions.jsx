import { Fragment, useState } from "react";
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
    styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DesktopActions(props) {
    const [iconAnchor, setIconAnchor] = useState(null);
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

    const MyBoxAvatar = styled(Box)(({ theme }) => ({
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }));

    const DividerHorizontalSX = {
        borderBottomWidth: 4,
        borderRadius: "15px",
    };
    const DividerVerticalSX = {
        borderRightWidth: 4,
        borderRadius: "15px",
    };

    return (
        <Fragment>
            <props.NavbarButton
                onClick={() => {
                    setTimeout(() => {
                        if (props.isLoggedIn === null) {
                            navigate("/authUser");
                        } else {
                            navigate("/createBlog");
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
                {props.isLoggedIn !== null ? (
                    <MyAvatar>
                        <MyBoxAvatar
                            component="img"
                            src={props.isLoggedIn.avatar}
                        />
                    </MyAvatar>
                ) : (
                    <MyAvatar />
                )}
            </IconButton>
            <Menu
                open={Boolean(iconAnchor)}
                anchorEl={iconAnchor}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                onClose={() => {
                    setIconAnchor(null);
                }}
                PaperProps={{
                    style: {
                        borderRadius: "15px",
                    },
                }}
            >
                <Container disableGutters>
                    {props.isLoggedIn !== null ? (
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
                                <MyAvatar>
                                    <MyBoxAvatar
                                        component="img"
                                        src={props.isLoggedIn.avatar}
                                    />
                                </MyAvatar>
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
                            props.setDarkMode(!props.darkMode);
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
