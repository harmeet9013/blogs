"use client";

import {
    VisibilityRounded,
    VisibilityOffRounded,
    AppRegistrationRounded,
} from "@mui/icons-material";
import {
    Link,
    Stack,
    Button,
    useTheme,
    Typography,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
//
import {
    RHFInput,
    useBoolean,
    registerApi,
    FormProvider,
    registerFormSchema,
} from "@/resources";
import { DESIGN_CONFIG, PATHS } from "@/config";
import { ArrowBackRounded } from "@mui/icons-material";

export const RegisterForm = () => {
    const router = useRouter();
    const muiTheme = useTheme();
    const showPassword = useBoolean(false);

    const methods = useForm(
        registerFormSchema({
            name: "",
            email: "",
            password: "",
            confirm: "",
        })
    );

    const onSubmit = methods["handleSubmit"](async (data) => {
        const response = await registerApi(data);

        if (!response?.error) {
            router.push(PATHS["users"]["login"]);
            enqueueSnackbar("user created, please login");
        } else {
            enqueueSnackbar(response?.error || "unexpected error", {
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
                            register
                        </Typography>

                        <Typography variant="body1">
                            these credentials are important
                            <br />
                            remember them!
                        </Typography>
                    </Stack>

                    <Stack
                        gap={2}
                        width={1}
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <RHFInput name="name" label="name" />

                        <RHFInput name="email" label="email / username" />

                        <RHFInput
                            type="password"
                            name="password"
                            label="password"
                        />

                        <RHFInput
                            type={showPassword?.value ? "text" : "password"}
                            name="confirm"
                            label="confirm password"
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={showPassword.onToggle}
                                            >
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
                    </Stack>

                    <Button
                        type="submit"
                        color="primary"
                        size="large"
                        startIcon={<AppRegistrationRounded />}
                    >
                        register
                    </Button>

                    <Stack
                        gap={1}
                        width={1}
                        direction="row"
                        alignItems="center"
                        color="primary"
                        justifyContent="center"
                    >
                        <ArrowBackRounded />
                        <Link href={PATHS["users"]["login"]} underline="none">
                            back to login
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </FormProvider>
    );
};
