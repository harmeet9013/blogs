"use client";

import PropTypes from "prop-types";
import { useSettingsContext } from "@/settings/context";
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material";
import { useMemo } from "react";

export default function MuiThemeProvider({ children }) {
    const { darkMode } = useSettingsContext();

    const materia3Theme = useMemo(() => ({
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
                          default: "#000000",
                          low: "#201a1a",
                          med: "#241e1e",
                          high: "#2f2828",
                          highest: "#3a3333",
                          header: "#120d0dfa",
                      },
                      divider: "#a08c8c",
                      dividervar: "#524343",
                      backdrop: "#000000ba",
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
                          header: "#fffffffa",
                      },
                      divider: "#d7c1c1",
                      dividervar: "#857373",
                      backdrop: "#000000ba",
                  }),
        },
        typography: {
            fontFamily: "inherit",
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {
                        fontFamily: "inherit",
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
            MuiLinearProgress: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                    },
                },
            },
        },
    }));

    let theme = createTheme(materia3Theme);

    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    );
}

MuiThemeProvider.propTypes = {
    children: PropTypes.node,
};
