"use client";

import {
    createTheme,
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { grey, orange, red } from "@mui/material/colors";
//
import { SnackbarProvider } from "./snackbar";
import { useSettingsContext } from "../settings";

export const ThemeProvider = ({ children }) => {
    const { mode } = useSettingsContext();

    const theme = createTheme({
        cssVariables: true,
        palette: {
            mode: mode,
            primary: red,
            secondary: orange,
            ...(mode === "dark"
                ? {
                      background: {
                          default: "#000",
                      },
                  }
                : {
                      background: {
                          default: grey[100],
                      },
                  }),
        },
        shape: {
            borderRadius: 0,
        },
        typography: {
            fontFamily: "inherit",
            button: {
                textTransform: "none",
            },
        },
    });

    theme.components = {
        MuiCard: {
            styleOverrides: {
                root: {
                    width: "100%",
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    transition: theme.transitions.create([
                        "padding",
                        "background",
                        "color",
                    ]),
                    ":hover": {
                        boxShadow: "none",
                    },
                },
            },
        },

        // ICONBUTTON
        MuiIconButton: {
            defaultProps: {
                variant: "standard",
                color: "default",
            },
            styleOverrides: {
                root: ({ ownerState }) => {
                    const { variant, color } = ownerState;

                    if (variant === "contained") {
                        if (color === "default") {
                            return {
                                backgroundColor: theme.palette.action.disabled,
                                color: theme.palette.text.primary,
                                ":hover": {
                                    backgroundColor:
                                        theme.palette.action.disabledBackground,
                                },
                            };
                        } else {
                            return {
                                backgroundColor: theme.palette[color]?.main,
                                color: theme.palette[color]?.contrastText,
                                ":hover": {
                                    backgroundColor: theme.palette[color]?.dark,
                                },
                            };
                        }
                    } else if (variant === "outlined") {
                        if (color === "default") {
                            return {
                                border: `2px solid ${theme.palette.text.disabled}`,
                                color: theme.palette.text.secondary,
                                ":hover": {
                                    color: theme.palette.text.primary,
                                    borderColor: theme.palette.text.primary,
                                },
                            };
                        } else {
                            return {
                                border: `2px solid ${theme.palette[color].main}`,
                                color: theme.palette[color].main,
                                ":hover": {
                                    borderColor: theme.palette[color].dark,
                                    color: theme.palette[color].dark,
                                },
                            };
                        }
                    }

                    return {};
                },
            },
        },
    };

    return (
        <MuiThemeProvider theme={theme}>
            <SnackbarProvider>{children}</SnackbarProvider>
            <CssBaseline enableColorScheme />
        </MuiThemeProvider>
    );
};
