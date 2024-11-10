"use client";

import { useSettingsContext } from "@/settings/context";
import { useTheme } from "@emotion/react";
import {
    AlternateEmailRounded,
    Login,
    Password,
    VisibilityOffRounded,
    VisibilityRounded,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
    Alert,
    alpha,
    Box,
    Collapse,
    Divider,
    Grow,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { endpoints } from "@/lib/axios";
import userService from "@/api/user-service";
import { RHFTextField } from "@/components/hook-form";
import { useAuthContext } from "@/context";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export const LoginView = () => {
    const theme = useTheme();
    const router = useRouter();
    const { isMobile } = useSettingsContext();
    const { login } = useAuthContext();

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        email: null,
        password: null,
        error: null,
    });

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required*")
            .email("Email must be a valid email address*"),
        password: Yup.string().required("Password is required*"),
    });

    const methods = useForm({
        resolver: yupResolver(loginSchema),
    });

    const {
        reset,
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    // TextField customizations
    const TextFieldSX = {
        borderRadius: 50,
        transition: `${theme.transitions.create()} !important`,
        "&.Mui-focused": {
            backgroundColor: theme.palette.background.paper,
        },
        "&.MuiOutlinedInput-root": {
            "& fieldset": {
                transition: theme.transitions.create(),
                border: 2,
                borderColor: theme.palette.divider,
            },
            "&:hover fieldset": {
                borderColor: alpha(theme.palette.tertiary.main, 0.4),
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
            },
        },
    };

    const onSubmit = handleSubmit(async (data) => {
        setErrors({
            email: null,
            password: null,
            error: null,
        });

        let url = endpoints.users.login_path;

        try {
            const response = await userService.loginUser(url, data);
            if (response.data.error) {
                setErrors({ ...errors, error: response.data.error });
            } else {
                console.log("LOGIN =>", response);
                login?.(response.data.data);
                enqueueSnackbar("You are logged in!");
                router.push("/home");
            }
        } catch (error) {
            console.log("PROMISE ERROR =>", error);
        }
    });

    return (
        <Grow in={true}>
            <Stack
                spacing={3}
                justifyContent="flex-start"
                alignItems="flex-start"
                borderRadius="15px"
                padding={isMobile ? 4 : 5}
                m="auto"
                py={20}
                width={isMobile ? "100%" : "30rem"}
                sx={(theme) => ({
                    transition: theme.transitions.create(),
                })}
            >
                <Typography
                    variant="h2"
                    letterSpacing={2}
                    sx={{
                        cursor: "default",
                    }}
                >
                    Sign in
                </Typography>

                <Divider flexItem />

                <Collapse
                    unmountOnExit
                    in={!!errors?.error}
                    sx={{
                        width: 1,
                    }}
                >
                    <Alert severity="error" variant="filled">
                        {errors?.error}
                    </Alert>
                </Collapse>

                {/* Input fields */}
                <FormProvider {...methods}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        width="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap={(theme) => theme.spacing(3)}
                        component="form"
                        onSubmit={onSubmit}
                    >
                        <RHFTextField
                            name="email"
                            placeholder="Email Address"
                            helperText={errors?.email}
                            error={errors?.email}
                            variant="outlined"
                            type="text"
                            disabled={isSubmitting}
                            InputProps={{
                                sx: TextFieldSX,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailRounded color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <RHFTextField
                            placeholder="Password"
                            name="password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            helperText={errors?.password}
                            error={errors?.password}
                            disabled={isSubmitting}
                            InputProps={{
                                sx: TextFieldSX,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Password color="primary" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                        />
                                        <IconButton
                                            disableRipple
                                            onClick={() => {
                                                setShowPassword(!showPassword);
                                            }}
                                            edge="end"
                                        >
                                            {/* the user can click on thus button to display/hide their password. */}
                                            {showPassword ? (
                                                <VisibilityRounded color="tertiary.main" />
                                            ) : (
                                                <VisibilityOffRounded />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="outlined"
                            startIcon={<Login />}
                            loading={isSubmitting}
                            sx={{
                                typography: "h6",
                            }}
                        >
                            Login
                        </LoadingButton>
                    </Box>
                </FormProvider>
            </Stack>
        </Grow>
    );
};
