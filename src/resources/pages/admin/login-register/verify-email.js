"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowBackRounded } from "@mui/icons-material";
import { Button, Stack, Typography, useTheme } from "@mui/material";
//
import { DESIGN_CONFIG, PATHS } from "@/config";
import { LoadComponent, useBoolean, verifyEmailApi } from "@/resources";

export const VerifyEmail = () => {
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const isVerifying = useBoolean(true);

    const [error, setError] = useState(null);

    const muiTheme = useTheme();

    const verifyApi = async () => {
        const response = await verifyEmailApi({ token: token });

        if (response?.error) {
            setError(response?.error || "unexpected error verifying token");
        }

        isVerifying.onFalse();
    };

    useEffect(() => {
        if (!token) {
            isVerifying.onFalse();
        } else {
            verifyApi();
        }
    });

    return (
        <Stack
            mt={4}
            px={4}
            py={6}
            width={1}
            alignItems="stretch"
            bgcolor="background.paper"
            border={`2px solid ${muiTheme.palette.divider}`}
            minHeight={`calc(80dvh - ${muiTheme.spacing(
                DESIGN_CONFIG.HEADER
            )})`}
        >
            <LoadComponent
                loading={isVerifying?.value}
                error={error}
                component={
                    <Stack
                        pt={10}
                        gap={8}
                        width={1}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {!token ? (
                            <Typography align="center" variant="h6">
                                invalid token
                            </Typography>
                        ) : (
                            <Typography align="center" variant="h5">
                                email verified, please login
                            </Typography>
                        )}

                        <Button
                            href={PATHS["auth"]["login"]}
                            startIcon={<ArrowBackRounded />}
                        >
                            back to login
                        </Button>
                    </Stack>
                }
            />
        </Stack>
    );
};
