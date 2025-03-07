"use client";

import { Stack, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
//
import { Editor } from "../editor";

export const RHFEditor = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                return (
                    <Stack
                        gap={1}
                        width={1}
                        alignItems="flex-start"
                        justifyContent="flex-start"
                    >
                        {!!label && (
                            <Typography variant="body1">{label}</Typography>
                        )}

                        <Editor {...field} />

                        {!!error && (
                            <Typography variant="body1" color="error">
                                {error?.message}
                            </Typography>
                        )}
                    </Stack>
                );
            }}
        />
    );
};
