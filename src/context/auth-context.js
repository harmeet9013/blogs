"use client";

import { createContext, useContext } from "react";

export const authContext = createContext();

export default function useAuthContext() {
    const context = useContext(authContext);

    if (!context)
        throw new Error("useAuthContext must be inside the AuthProvider");

    return context;
}
