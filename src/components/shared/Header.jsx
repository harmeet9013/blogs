import "./Header.css";
import {
    Box,
    Divider,
    Paper,
    Tooltip,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Button,
} from "@mui/material";
import {
    LightMode,
    DarkMode,
    GitHub,
    Add,
    Login,
    Logout,
} from "@mui/icons-material";
import {
    DialogDark,
    DialogLight,
    DialogTitleDark,
    DialogTitleLight,
    DialogContentDark,
    DialogContentLight,
    DialogButtonDark,
    DialogButtonLight,
} from "./DialogStyle";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

export default function Header({
    darkMode,
    isLoggedIn,
    dialogInputs,
    dialogOpen,
    setDarkMode,
    setShowLoading,
    setRefresh,
    setIsLoggedIn,
    setSnackbarInputs,
    setDialogInputs,
    setDialogOpen,
}) {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            {/* Dialog component specifically for header usage */}
            <Dialog
                open={dialogOpen}
                PaperProps={{
                    component: Box,
                    sx: darkMode ? DialogDark : DialogLight,
                }}
            >
                <DialogTitle sx={darkMode ? DialogTitleDark : DialogTitleLight}>
                    {dialogInputs.title}
                </DialogTitle>
                <Divider
                    sx={{
                        bgcolor: `${darkMode ? "white" : "black"}`,
                    }}
                    // variant="middle"
                    flexItem
                />
                <DialogContent
                    sx={darkMode ? DialogContentDark : DialogContentLight}
                >
                    {dialogInputs.content}
                </DialogContent>
                <DialogActions sx={darkMode ? DialogDark : DialogLight}>
                    <Button
                        style={darkMode ? DialogButtonDark : DialogButtonLight}
                        onClick={() => {
                            setDialogOpen(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        style={darkMode ? DialogButtonDark : DialogButtonLight}
                        onClick={() => {
                            setTimeout(() => {
                                if (dialogInputs.navigate === "logout") {
                                    setIsLoggedIn({
                                        logged: false,
                                        userID: "",
                                    });
                                    setSnackbarInputs({
                                        open: true,
                                        message: "You are logged out!",
                                    });
                                } else if (dialogInputs.navigate === "/") {
                                    setRefresh(true);
                                    navigate("/");
                                } else {
                                    window.open(
                                        dialogInputs.navigate,
                                        "_blank"
                                    );
                                }
                                setDialogInputs({
                                    title: "",
                                    content: "",
                                    navigate: "",
                                });
                                setShowLoading(false);
                            }, 200);

                            setShowLoading(true);
                            setDialogOpen(false);
                        }}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Component that renders the header */}
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
                            }, 200);
                            setShowLoading(true);
                            setRefresh(true);
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
                    {isLoggedIn.logged && (
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
                            <Add
                                sx={{
                                    marginY: "-4px",
                                    color: darkMode ? "#ADFBFF" : "#A3320B",
                                }}
                            />{" "}
                            Create a New Blog
                        </NavLink>
                    )}

                    {/* logout / login */}
                    {isLoggedIn.logged ? (
                        <button
                            className={`navbar-button ${
                                darkMode ? "dark" : "light"
                            }`}
                            onClick={() => {
                                setDialogOpen(true);
                                setDialogInputs({
                                    title: "Logout",
                                    content: "Are you sure you want to logout?",
                                    navigate: "logout",
                                });
                            }}
                        >
                            <Logout
                                className="icon-color"
                                sx={{
                                    marginY: "-4px",
                                    color: darkMode ? "#ADFBFF" : "#A3320B",
                                }}
                            />{" "}
                            Logout
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
                            <Login
                                sx={{
                                    marginY: "-4px",
                                    color: darkMode ? "#ADFBFF" : "#A3320B",
                                }}
                            />{" "}
                            Login
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
                                setDialogOpen(true);
                                setDialogInputs({
                                    title: "GitHub",
                                    content: "View source code on GitHub?",
                                    navigate:
                                        "https://github.com/harmeet9013/blogs",
                                });
                            }}
                        >
                            <GitHub
                                sx={{
                                    marginY: "-4px",
                                    color: darkMode ? "#ADFBFF" : "#A3320B",
                                }}
                            />
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
                                <DarkMode
                                    sx={{
                                        marginY: "-3px",
                                        color: "#ADFBFF",
                                    }}
                                />
                            ) : (
                                <LightMode
                                    sx={{
                                        marginY: "-3px",
                                        color: "#A3320B",
                                    }}
                                />
                            )}
                        </a>
                    </Tooltip>
                </div>
            </Paper>
        </React.Fragment>
    );
}
