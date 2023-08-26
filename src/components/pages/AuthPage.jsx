import {
    TextField,
    InputAdornment,
    IconButton,
    Divider,
    Stack,
    Typography,
    Box,
    Grow,
    Collapse,
    styled,
    Button,
} from "@mui/material";
import {
    AlternateEmail,
    BackHand,
    Home,
    Login,
    Password,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

import { API_URL } from "../../App";
import { navigate, serverOffline } from "../shared/CustomComponents";

export default function AuthPage(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // TextField customizations
    const TextFieldSX = (theme) => ({
        borderRadius: 50,
        transition: `${theme.transitions.create()} !important`,
        "&.Mui-focused": {
            backgroundColor: theme.palette.background.low,
        },
        "&.MuiOutlinedInput-root": {
            "& fieldset": {
                transition: theme.transitions.create(),
                border: 2,
                borderColor: theme.palette.dividervar,
            },
            "&:hover fieldset": {
                borderColor: theme.palette.tertiary.container.on,
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.container.on,
            },
        },
    });

    // global button used for various purposes
    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.primary.main,
        borderRadius: 40,
        backgroundColor: theme.palette.background.low,
        padding: "0.6rem",
        fontSize: theme.typography.h5.fontSize,
        width: "100%",
        border: `2px solid ${theme.palette.dividervar}`,
        transition: `${theme.transitions.create()} !important`,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
            border: `2px solid ${theme.palette.primary.main}`,
        },
    }));

    // login click event
    const handleClick = async (e) => {
        e.preventDefault();
        props.setShowLoading(true);

        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            const result = await axios.post(`${API_URL}/api/users/login`, {
                loginData,
            });

            // set cookies
            Cookies.set("token", result.data.token, {
                secure: false,
                httpOnly: false,
            });
            Cookies.set("userID", result.data.userID, {
                secure: false,
                httpOnly: false,
            });

            // updateState
            props.setIsLoggedIn({
                name: result.data.name,
                avatar: result.data.avatar,
            });

            // show snackbar
            enqueueSnackbar("You are now logged in!", { variant: "success" });

            // go to home page
            navigate("/");
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                serverOffline();
            } else {
                confirmDialog({
                    title: "Wrong credentials.",
                    description:
                        "Email or password is wrong. Please try again.",
                    hideCancelButton: true,
                })
                    .then(() => {
                        //
                    })
                    .catch(() => {
                        //
                    });
            }
        } finally {
            props.setShowLoading(false);
        }
    };

    return !props.isLoggedIn.logged ? (
        <Grow in={true}>
            <Stack
                spacing={3}
                justifyContent="flex-start"
                alignItems="flex-start"
                borderRadius="15px"
                padding={props.isMobile ? 4 : 5}
                marginTop="7rem"
                marginBottom="2rem"
                width={props.isMobile ? "100%" : "30rem"}
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

                {/* Input fields */}
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    gap={(theme) => theme.spacing(3)}
                    component="form"
                    onSubmit={handleClick}
                >
                    <TextField
                        fullWidth
                        required
                        helperText="Enter a valid email address"
                        placeholder="Email Address"
                        id="email"
                        variant="outlined"
                        type="text"
                        InputProps={{
                            sx: TextFieldSX,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmail color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        fullWidth
                        required
                        helperText="Please enter your password"
                        placeholder="Password"
                        id="password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            sx: TextFieldSX,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Password color="primary" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Divider orientation="vertical" flexItem />
                                    <Collapse in={!isAnimating}>
                                        <IconButton
                                            disableRipple
                                            onClick={() => {
                                                setIsAnimating(true);
                                                setTimeout(() => {
                                                    setShowPassword(
                                                        !showPassword
                                                    );
                                                    setIsAnimating(false);
                                                }, 100);
                                            }}
                                            edge="end"
                                        >
                                            {/* the user can click on thus button to display/hide their password. */}
                                            {showPassword ? (
                                                <Visibility
                                                    sx={(theme) => ({
                                                        color: theme.palette
                                                            .tertiary.main,
                                                    })}
                                                />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </Collapse>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <CustomButton type="submit" startIcon={<Login />}>
                        Login
                    </CustomButton>
                </Box>
            </Stack>
        </Grow>
    ) : (
        <Grow in={props.isLoggedIn.logged}>
            <Stack spacing={4} paddingTop="7rem" paddingBottom={4}>
                <Typography variant={props.isMobile ? "h5" : "h4"}>
                    <BackHand /> Where you tryna go? <br />
                    You are already logged in.
                </Typography>
                <CustomButton
                    onClick={() => {
                        props.setShowLoading(true);
                        setTimeout(() => {
                            navigate("/");
                            props.setShowLoading(false);
                        }, 200);
                    }}
                    startIcon={<Home />}
                >
                    Home
                </CustomButton>
            </Stack>
        </Grow>
    );
}
