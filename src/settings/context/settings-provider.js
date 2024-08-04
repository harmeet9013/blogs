"use client";

import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import { settingsContext } from "./settings-context";

export default function SettingsProvider({ children }) {
    const isMobile = useMediaQuery("(max-width: 900px");
    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)");
    const [darkMode, setDarkMode] = useState(true);
    const [selectedPalette, setSelectedPalette] = useState(1);

    useEffect(() => {
        setDarkMode(systemTheme);
    }, [systemTheme]);

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
