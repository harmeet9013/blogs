"use client";

import { useGlobalContext } from "@/context";
import { useBoolean } from "@/hooks";
import { Backdrop, Box, LinearProgress, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useEffect } from "react";

export default function LoadingBar() {
    const isLoading = useBoolean();

    useEffect(() => {
        isLoading.onTrue();

        return () => isLoading.onFalse();
    }, []);

    return (
        <Backdrop
            open={isLoading.value}
            sx={{
                zIndex: 5000,
                backgroundColor: alpha("#000000", 0.8),
            }}
        >
            <Box width="10rem">
                <Typography align="left" color="white">
                    Please wait...
                </Typography>
                <LinearProgress />
            </Box>
        </Backdrop>
    );
}
