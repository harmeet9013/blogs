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
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    ":hover": {
                        boxShadow: "none",
                    },
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
