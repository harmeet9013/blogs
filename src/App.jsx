import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
    Backdrop,
    CircularProgress,
    Container,
    CssBaseline,
    Snackbar,
    Stack,
    ThemeProvider,
    createTheme,
    useMediaQuery,
} from "@mui/material";
import { deepOrange, green, red } from "@mui/material/colors";
import Cookies from "js-cookie";
import axios from "axios";

import Blogs from "./components/pages/BlogsComponents/Blogs";
import Header from "./components/shared/HeaderComponents/Header";
import ShowBlog from "./components/pages/ShowBlogComponents/ShowBlog";
import AuthPage from "./components/pages/AuthPage";
import CreateBlog from "./components/pages/CreateBlogComponents/CreateBlog";
import ErrorPage from "./components/pages/ErrorPage";
import ScrollToTop from "./components/shared/ScrollToTop";

// export const API_URL = "https://harmeet9013-blogs-api.vercel.app";
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
    const [selectedTheme, setSelectedTheme] = useState("system");
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
        typography: {
            fontFamily: "work sans",
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {
                        fontFamily: "work sans",
                        "&:link": {
                            color: darkMode
                                ? "rgba(50, 255, 255, 1)"
                                : "rgba(50, 120, 120, 1)",
                        },
                    },
                    body: {
                        textAlign: "center",
                        justfifyContent: "center",
                        alignItems: "center",
                        transition: "all 0.2s ease",
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {},
            },
        },
    };
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "#101010",
                header: "#101010af",
                actions: "rgba(20,20,20,0.98)",
            },
            backdrop: "rgba(0,0,0,0.7)",
            accent: {
                primary: "#5a002d",
                secondary: "#feb8d4",
                success: green[900],
                hover: "#34001a",
            },
            textField: {
                main: deepOrange[300],
                error: red[200],
            },
            icon: {
                main: "#ff4f98",
            },
            iconSuccess: {
                main: green[500],
            },
        },
        ...CssBaselineStyles,
    });
    const lightTheme = createTheme({
        palette: {
            mode: "light",
            background: {
                default: "#f7f5f5",
                header: "#f7f5f5af",
                actions: "rgba(240,240,240,0.93)",
            },
            backdrop: "rgba(255,255,255,0.7)",
            accent: {
                primary: "#b2e5ff",
                secondary: "#C3ACD0",
                hover: "#e1f5ff",
                success: green[300],
            },
            textField: {
                main: deepOrange[800],
                error: red[500],
            },
            icon: {
                main: "#0056a3",
            },
            iconSuccess: {
                main: green[800],
            },
        },
        ...CssBaselineStyles,
    });

    let customTheme = darkMode ? darkTheme : lightTheme;

    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)")
        ? true
        : false;

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
            setSelectedTheme("dark");
            setDarkMode(true);
        } else if (theme === "light") {
            setSelectedTheme("light");
            setDarkMode(false);
        } else {
            setSelectedTheme("system");
            setDarkMode(systemTheme);
        }
    };

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline enableColorScheme />
            <Header
                darkMode={darkMode}
                refresh={refresh}
                isLoggedIn={isLoggedIn}
                verifyToken={verifyToken}
                updateThemeFromCookies={updateThemeFromCookies}
                checkToken={checkToken}
                selectedTheme={selectedTheme}
                setSelectedTheme={setSelectedTheme}
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
                {/* <Typography variant="h6">please wait</Typography> */}
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

            {/* button that takes you to heaven */}
            <ScrollToTop />

            <Stack
                component={Container}
                justifyContent="center"
                alignItems="center"
            >
                <Routes>
                    {/* Home page route */}
                    <Route
                        exact
                        path="/"
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
                        path="/blog/:id"
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
                        path="/authUser"
                        element={
                            <AuthPage
                                darkMode={darkMode}
                                isLoggedIn={isLoggedIn}
                                setRefresh={setRefresh}
                                setShowLoading={setShowLoading}
                                setIsLoggedIn={setIsLoggedIn}
                                setSnackbarInputs={setSnackbarInputs}
                            />
                        }
                    />

                    {/* Create blog */}
                    <Route
                        exact
                        path="/createBlog"
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
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            </Stack>
        </ThemeProvider>
    );
}
