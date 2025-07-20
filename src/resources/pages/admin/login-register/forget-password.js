"use client";

import {
    Stack,
    Alert,
    Button,
    Divider,
    useTheme,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";
import {
    ArrowBackRounded,
    VisibilityRounded,
    VisibilityOffRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useRouter, useSearchParams } from "next/navigation";
//
import {
    RHFInput,
    useBoolean,
    FormProvider,
    forgetPasswordRequestApi,
} from "@/resources";
import { DESIGN_CONFIG, PATHS } from "@/config";
import { forgetPasswordFormSchema, resetPasswordFormSchema } from "@/resources";

export const ForgetPassword = () => {
    const muiTheme = useTheme();
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const [alert, setAlert] = useState(null);

    return (
        <Stack
            mt={4}
            px={{ xs: 2, md: 4 }}
            py={{ xs: 3, md: 6 }}
            width={1}
            alignItems="stretch"
            bgcolor="background.paper"
            border={`2px solid ${muiTheme.palette.divider}`}
            minHeight={`calc(80dvh - ${muiTheme.spacing(
                DESIGN_CONFIG.HEADER
            )})`}
        >
            {!!alert?.message && (
                <Alert severity={alert?.variant} variant="filled">
                    {alert?.message}
                </Alert>
            )}

            <Stack
                pt={10}
                gap={8}
                width={1}
                alignItems="center"
                justifyContent="center"
                divider={<Divider flexItem />}
            >
                {!token ? (
                    <RenderRequestForm setAlert={setAlert} />
                ) : (
                    <ResetPasswordForm token={token} setAlert={setAlert} />
                )}

                <Button
                    color="secondary"
                    variant="outlined"
                    href={PATHS["auth"]["login"]}
                    startIcon={<ArrowBackRounded />}
                >
                    back to login
                </Button>
            </Stack>
        </Stack>
    );
};

export const RenderRequestForm = ({ setAlert }) => {
    const methods = useForm(forgetPasswordFormSchema({ email: "" }));

    const { handleSubmit } = methods;

    const onSubmit = handleSubmit(async (data) => {
        setAlert(null);

        let paylaod = { email: data?.email };

        const response = await forgetPasswordRequestApi(null, paylaod);

        if (!response?.error) {
            setAlert({
                variant: "success",
                message: response?.data?.message || "please check your email",
            });
        } else {
            setAlert({
                variant: "error",
                message: response?.error || "unexpected error",
            });
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack gap={4} width={1}>
                <Stack gap={1}>
                    <Typography variant="h5">
                        please enter your credentials
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        if the user exists you will recieve an email
                    </Typography>
                </Stack>

                <RHFInput
                    name="email"
                    label="email / username"
                    disabled={methods["formState"]["isSubmitting"]}
                />

                <Button
                    variant="contained"
                    type="submit"
                    loading={methods["formState"]["isSubmitting"]}
                >
                    submit
                </Button>
            </Stack>
        </FormProvider>
    );
};

export const ResetPasswordForm = ({ token, setAlert }) => {
    const methods = useForm(
        resetPasswordFormSchema({
            token: token,
            password: "",
            confirm_password: "",
        })
    );
    const router = useRouter();
    const showPassword = useBoolean(false);

    const { handleSubmit } = methods;

    const onSubmit = handleSubmit(async (data) => {
        setAlert(null);

        const payload = {
            token: data?.token,
            password: data?.password,
            confirm_password: data?.confirm_password,
        };
        const response = await forgetPasswordRequestApi(payload);

        if (!response?.error) {
            router.push(PATHS["auth"]["login"]);
            enqueueSnackbar(
                response?.data?.message ||
                    "password has been reset, please login now"
            );
        } else {
            setAlert({
                variant: "error",
                message: response?.error || "unexpected error",
            });
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack gap={4} width={1}>
                <Stack gap={1}>
                    <Typography variant="h5">reset your password</Typography>
                </Stack>

                <RHFInput
                    name="password"
                    label="password"
                    type="password"
                    disabled={methods["formState"]["isSubmitting"]}
                />

                <RHFInput
                    name="confirm_password"
                    label="confirm password"
                    type={showPassword.value ? "text" : "password"}
                    disabled={methods["formState"]["isSubmitting"]}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={showPassword.onToggle}>
                                        {showPassword?.value ? (
                                            <VisibilityOffRounded />
                                        ) : (
                                            <VisibilityRounded />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    loading={methods["formState"]["isSubmitting"]}
                >
                    reset password
                </Button>
            </Stack>
        </FormProvider>
    );
};
