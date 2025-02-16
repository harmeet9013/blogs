"use client";

import { Controller, useFormContext } from "react-hook-form";
//
import { Editor } from "../editor";

export const RHFEditor = ({ name }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                return <Editor {...field} />;
            }}
        />
    );
};
