"use client";

import {
    Slide,
    Stack,
    alpha,
    useTheme,
    Container,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";
//
import { DESIGN_CONFIG, PATHS } from "@/config";

export const CommonHeader = () => {
    const muiTheme = useTheme();

    const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

    return (
        <Slide in={true}>
            <Stack
                component="header"
                sx={{
                    top: 0,
                    left: 0,
                    width: 1,
                    position: "fixed",
                    backdropFilter: "blur(4px)",
                    zIndex: muiTheme.zIndex.drawer,
                    height: muiTheme.spacing(DESIGN_CONFIG.HEADER),
                    background: alpha(muiTheme.palette.background.default, 0.8),
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        height: 1,
                    }}
                >
                    <Stack
                        gap={1}
                        width={1}
                        height={1}
                        alignItems="center"
                        justifyContent="space-between"
                        direction={{ xs: "row", md: "row" }}
                    >
                        <Typography
                            variant={isMobile ? "h3" : "h2"}
                            component="a"
                            color="text.primary"
                            href={PATHS["blogs"]["root"]}
                            sx={{
                                cursor: "pointer",
                                textDecorationStyle: "wavy",
                                textUnderlineOffset: muiTheme.spacing(1),
                                textDecorationThickness: muiTheme.spacing(0.5),
                                textDecorationColor: "transparent",
                                transition: muiTheme.transitions.create([
                                    "text-shadow",
                                    "text-decoration-color",
                                ]),
                                ":hover": {
                                    textShadow: `0 0 ${muiTheme.spacing(10)} ${
                                        muiTheme.palette.text.disabled
                                    }`,
                                    textDecorationColor:
                                        muiTheme.palette.text.primary,
                                },
                            }}
                        >
                            blogs
                        </Typography>

                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            gap={{ xs: 0, md: 1 }}
                            alignItems="center"
                        >
                            <Typography variant="button">
                                Created with love{" "}
                                <FavoriteRounded
                                    fontSize="20"
                                    color="secondary"
                                    sx={{
                                        my: -0.2,
                                        mx: 0.5,
                                    }}
                                />
                            </Typography>

                            <Typography
                                variant={isMobile ? "h5" : "h3"}
                                sx={{
                                    fontFamily: "Creattion",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    letterSpacing: 2,
                                    pt: 1,
                                }}
                            >
                                Harmeet Singh
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
        </Slide>
    );
};
