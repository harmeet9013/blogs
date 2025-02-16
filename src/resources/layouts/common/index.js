"use client";

import { Box, Container, Fade, useTheme } from "@mui/material";
//
import { DESIGN_CONFIG } from "@/config";
import { CommonHeader } from "@/resources";

export const CommonLayout = ({ children }) => {
    const muiTheme = useTheme();

    return (
        <>
            <CommonHeader />

            <Fade in={true}>
                <Box
                    component="main"
                    sx={{
                        paddingTop: muiTheme.spacing(DESIGN_CONFIG.HEADER + 2),
                        pb: 4,
                    }}
                >
                    <Container maxWidth="xl">{children}</Container>
                </Box>
            </Fade>
        </>
    );
};
