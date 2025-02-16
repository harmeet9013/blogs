"use client";

import {
    Slide,
    Stack,
    alpha,
    useTheme,
    Container,
    Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FavoriteRounded } from "@mui/icons-material";
//
import { DESIGN_CONFIG, PATHS } from "@/config";

export const CommonHeader = () => {
    const router = useRouter();
    const muiTheme = useTheme();

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
                    // borderBottom: `2px solid ${muiTheme.palette.divider}`,
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
                            variant={"h2"}
                            sx={{
                                cursor: "pointer",
                            }}
                            component="h2"
                            onClick={() => router.push(PATHS["blogs"]["root"])}
                        >
                            blogs
                        </Typography>

                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            gap={1}
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
                                variant="h3"
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
