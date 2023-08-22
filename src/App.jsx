import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
    Backdrop,
    CircularProgress,
    Container,
    CssBaseline,
    Stack,
    ThemeProvider,
    createTheme,
    styled,
    useMediaQuery,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { ConfirmProvider } from "material-ui-confirm";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { deepOrange, green, grey, orange, red } from "@mui/material/colors";
import {
    MaterialDesignContent,
    SnackbarProvider,
    enqueueSnackbar,
} from "notistack";

import AuthPage from "./components/pages/AuthPage";
import ErrorPage from "./components/pages/ErrorPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import Blogs from "./components/pages/BlogsComponents/Blogs";
import Header from "./components/shared/HeaderComponents/Header";
import ShowBlog from "./components/pages/ShowBlogComponents/ShowBlog";
import CreateBlog from "./components/pages/CreateBlogComponents/CreateBlog";

export const API_URL = "https://harmeet9013-blogs-api.vercel.app";
// export const API_URL = "http://localhost:5000";

export default function App() {
    const [blogs, setBlogs] = useState(null);
    const [darkMode, setDarkMode] = useState(true);
    const [selectedTheme, setSelectedTheme] = useState("system");
    const [isLoggedIn, setIsLoggedIn] = useState({
        logged: false,
        name: "",
        avatar: "",
    });
    const [refresh, setRefresh] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)")
        ? true
        : false;

    const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
        "&.notistack-MuiContent-success": {
            borderRadius: "15px",
            backgroundColor: darkMode ? green[900] : green[300],
            color: darkMode ? "white" : "black",
        },
        "&.notistack-MuiContent-error": {
            borderRadius: "15px",
            backgroundColor: darkMode ? red[900] : red[300],
            color: darkMode ? "white" : "black",
        },
        "&.notistack-MuiContent-warning": {
            borderRadius: "15px",
            backgroundColor: darkMode ? orange[900] : orange[300],
            color: darkMode ? "white" : "black",
        },
        "&.notistack-MuiContent-info": {
            borderRadius: "15px",
            backgroundColor: darkMode ? grey[900] : grey[300],
            color: darkMode ? "white" : "black",
        },
    }));

    const DialogButtonSX = {
        color: (theme) => theme.palette.text.primary,
        backgroundColor: (theme) => theme.palette.action.hover,
        padding: "8px 15px",
        fontSize: "1rem",
        borderRadius: "15px",
        "&:hover": {
            backgroundColor: (theme) => theme.palette.accent.hover,
        },
    };

    // fetch blogs function
    const fetchBlogs = async () => {
        setShowLoading(true);
        try {
            const response = await axios.get(`${API_URL}/api/blogs/allBlogs`);
            setBlogs(response.data);
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                enqueueSnackbar("Server offline.", { variant: "info" });
            }
            setBlogs(null);
        }
        setShowLoading(false);
    };

    // update theme from cookies or system
    useEffect(() => {
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
    }, [systemTheme]);

    // verify token from cookies
    useEffect(() => {
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
                        logged: true,
                        name: result.data.name,
                        avatar: result.data.avatar,
                    });
                } catch (error) {
                    if (error.code === "ERR_NETWORK") {
                        enqueueSnackbar("Server offline.", { variant: "info" });
                    } else if (
                        error.response.status === 403 ||
                        error.response.status === 401
                    ) {
                        // remove cookies and update the state
                        setIsLoggedIn({
                            logged: false,
                            name: "",
                            avatar: "",
                        });
                        Cookies.remove("token");
                        Cookies.remove("userID");

                        // inform user for invalid login
                        enqueueSnackbar("Session expired.", {
                            variant: "warning",
                        });
                    } else {
                        enqueueSnackbar(
                            "There was an error connecting to the servers.",
                            {
                                variant: "error",
                            }
                        );
                    }
                }
            }
        };

        verifyToken();
    }, []);

    // stop loading progress after 200ms
    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 200);
    }, [showLoading]);

    //fetch Blogs when the component loads
    useEffect(() => {
        if (refresh) fetchBlogs();
        setRefresh(false);
    }, [refresh]);

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

    const customTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            ...(darkMode
                ? {
                      background: {
                          default: "#000000",
                          header: "#0000008f",
                          actions: "rgba(20, 20, 20, 0.98)",
                      },
                      backdrop: "rgba(0, 0, 0, 0.75)",
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
                  }
                : {
                      background: {
                          default: "#f7f5f5",
                          header: "#f7f5f5cf",
                          actions: "rgba(240, 240, 240, 0.93)",
                      },
                      backdrop: "rgba(0, 0, 0, 0.8)",
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
                  }),
        },
        ...CssBaselineStyles,
    });

    return (
        <ThemeProvider theme={customTheme}>
            {/* config of dialog autoconfirm */}

            <ConfirmProvider
                defaultOptions={{
                    confirmationButtonProps: { autoFocus: true },
                    dialogProps: {
                        maxWidth: "xs",
                        disableScrollLock: true,

                        PaperProps: {
                            elevation: 0,
                            sx: {
                                padding: "15px 0px 15px 0px",
                                justfifyContent: "center",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: (theme) =>
                                    theme.palette.background.dialog,
                            },
                        },
                    },
                    titleProps: {
                        fontSize: "2.5rem",
                    },
                    contentProps: {
                        sx: {
                            fontSize: "1.2rem",
                        },
                    },
                    confirmationButtonProps: {
                        startIcon: <CheckCircle color="icon" />,
                        sx: DialogButtonSX,
                    },
                    cancellationButtonProps: {
                        startIcon: <Cancel color="icon" />,
                        sx: DialogButtonSX,
                    },
                }}
            >
                <SnackbarProvider
                    preventDuplicate
                    Components={{
                        success: StyledMaterialDesignContent,
                        warning: StyledMaterialDesignContent,
                        error: StyledMaterialDesignContent,
                        info: StyledMaterialDesignContent,
                    }}
                />
                <CssBaseline enableColorScheme />

                <Header
                    darkMode={darkMode}
                    isLoggedIn={isLoggedIn}
                    selectedTheme={selectedTheme}
                    setRefresh={setRefresh}
                    setDarkMode={setDarkMode}
                    setIsLoggedIn={setIsLoggedIn}
                    setShowLoading={setShowLoading}
                    setSelectedTheme={setSelectedTheme}
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
                </Backdrop>

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
                                    setRefresh={setRefresh}
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
                                    isLoggedIn={isLoggedIn}
                                    setRefresh={setRefresh}
                                    setShowLoading={setShowLoading}
                                />
                            }
                        />

                        {/* Login page */}
                        <Route
                            exact
                            path="/authUser"
                            element={
                                <AuthPage
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                    setShowLoading={setShowLoading}
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
                                    setRefresh={setRefresh}
                                    setShowLoading={setShowLoading}
                                />
                            }
                        />
                        <Route
                            exact
                            path="*"
                            element={
                                <ErrorPage setShowLoading={setShowLoading} />
                            }
                        />
                    </Routes>
                </Stack>
            </ConfirmProvider>
        </ThemeProvider>
    );
}
