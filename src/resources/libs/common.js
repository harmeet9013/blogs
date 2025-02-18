"use client";

import { AuthError } from "next-auth";
import { useState, useCallback } from "react";

export const formatDateForRender = (date) => {
    return new Date(date)?.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
    });
};

export const useBoolean = (defaultValue) => {
    const [value, setValue] = useState(!!defaultValue);

    const onTrue = useCallback(() => {
        setValue(true);
    }, []);

    const onFalse = useCallback(() => {
        setValue(false);
    }, []);

    const onToggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return { value, onTrue, onFalse, onToggle };
};
