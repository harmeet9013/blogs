"use client";

import { Stack } from "@mui/material";
import { FormProvider as HookFormProvider } from "react-hook-form";

export const FormProvider = ({ methods, onSubmit, children, ...other }) => {
    return (
        <HookFormProvider {...methods}>
            <Stack width={1} component="form" onSubmit={onSubmit} {...other}>
                {children}
            </Stack>
        </HookFormProvider>
    );
};
