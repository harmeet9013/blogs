"use client";

import { useState, useMemo, useEffect } from "react";
//
import { useMediaQuery } from "@mui/material";
//
import Cookies from "js-cookie";
import PropTypes from "prop-types";
//
import { settingsContext } from "./settings-context";

export default function SettingsProvider({ children }) {
    const isMobile = useMediaQuery("(max-width: 900px");
    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)");

    const [darkMode, setDarkMode] = useState(true);
    const [selectedPalette, setSelectedPalette] = useState(
        Cookies.get("theme") || 1
    );

    useEffect(() => {
        setDarkMode(systemTheme);
    }, [systemTheme]);

    useEffect(() => {
        Cookies.set("theme", selectedPalette);
    }, [selectedPalette]);

    const providerValues = useMemo(
        () => ({
            isMobile,
            darkMode,
            setDarkMode,
            selectedPalette,
            setSelectedPalette,
        }),
        [isMobile, darkMode, setDarkMode, selectedPalette, setSelectedPalette]
    );

    return (
        <settingsContext.Provider value={providerValues}>
            {children}
        </settingsContext.Provider>
    );
}

SettingsProvider.propTypes = {
    children: PropTypes.node,
};
