"use client";

import { useForm } from "react-hook-form";
import { LoginRounded } from "@mui/icons-material";
import { Button, Link, Stack, Typography, useTheme } from "@mui/material";
//
import {
    FormProvider,
    loginFormSchema,
    RHFInput,
    signInAPI,
} from "@/resources";
import { DESIGN_CONFIG } from "@/config";
import { enqueueSnackbar } from "notistack";

export const LoginForm = () => {
    const muiTheme = useTheme();

    const methods = useForm(
        loginFormSchema({
            email: "",
            password: "",
        })
    );

    const onSubmit = methods["handleSubmit"](async (data) => {
        const response = await signInAPI(data);

        if (response?.status) {
            enqueueSnackbar("logged in");
        } else {
            enqueueSnackbar(response?.message || "unexpected error", {
                variant: "error",
            });
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack
                minHeight={`calc(80dvh - ${muiTheme.spacing(
                    DESIGN_CONFIG.HEADER
                )})`}
                mt={4}
                border={`2px solid ${muiTheme.palette.divider}`}
                width={1}
                px={4}
                py={6}
                direction="row"
                bgcolor="background.paper"
                alignItems="stretch"
            >
                <Stack
                    width={1}
                    gap={8}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Stack
                        gap={1}
                        width={1}
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <Typography variant="h3" color="primary">
                            admin login
                        </Typography>

                        <Typography variant="body1">
                            hope you remember your credentials
                        </Typography>
                    </Stack>

                    <Stack
                        gap={2}
                        width={1}
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <RHFInput name="email" label="email / username" />

                        <RHFInput
                            type="password"
                            name="password"
                            label="password"
                        />
                    </Stack>

                    <Button
                        type="submit"
                        color="primary"
                        size="large"
                        startIcon={<LoginRounded />}
                    >
                        login
                    </Button>

                    <Stack
                        gap={1}
                        width={1}
                        direction="row"
                        alignItems="center"
                        color="text.disabled"
                        justifyContent="center"
                    >
                        <Link href="#" color="secondary" underline="none">
                            forgot password?
                        </Link>{" "}
                        /<Link underline="hover">register yourself</Link>
                    </Stack>
                </Stack>
            </Stack>
        </FormProvider>
    );
};
