"use client";

import { createContext, useContext } from "react";

export const globalContext = createContext({});

export default function useGlobalContext() {
    const context = useContext(globalContext);

    if (!context)
        throw new Error(
            "useGlobalContext must be inside the GlobalContextProvider"
        );

    return context;
}
