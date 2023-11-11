"use client";

import { createContext, useContext } from "react";

export const settingsContext = createContext({});

export default function useSettingsContext() {
    const context = useContext(settingsContext);

    if (!context)
        throw new Error(
            "useSettingsContext must be inside the SettingsProvider"
        );

    return context;
}
