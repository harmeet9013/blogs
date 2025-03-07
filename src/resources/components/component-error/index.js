"use client";

import { ErrorRounded } from "@mui/icons-material";
import { Stack, Typography, useTheme } from "@mui/material";

export const ComponentError = ({ message = "Error loading component" }) => {
    const muiTheme = useTheme();

    return (
        <Stack
            py={2}
            px={2}
            gap={2}
            width={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            <ErrorRounded
                color="error"
                sx={{
                    fontSize: muiTheme.spacing(10),
                }}
            />
            <Typography color="error" variant="h4">
                {message}
            </Typography>
        </Stack>
    );
};
