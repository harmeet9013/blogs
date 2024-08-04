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
import { ComponentsOverrides } from "./components-overrides";
import palette from "./palette";

export default function MuiThemeProvider({ children }) {
    const { darkMode, selectedPalette } = useSettingsContext();

    const materia3Theme = useMemo(() => ({
        palette: {
            ...palette(darkMode ? "dark" : "light", selectedPalette),
            // mode: darkMode ? "dark" : "light",
            // ...(darkMode
            //     ? {
            //           primary: {
            //               main: "#c6bfff",
            //               on: "#2c2276",
            //               container: {
            //                   main: "#433b8e",
            //                   on: "#e4dfff",
            //               },
            //               fixed: {
            //                   main: "#e4dfff",
            //                   dim: "#c6bfff",
            //                   on: "#160362",
            //                   onvar: "#433b8e",
            //               },
            //           },
            //           secondary: {
            //               main: "#c8c3dc",
            //               on: "#2c2276",
            //               container: {
            //                   main: "#474459",
            //                   on: "#e4dff9",
            //               },
            //               fixed: {
            //                   main: "#e4dff9",
            //                   dim: "#c8c3dc",
            //                   on: "#1b192c",
            //                   onvar: "#474459",
            //               },
            //           },
            //           tertiary: {
            //               main: "#ebb8cf",
            //               on: "#482537",
            //               container: {
            //                   main: "#613b4e",
            //                   on: "#ffd8e8",
            //               },
            //               fixed: {
            //                   main: "#ffd8e8",
            //                   dim: "#ebb8cf",
            //                   on: "#301122",
            //                   onvar: "#633b48",
            //               },
            //           },
            //           background: {
            //               default: "#0e0e11",
            //               low: "#1c1b1f",
            //               med: "#201f23",
            //               high: "#2a292d",
            //               highest: "#353438",
            //           },
            //           divider: "#47464f",
            //           dividervar: "#928f99",
            //       }
            //     : {
            //           primary: {
            //               main: "#5b53a8",
            //               on: "#ffffff",
            //               container: {
            //                   main: "#e4dfff",
            //                   on: "#160362",
            //               },
            //               fixed: {
            //                   main: "#e4dfff",
            //                   dim: "#c6bfff",
            //                   on: "#160362",
            //                   onvar: "#433b8e",
            //               },
            //           },
            //           secondary: {
            //               main: "#5f5c71",
            //               on: "#ffffff",
            //               container: {
            //                   main: "#e4dff9",
            //                   on: "#1b192c",
            //               },
            //               fixed: {
            //                   main: "#e4dff9",
            //                   dim: "#c8c3dc",
            //                   on: "#1b192c",
            //                   onvar: "#474459",
            //               },
            //           },
            //           tertiary: {
            //               main: "#7b5266",
            //               on: "#ffffff",
            //               container: {
            //                   main: "#ffd8e8",
            //                   on: "#301122",
            //               },
            //               fixed: {
            //                   main: "#ffd8e8",
            //                   dim: "#ebb8cf",
            //                   on: "#301122",
            //                   onvar: "#633b48",
            //               },
            //           },
            //           background: {
            //               default: "#ffffff",
            //               low: "#f7f2f7",
            //               med: "#f1ecf1",
            //               high: "#ebe7ec",
            //               highest: "#e5e1e6",
            //           },
            //           divider: "#c9c5d0",
            //           dividervar: "#787680",
            //       }),
        },
        typography: {
            fontFamily: "inherit",
        },
    }));

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
