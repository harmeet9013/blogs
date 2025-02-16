"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
//
import { settingsContext } from "./settings-context";

export const SettingsProvider = ({ children }) => {
    const isMobile = useMediaQuery("(max-width: 900px");
    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState("dark");

    useEffect(() => {
        setMode(systemTheme ? "dark" : "light");
    }, [systemTheme]);

    const providerValues = {
        isMobile,
        mode,
        setMode,
    };

    return (
        <settingsContext.Provider value={providerValues}>
            {children}
        </settingsContext.Provider>
    );
};
