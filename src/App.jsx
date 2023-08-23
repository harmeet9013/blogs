import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
    Backdrop,
    CircularProgress,
    Container,
    CssBaseline,
    IconButton,
    Stack,
    ThemeProvider,
    createTheme,
    useMediaQuery,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { Close } from "@mui/icons-material";
import { ConfirmProvider } from "material-ui-confirm";
import { deepOrange, green, red } from "@mui/material/colors";
import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from "notistack";

import AuthPage from "./components/pages/AuthPage";
import ErrorPage from "./components/pages/ErrorPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import { FooterButtons } from "./components/shared/Footer";
import Blogs from "./components/pages/BlogsComponents/Blogs";
import Header from "./components/shared/HeaderComponents/Header";
import ShowBlog from "./components/pages/ShowBlogComponents/ShowBlog";
import CreateBlog from "./components/pages/CreateBlogComponents/CreateBlog";
import CustomComponents, {
    DialogOptions,
    StyledMaterialDesignContent,
    serverOffline,
    systemTheme,
} from "./components/shared/CustomComponents";

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

    // isMobile constant
    const isMobile = useMediaQuery("(max-width: 900px");

    // material ui theme
    const customTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            ...(darkMode
                ? {
                      background: {
                          default: "#000000",
                          header: "#000000c5",
                          actions: "#000000e4",
                          backdrop: "#000000af",
                          button: "#1a1a1a",
                      },
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
                          header: "#f7f5f5c5",
                          actions: "#f7f5f5e4",
                          backdrop: "#f7f5f5af",
                          button: "#e1e1e1",
                      },
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
        typography: {
            fontFamily: "work sans",
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {
                        fontFamily: "work sans",
                        scrollBehavior: "smooth",
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
        },
    });

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
                enqueueSnackbar("Verifying ession, Please wait.", {
                    variant: "warning",
                });

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
                    enqueueSnackbar("Session verified!", {
                        variant: "success",
                    });
                } catch (error) {
                    if (error.code === "ERR_NETWORK") {
                        serverOffline();
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
                            variant: "error",
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

        setTimeout(() => {
            verifyToken();
        }, 200);
    }, []);

    //fetch Blogs when the component loads
    useEffect(() => {
        // fetch blogs function
        const fetchBlogs = async () => {
            setShowLoading(true);
            try {
                const response = await axios.get(
                    `${API_URL}/api/blogs/allBlogs`
                );
                setBlogs(response.data);
            } catch (error) {
                if (error.code === "ERR_NETWORK") {
                    serverOffline();
                }
                setBlogs(null);
            }

            setShowLoading(false);
        };

        if (refresh) fetchBlogs();
        setRefresh(false);
    }, [refresh]);

    return (
        <ThemeProvider theme={customTheme}>
            {/* dialog components */}
            <ConfirmProvider defaultOptions={DialogOptions}>
                {/* call the empty component to update the various custom components */}
                <CustomComponents isMobile={isMobile} darkMode={darkMode} />

                {/* snackbar component */}
                <SnackbarProvider
                    preventDuplicate
                    maxSnack={1}
                    iconVariant={{
                        warning: (
                            <CircularProgress
                                disableShrink
                                size={20}
                                sx={{
                                    color: (theme) =>
                                        theme.palette.text.primary,
                                    marginRight: 1,
                                }}
                            />
                        ),
                    }}
                    Components={{
                        success: StyledMaterialDesignContent,
                        warning: StyledMaterialDesignContent,
                        error: StyledMaterialDesignContent,
                        info: StyledMaterialDesignContent,
                    }}
                    action={(snackbarId) => (
                        <IconButton onClick={() => closeSnackbar(snackbarId)}>
                            <Close />
                        </IconButton>
                    )}
                >
                    {/* needed */}
                    <CssBaseline enableColorScheme />

                    {/* header components */}
                    <Header
                        isMobile={isMobile}
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
                            backgroundColor: (theme) =>
                                theme.palette.background.backdrop,
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
                        component={!isMobile ? Container : null}
                        padding={isMobile && "0px 10px 0px 10px"}
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
                                        isMobile={isMobile}
                                        showLoading={showLoading}
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
                                        isMobile={isMobile}
                                        isLoggedIn={isLoggedIn}
                                        showLoading={showLoading}
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
                                        isMobile={isMobile}
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
                                        isMobile={isMobile}
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
                                    <ErrorPage
                                        isMobile={isMobile}
                                        setShowLoading={setShowLoading}
                                    />
                                }
                            />
                        </Routes>
                        {!showLoading && <FooterButtons isMobile={isMobile} />}
                    </Stack>
                </SnackbarProvider>
            </ConfirmProvider>
        </ThemeProvider>
    );
}
