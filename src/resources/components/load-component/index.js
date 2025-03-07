"use client";

import { Progress } from "../progress";
import { ComponentError } from "../component-error";

export const LoadComponent = ({
    loading = false,
    error = false,
    component,
}) => {
    return loading ? (
        <Progress showMessage />
    ) : error ? (
        <ComponentError
            {...(typeof error !== "boolean" ? { message: error } : {})}
        />
    ) : component ? (
        component
    ) : (
        <ComponentError />
    );
};
