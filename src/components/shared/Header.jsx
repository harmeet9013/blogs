import "./Header.css";
import { Divider, Paper, Tooltip } from "@mui/material";
import {
    LightMode,
    DarkMode,
    GitHub,
    Add,
    Login,
    Logout,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header({
    darkMode,
    setDarkMode,
    isLoggedIn,
    setShowLoading,
    setShowDialog,
    setDialogText,
}) {
    const navigate = useNavigate();

    return (
        <Paper
            elevation={3}
            className={`header-container ${darkMode ? "dark" : "light"}`}
        >
            {/* Takes you to home page when you click on BLOGS */}
            <Tooltip title="Home Page" disableInteractive>
                <NavLink
                    className={`navbar-heading-text ${
                        darkMode ? "dark" : "light"
                    }`}
                    to={"#"}
                    onClick={() => {
                        setTimeout(() => {
                            navigate("/");
                            setShowLoading(false);
                        }, 200);
                        setShowLoading(true);
                    }}
                >
                    BLOGS
                </NavLink>
            </Tooltip>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    placeItems: "right",
                    alignItems: "center",
                    margin: "0px",
                    gap: "10px",
                }}
            >
                {/* Create new blog, only shows when logged in */}
                {isLoggedIn && (
                    <NavLink
                        to={`#`}
                        className={`navbar-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setTimeout(() => {
                                navigate("/createBlog");
                                setShowLoading(false);
                            }, 200);
                            setShowLoading(true);
                        }}
                    >
                        <Add sx={{ marginY: "-4px" }} /> Create a New Blog
                    </NavLink>
                )}

                {/* logout / login */}
                {isLoggedIn ? (
                    <button
                        className={`navbar-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setDialogText(() => {
                                return {
                                    title: "Logout",
                                    content: "Are you sure you want to Logout?",
                                    event: "logout",
                                    location: "",
                                };
                            });
                            setShowDialog(true);
                        }}
                    >
                        <Logout sx={{ marginY: "-4px" }} /> Logout
                    </button>
                ) : (
                    <NavLink
                        to={`#`}
                        className={`navbar-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setTimeout(() => {
                                navigate("/authUser");
                                setShowLoading(false);
                            }, 200);
                            setShowLoading(true);
                        }}
                    >
                        <Login sx={{ marginY: "-4px" }} /> Login
                    </NavLink>
                )}

                <Divider
                    sx={{ bgcolor: `${darkMode ? "white" : "black"}` }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                />

                {/* Github NavLink */}
                <Tooltip title="Source on GitHub" disableInteractive arrow>
                    <NavLink
                        to="#"
                        className={`navbar-button-secondary ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setDialogText(() => {
                                return {
                                    title: "Github",
                                    content: "View source code on GitHub?",
                                    event: "NavLink",
                                    location:
                                        "https://github.com/harmeet9013/blogs",
                                };
                            });
                            setShowDialog(true);
                        }}
                    >
                        <GitHub sx={{ marginY: "-4px" }} />
                    </NavLink>
                </Tooltip>

                {/* Dark/Light mode switch */}
                <Tooltip
                    title={`${
                        darkMode
                            ? "Change to Light Mode"
                            : "Change to Dark Mode"
                    }`}
                    disableInteractive
                    arrow
                >
                    <a
                        className={`navbar-button-secondary ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setDarkMode(!darkMode);
                        }}
                    >
                        {darkMode ? (
                            <DarkMode sx={{ marginY: "-3px" }} />
                        ) : (
                            <LightMode sx={{ marginY: "-3px" }} />
                        )}
                    </a>
                </Tooltip>
            </div>
        </Paper>
    );
}
