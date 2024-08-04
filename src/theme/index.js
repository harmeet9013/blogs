"use client";

import "./fonts/fonts.css";

import { useMemo } from "react";
//
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material";
//
import PropTypes from "prop-types";
//
import { ComponentsOverrides } from "./components-overrides";
//
import { useSettingsContext } from "@/settings/context";
//
import palette from "./palette";

export default function MuiThemeProvider({ children }) {
    const { darkMode, selectedPalette } = useSettingsContext();

    const materia3Theme = useMemo(
        () => ({
            palette: {
                ...palette(darkMode ? "dark" : "light", selectedPalette),
            },
            typography: {
                fontFamily: "inherit",
            },
        }),
        [darkMode, selectedPalette, palette]
    );

    let theme = createTheme(materia3Theme);

    theme.components = ComponentsOverrides(theme);

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
