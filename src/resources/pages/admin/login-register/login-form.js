"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { LoginRounded } from "@mui/icons-material";
import { Button, Link, Stack, Typography, useTheme } from "@mui/material";
//
import {
    FormProvider,
    loginFormSchema,
    RHFInput,
    signInAPI,
    useSettingsContext,
} from "@/resources";
import { DESIGN_CONFIG, PATHS } from "@/config";

export const LoginForm = () => {
    const router = useRouter();
    const muiTheme = useTheme();
    const { updateSession } = useSettingsContext();

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
            await updateSession();
            router.push(PATHS["admin"]["root"]);
        } else {
            enqueueSnackbar(response?.message || "unexpected error", {
                variant: "error",
            });
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack
                mt={4}
                px={4}
                py={6}
                width={1}
                direction="row"
                alignItems="stretch"
                bgcolor="background.paper"
                border={`2px solid ${muiTheme.palette.divider}`}
                minHeight={`calc(80dvh - ${muiTheme.spacing(
                    DESIGN_CONFIG.HEADER
                )})`}
            >
                <Stack
                    gap={8}
                    width={1}
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
                        /
                        <Link
                            href={PATHS["users"]["register"]}
                            underline="hover"
                        >
                            register yourself
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </FormProvider>
    );
};
