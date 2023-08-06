import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
    Backdrop,
    CircularProgress,
    CssBaseline,
    Snackbar,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import { deepOrange, green, red } from "@mui/material/colors";
import Cookies from "js-cookie";
import axios from "axios";

import Blogs from "./components/pages/BlogsComponents/Blogs";
import Header from "./components/shared/HeaderComponents/Header";
import ShowBlog from "./components/pages/ShowBlogComponents/ShowBlog";
import AuthPage from "./components/pages/AuthPage";
import CreateBlog from "./components/pages/CreateBlogComponents/CreateBlog";

// export const API_URL = "https://blogs-server-five.vercel.app";
export const API_URL = "http://localhost:5000";

export default function App() {
    const checkToken = () => {
        if (Cookies.get("token") && Cookies.get("userID")) {
            return true;
        } else {
            return false;
        }
    };

    const [blogs, setBlogs] = useState({});

    const [darkMode, setDarkMode] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState({
        logged: checkToken(),
        name: "",
        avatar: "",
    });
    const [refresh, setRefresh] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [snackbarInputs, setSnackbarInputs] = useState({
        open: false,
        message: "",
    });

    const CssBaselineStyles = {
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {},
                    body: {
                        textAlign: "center",
                        justfifyContent: "center",
                        alignItems: "center",
                        transition: "all 0.2s ease",
                    },
                },
            },
        },
    };
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "#101010",
                header: "#131313",
            },
            backdrop: "rgba(0,0,0,0.7)",
            accent: {
                primary: "#4C4B16",
                secondary: "#606C5D",
                success: green[900],
            },
            textField: {
                main: deepOrange[300],
                error: red[200],
            },
            icon: {
                main: "#F1C376",
            },
            iconSuccess: {
                main: green[300],
            },
        },
        ...CssBaselineStyles,
    });
    const lightTheme = createTheme({
        palette: {
            mode: "light",
            background: {
                default: "#f7f5f5",
                header: "#ebe8e8",
            },
            backdrop: "rgba(255,255,255,0.7)",
            accent: {
                primary: "#B08BBB",
                secondary: "#C3ACD0",
                success: green[300],
            },
            textField: {
                main: deepOrange[800],
                error: red[500],
            },
            icon: {
                main: "#674188",
            },
            iconSuccess: {
                main: green[300],
            },
        },
        ...CssBaselineStyles,
    });

    const customTheme = darkMode ? darkTheme : lightTheme;

    const verifyToken = async () => {
        const token = Cookies.get("token");
        const userID = Cookies.get("userID");

        if (token && userID) {
            try {
                const result = await axios.post(
                    `${API_URL}/api/users/verify`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            userID: userID,
                            "Content-Type": "application/json",
                        },
                    }
                );

                setIsLoggedIn({
                    logged: checkToken(),
                    name: result.data.name,
                    avatar: result.data.avatar,
                });
            } catch (error) {
                if (
                    error.response.status === 403 ||
                    error.response.status === 401
                ) {
                    // remove cookies and update the state
                    setIsLoggedIn({
                        logged: checkToken(),
                        name: "",
                        avatar: "",
                    });
                    Cookies.remove("token");
                    Cookies.remove("userID");

                    // inform user for invalid login
                    setSnackbarInputs({
                        open: true,
                        message: "This session is expired. Please login again.",
                    });
                } else {
                    setSnackbarInputs({
                        open: true,
                        message:
                            "There was an error connecting to the servers.",
                    });
                }
            }
        }
    };

    const updateThemeFromCookies = () => {
        const theme = Cookies.get("theme");

        if (theme === "dark") {
            setDarkMode(true);
        } else if (theme === "light") {
            setDarkMode(false);
        } else {
            Cookies.set("theme", "dark");
        }
    };

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Header
                darkMode={darkMode}
                isLoggedIn={isLoggedIn}
                verifyToken={verifyToken}
                updateThemeFromCookies={updateThemeFromCookies}
                checkToken={checkToken}
                setShowLoading={setShowLoading}
                setDarkMode={setDarkMode}
                setRefresh={setRefresh}
                setIsLoggedIn={setIsLoggedIn}
                setSnackbarInputs={setSnackbarInputs}
            />

            {/* Loading on the entire screen */}
            <Backdrop
                sx={{
                    backgroundColor: (theme) => theme.palette.backdrop,
                    zIndex: 999,
                    display: "flex",
                    flexDirection: "column",
                }}
                open={showLoading}
            >
                <CircularProgress color="icon" />
                <Typography variant="h6">please wait</Typography>
            </Backdrop>

            {/* SnackBar Component */}
            <Snackbar
                open={snackbarInputs.open}
                message={snackbarInputs.message}
                autoHideDuration={5000}
                onClose={() => {
                    setSnackbarInputs({
                        open: false,
                        message: "",
                    });
                }}
            />

            <Routes>
                {/* Home page route */}
                <Route
                    exact
                    path="/blogs"
                    element={
                        <Blogs
                            blogs={blogs}
                            refresh={refresh}
                            setRefresh={setRefresh}
                            setBlogs={setBlogs}
                            setShowLoading={setShowLoading}
                        />
                    }
                />

                {/* Show blog seaparately */}
                <Route
                    exact
                    path="/blogs/blog/:id"
                    element={
                        <ShowBlog
                            darkMode={darkMode}
                            isLoggedIn={isLoggedIn}
                            setShowLoading={setShowLoading}
                            setSnackbarInputs={setSnackbarInputs}
                            setRefresh={setRefresh}
                        />
                    }
                />

                {/* Login page */}
                <Route
                    exact
                    path="/blogs/authUser"
                    element={
                        <AuthPage
                            darkMode={darkMode}
                            isLoggedIn={isLoggedIn}
                            setShowLoading={setShowLoading}
                            setIsLoggedIn={setIsLoggedIn}
                            setSnackbarInputs={setSnackbarInputs}
                        />
                    }
                />

                {/* Create blog */}
                <Route
                    exact
                    path="/blogs/createBlog"
                    element={
                        <CreateBlog
                            darkMode={darkMode}
                            isLoggedIn={isLoggedIn}
                            setShowLoading={setShowLoading}
                            setRefresh={setRefresh}
                            setSnackbarInputs={setSnackbarInputs}
                        />
                    }
                />
            </Routes>
        </ThemeProvider>
    );
}
