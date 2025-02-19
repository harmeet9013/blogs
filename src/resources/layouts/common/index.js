"use client";

import { Box, Container, Fade, useTheme } from "@mui/material";
//
import { DESIGN_CONFIG } from "@/config";
import { CommonHeader } from "@/resources";

export const CommonLayout = ({ isUserPage, children }) => {
    const muiTheme = useTheme();

    return (
        <>
            <CommonHeader />

            <Fade in={true}>
                <Box
                    component="main"
                    sx={{
                        paddingTop: muiTheme.spacing(
                            isUserPage ? DESIGN_CONFIG.HEADER + 2 : 0
                        ),
                        pb: 4,
                    }}
                >
                    <Container maxWidth="xl">{children}</Container>
                </Box>
            </Fade>
        </>
    );
};
