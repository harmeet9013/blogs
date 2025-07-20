"use client";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
//
import { authSliceActions, getSession } from "@/resources";
//
import { settingsContext } from "./settings-context";

export const SettingsProvider = ({ session, children }) => {
    const { setSession } = authSliceActions;

    const dispatch = useDispatch();
    const isMobile = useMediaQuery("(max-width: 900px");
    const isTablet = useMediaQuery("(max-width: 1200px");
    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState("dark");

    const initReduxSession = (newSession) => {
        dispatch(setSession(newSession));
    };

    const updateSession = async () => {
        const newSession = await getSession();

        initReduxSession(newSession);

        return newSession;
    };

    useEffect(() => {
        setMode(systemTheme ? "dark" : "light");
    }, [systemTheme]);

    useEffect(() => {
        initReduxSession(session);
    }, []);

    const providerValues = {
        mode,
        setMode,
        isTablet,
        isMobile,
        updateSession,
    };

    return (
        <settingsContext.Provider value={providerValues}>
            {children}
        </settingsContext.Provider>
    );
};
