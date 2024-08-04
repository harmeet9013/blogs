"use client";

import { useTheme } from "@emotion/react";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export default function LoadingScreen({ text }) {
    const theme = useTheme();

    return (
        <Stack
            width={1}
            spacing={1}
            justifyContent="center"
            alignItems="center"
        >
            {!!text && (
                <Typography
                    variant="h5"
                    letterSpacing={2}
                    color="text.secondary"
                >
                    {text}
                </Typography>
            )}
            <Box width={theme.spacing(50)}>
                <LinearProgress />
            </Box>
        </Stack>
    );
}
