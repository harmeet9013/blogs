"use client";

import { FormProvider as HookFormProvider } from "react-hook-form";

export const FormProvider = ({ methods, onSubmit, children }) => {
    return (
        <HookFormProvider {...methods}>
            <form
                onSubmit={onSubmit}
                style={{
                    width: "100%",
                }}
            >
                {children}
            </form>
        </HookFormProvider>
    );
};
