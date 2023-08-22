import {
    TextField,
    InputAdornment,
    IconButton,
    Divider,
    Stack,
    useMediaQuery,
    Button,
    Typography,
    Container,
    styled,
    Box,
    Slide,
} from "@mui/material";
import {
    AlternateEmail,
    BackHand,
    Home,
    Password,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import axios from "axios";
import Cookies from "js-cookie";
import { Fragment, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../App";
import { FooterButtons } from "../shared/Footer";
import { useConfirm } from "material-ui-confirm";

export default function AuthPage({
    isLoggedIn,
    setIsLoggedIn,
    setShowLoading,
}) {
    const navigate = useNavigate();
    const confirmDialog = useConfirm();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [showPassword, setShowPassword] = useState(false);

    const LoginButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 10px",
        fontSize: "1.3rem",
        width: isMobile ? "100%" : "8rem",
        border: `2px solid ${theme.palette.action.disabled}`,
        transition: theme.transitions.create(),
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
            borderColor: theme.palette.accent.primary,
        },
    }));

    const TextFieldSX = {
        borderRadius: "15px",
        transition: (theme) => theme.transitions.create(),
        "&.Mui-focused": {
            backgroundColor: (theme) => theme.palette.action.hover,
        },
        "&.MuiOutlinedInput-root": {
            "& fieldset": {
                transition: (theme) => theme.transitions.create(),
                border: 2,
                borderColor: (theme) => theme.palette.action.disabled,
            },
            "&:hover fieldset": {
                borderColor: (theme) => theme.palette.text.primary,
            },
            "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.textField.main,
            },
        },
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setShowLoading(true);

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
            setIsLoggedIn({
                name: result.data.name,
                avatar: result.data.avatar,
            });

            // show snackbar
            enqueueSnackbar("You are now logged in!", { variant: "success" });

            // go to home page
            navigate("/");
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                enqueueSnackbar("Server offline.", { variant: "info" });
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
            setShowLoading(false);
        }
    };

    return !isLoggedIn.logged ? (
        <Fragment>
            <Slide direction="up" in={true}>
                <Stack
                    spacing={3}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    borderRadius="15px"
                    padding={isMobile ? 4 : 5}
                    marginTop={isMobile ? "10vh" : "15vh"}
                    marginBottom="2rem"
                    width={isMobile ? "100%" : "30rem"}
                    sx={{
                        transition: (theme) => theme.transitions.create(),
                    }}
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

                    <Divider
                        flexItem
                        sx={{
                            borderBottomWidth: 2,
                        }}
                    />

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
                            color="textField"
                            type="text"
                            InputProps={{
                                sx: TextFieldSX,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmail color="icon" />
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
                                        <Password color="icon" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => {
                                                setShowPassword(!showPassword);
                                            }}
                                            edge="end"
                                        >
                                            {/* the user can click on thus button to display/hide their password. */}
                                            {showPassword ? (
                                                <Visibility color="warning" />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <LoginButton type="submit">Login</LoginButton>
                    </Box>
                </Stack>
            </Slide>
            <FooterButtons />
        </Fragment>
    ) : (
        <Stack
            component={Container}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            paddingTop="15vh"
            width={isMobile ? "100%" : "50rem"}
        >
            <Typography variant={isMobile ? "h5" : "h4"}>
                <BackHand /> Where you tryna go? <br />
                You are already logged in.
            </Typography>
            <LoginButton
                onClick={() => {
                    setShowLoading(true);
                    navigate("/");
                }}
                startIcon={<Home color="icon" />}
            >
                Home
            </LoginButton>
        </Stack>
    );
}
