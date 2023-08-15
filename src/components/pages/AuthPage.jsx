import {
    TextField,
    InputAdornment,
    IconButton,
    Divider,
    Paper,
    Stack,
    useMediaQuery,
    Button,
    Typography,
    Container,
    styled,
    Grow,
} from "@mui/material";
import {
    AlternateEmail,
    BackHand,
    Home,
    Password,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import { API_URL } from "../../App";

export default function AuthPage({
    darkMode,
    isLoggedIn,
    setRefresh,
    setShowLoading,
    setIsLoggedIn,
    setSnackbarInputs,
}) {
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [showPassword, setShowPassword] = useState(false);
    const [showResponse, setShowResponse] = useState(
        "Please enter valid credentials"
    );
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const LoginButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 20px",
        fontSize: "20px",
        width: isMobile ? "100%" : "40%",
        border: `2px solid ${theme.palette.action.disabled}`,
        transition: theme.transitions.create(),
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            document.getElementById("submitButton").click();
        }
    };

    const loginRequest = async () => {
        setShowLoading(true);
        const loginData = { email, password };

        try {
            const result = await axios.post(`${API_URL}/api/users/login`, {
                loginData,
            });

            Cookies.set("token", result.data.token, {
                expires: 1 / 24,
                secure: false,
                httpOnly: false,
            });
            Cookies.set("userID", result.data.userID, {
                expires: 1 / 24,
                secure: false,
                httpOnly: false,
            });

            setIsLoggedIn({
                name: result.data.name,
                avatar: result.data.avatar,
            });
            setShowResponse("");

            setSnackbarInputs({
                open: true,
                message: "You are now logged in!",
            });
            setRefresh(true);
            navigate("/blogs");
        } catch (error) {
            setShowResponse("Invalid Credentials. Please try again.");
        } finally {
            setShowLoading(false);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();

        // Check if the fields are not empty
        if (email === "") {
            setEmailError(true);
        }
        if (password === "") {
            setPasswordError(true);
        }

        if (emailError && passwordError) {
            return;
        } else {
            loginRequest();
        }
    };

    return !isLoggedIn.logged ? (
        <Grow in={true}>
            <Paper
                elevation={4}
                component={Stack}
                spacing={2}
                sx={{
                    borderRadius: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isMobile ? 4 : 5,
                    transition: (theme) => theme.transitions.create(),
                    marginTop: isMobile ? "25vh" : "25vh",
                    width: isMobile ? "100%" : "30rem",
                }}
            >
                <Typography variant={isMobile ? "h4" : "h3"}>
                    <strong>Sign in</strong>
                </Typography>
                <Divider flexItem />

                {/* Input fields */}

                <TextField
                    fullWidth
                    required
                    onKeyDown={handleKeyPress}
                    error={emailError}
                    helperText={
                        emailError
                            ? "Email is required"
                            : "Please enter your email address"
                    }
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false);
                    }}
                    label="Email Address"
                    id="email"
                    variant="outlined"
                    color="textField"
                    type="text"
                    InputProps={{
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
                    onKeyDown={handleKeyPress}
                    error={passwordError}
                    helperText={
                        passwordError
                            ? "Password is required"
                            : "Please enter your password"
                    }
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                    }}
                    label="Password"
                    id="password"
                    variant="outlined"
                    color="textField"
                    type={`${showPassword ? "text" : "password"}`}
                    InputProps={{
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
                                        <VisibilityOff
                                            sx={{
                                                color: `${
                                                    darkMode ? "white" : "black"
                                                }`,
                                            }}
                                        />
                                    ) : (
                                        <Visibility
                                            sx={{
                                                color: `${
                                                    darkMode ? "white" : "black"
                                                }`,
                                            }}
                                        />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <LoginButton
                    id="submitButton"
                    type="submit"
                    onClick={handleClick}
                >
                    Login
                </LoginButton>
                <Typography variant="button">{showResponse}</Typography>
            </Paper>
        </Grow>
    ) : (
        <Stack
            component={Container}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
                transition: (theme) => theme.transitions.create(),
                paddingTop: isMobile ? "7rem" : "10rem",
                width: isMobile ? "100%" : "50rem",
            }}
        >
            <Typography variant="h4">
                <BackHand /> You are already logged in.
            </Typography>
            <LoginButton
                onClick={() => {
                    navigate("/blogs");
                }}
                startIcon={<Home color="icon" />}
            >
                HOME
            </LoginButton>
        </Stack>
    );
}
