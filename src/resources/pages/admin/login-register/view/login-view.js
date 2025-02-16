"use client";

import { Stack, Container, useTheme } from "@mui/material";
//
import { DESIGN_CONFIG } from "@/config";

export const LoginView = () => {
    const muiTheme = useTheme();

    return (
        <Container maxWidth="sm">
            <Stack
                minHeight={`calc(80dvh - ${muiTheme.spacing(
                    DESIGN_CONFIG.HEADER
                )})`}
                border={`2px solid ${muiTheme.palette.divider}`}
                width={1}
            ></Stack>
        </Container>
    );
};
