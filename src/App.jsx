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
import { CancelRounded, CheckCircleRounded, Close } from "@mui/icons-material";
import { ConfirmProvider } from "material-ui-confirm";
import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from "notistack";

import AuthPage from "./components/pages/AuthPage";
import ErrorPage from "./components/pages/ErrorPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import { FooterButtons } from "./components/shared/Footer";
import Blogs from "./components/pages/BlogsComponents/Blogs";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import Header from "./components/shared/HeaderComponents/Header";
import ShowBlog from "./components/pages/ShowBlogComponents/ShowBlog";
import CreateBlog from "./components/pages/CreateBlogComponents/CreateBlog";
import CustomComponents, {
    StyledMaterialDesignContent,
    serverOffline,
} from "./components/shared/CustomComponents";

export const API_URL = "https://harmeet9013-blogs-api.vercel.app";

export default function App() {
    // state hooks
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

    // system theme (dynamic)
    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)")
        ? true
        : false;

    // material you theme!
    const material3Theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            ...(darkMode
                ? {
                      primary: {
                          main: "#ffb3b4",
                          on: "#5f131c",
                          container: {
                              main: "#7e2a30",
                              on: "#ffdad9",
                          },
                          fixed: {
                              main: "#ffdad9",
                              dim: "#ffb3b4",
                              on: "#40000a",
                              onvar: "#7e2a30",
                          },
                      },
                      secondary: {
                          main: "#e6bdbc",
                          on: "#5f131c",
                          container: {
                              main: "#5d3f3f",
                              on: "#ffdad9",
                          },
                          fixed: {
                              main: "#ffdad9",
                              dim: "#e6bdbc",
                              on: "#2c1516",
                              onvar: "#5d3f3f",
                          },
                      },
                      tertiary: {
                          main: "#e5c18d",
                          on: "#422c05",
                          container: {
                              main: "#5b421a",
                              on: "#ffddaf",
                          },
                          fixed: {
                              main: "#ffddaf",
                              dim: "#e5c18d",
                              on: "#281800",
                              onvar: "#633b48",
                          },
                      },

                      background: {
                          default: "#120d0d",
                          low: "#201a1a",
                          med: "#241e1e",
                          high: "#2f2828",
                          highest: "#3a3333",
                          header: "#120d0dda",
                      },

                      divider: "#a08c8c",
                      dividervar: "#524343",
                      backdrop: "#120d0dba",
                  }
                : {
                      primary: {
                          main: "#9c4146",
                          on: "#ffffff",
                          container: {
                              main: "#ffdad9",
                              on: "#40000a",
                          },
                          fixed: {
                              main: "#ffdad9",
                              dim: "#ffb3b4",
                              on: "#40000a",
                              onvar: "#7e2a30",
                          },
                      },
                      secondary: {
                          main: "#775656",
                          on: "#ffffff",
                          container: {
                              main: "#ffdad9",
                              on: "#2c1516",
                          },
                          fixed: {
                              main: "#ffdad9",
                              dim: "#e6bdbc",
                              on: "#2c1516",
                              onvar: "#5d3f3f",
                          },
                      },
                      tertiary: {
                          main: "#755a2f",
                          on: "#ffffff",
                          container: {
                              main: "#ffddaf",
                              on: "#281800",
                          },
                          fixed: {
                              main: "#ffddaf",
                              dim: "#e5c18d",
                              on: "#281800",
                              onvar: "#5b421a",
                          },
                      },

                      background: {
                          default: "#ffffff",
                          low: "#fef1f0",
                          med: "#f8ebea",
                          high: "#f2e5e5",
                          highest: "#ece0df",
                          header: "#ffffffda",
                      },

                      divider: "#d7c1c1",
                      dividervar: "#857373",
                      backdrop: "#ffffffba",
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
                        transition: "all 0.25s ease",
                    },
                },
            },
        },
    });

    // dialog button SX object
    const DialogButtonSX = (theme) => ({
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.high,
        padding: "0.6rem 1rem",
        fontSize: theme.typography.button.fontSize,
        borderRadius: 10,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    });

    // default config for dialog
    const DialogOptions = {
        dialogProps: {
            maxWidth: "xs",
            disableScrollLock: true,
            slotProps: {
                backdrop: {
                    sx: {
                        backgroundColor: (theme) => theme.palette.backdrop,
                    },
                },
            },
            PaperProps: {
                elevation: 0,
                sx: {
                    padding: "0rem 0px 1rem 0px",
                    justfifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    backgroundColor: (theme) => theme.palette.background.low,
                    transition: (theme) =>
                        `${theme.transitions.create()} !important`,
                },
            },
        },
        titleProps: {
            fontSize: (theme) => theme.typography.h4.fontSize,
            fontWeight: 500,
            color: (theme) => theme.palette.primary.main,
        },
        contentProps: {
            sx: (theme) => theme.typography.body1,
        },
        confirmationButtonProps: {
            autoFocus: true,
            startIcon: <CheckCircleRounded />,
            sx: DialogButtonSX,
        },
        cancellationButtonProps: {
            startIcon: <CancelRounded />,
            sx: DialogButtonSX,
        },
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
                enqueueSnackbar("Verifying session, Please wait.", {
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
        <ThemeProvider theme={material3Theme}>
            {/* dialog component */}
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
                                sx={(theme) => ({
                                    color: theme.palette.text.primary,
                                    marginRight: 1,
                                })}
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
                />
                {/* needed */}
                <CssBaseline enableColorScheme />

                {/* header components */}
                <Header
                    isMobile={isMobile}
                    isLoggedIn={isLoggedIn}
                    systemTheme={systemTheme}
                    selectedTheme={selectedTheme}
                    setRefresh={setRefresh}
                    setDarkMode={setDarkMode}
                    setIsLoggedIn={setIsLoggedIn}
                    setShowLoading={setShowLoading}
                    setSelectedTheme={setSelectedTheme}
                />

                {/* Loading on the entire screen */}
                <Backdrop
                    sx={(theme) => ({
                        transition: `${theme.transitions.create()} !important`,
                        backgroundColor: theme.palette.backdrop,
                        zIndex: 999,
                        display: "flex",
                        flexDirection: "column",
                    })}
                    open={showLoading}
                >
                    <CircularProgress disableShrink color="primary" />
                </Backdrop>

                {/* button that takes you to heaven */}
                <ScrollToTop isMobile={isMobile} />

                <Stack
                    component={!isMobile ? Container : null}
                    padding={isMobile && "0px 1rem 0px 1rem"}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        transition: (theme) =>
                            `${theme.transitions.create()} !important`,
                    }}
                >
                    <Routes>
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

                        <Route
                            exact
                            path="/about"
                            element={
                                <AboutPage
                                    isMobile={isMobile}
                                    showLoading={showLoading}
                                />
                            }
                        />

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
            </ConfirmProvider>
        </ThemeProvider>
    );
}
