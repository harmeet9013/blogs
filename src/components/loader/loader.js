"use client";

import { useGlobalContext } from "@/context";
import { Backdrop, Box, LinearProgress, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function LoadingBar() {
    const { showLoader } = useGlobalContext();

    return (
        <Backdrop
            open={showLoader}
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
