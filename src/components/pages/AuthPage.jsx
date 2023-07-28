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
    Box,
    Container,
    styled,
    Grow,
} from "@mui/material";
import {
    AlternateEmail,
    Password,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthPage({
    darkMode,
    setShowLoading,
    setIsLoggedIn,
    setSnackbarInputs,
}) {
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [showPassword, setShowPassword] = useState(false);
    const [showResponse, setShowResponse] = useState("");

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
        "&:hover": {
            backgroundColor: theme.palette.accent.secondary,
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
            const result = await axios.post(
                "http://localhost:5000/api/users/login",
                {
                    loginData,
                }
            );

            setIsLoggedIn({
                logged: true,
                userID: result.data.userID,
                name: result.data.name,
                avatar: result.data.avatar,
                token: result.data.token,
            });
            setShowResponse("");

            setSnackbarInputs({
                open: true,
                message: "You are now logged in!",
            });
            navigate("/");
        } catch (error) {
            setShowResponse("Invalid Credentials. Please try again.");
        }
        setShowLoading(false);
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
            console.log(emailError, passwordError);
            return;
        } else {
            loginRequest();
        }
    };

    return (
        <Container
            component="main"
            sx={{
                paddingTop: "25vh",
                justifyContent: "center",
                alignItems: "center",
                width: isMobile ? "100%" : "600px",
                transition: "all 0.2s ease",
            }}
        >
            <Grow in={true}>
                <Paper
                    elevation={4}
                    component={Stack}
                    spacing={2}
                    sx={{
                        borderRadius: "15px",
                        justifyContent: "center",
                        padding: isMobile ? "30px" : "50px 80px 50px 80px",
                        alignItems: "center",
                        transition: "all 0.2s ease",
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
                                                        darkMode
                                                            ? "white"
                                                            : "black"
                                                    }`,
                                                }}
                                            />
                                        ) : (
                                            <Visibility
                                                sx={{
                                                    color: `${
                                                        darkMode
                                                            ? "white"
                                                            : "black"
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
                    <Typography variant={isMobile ? "h6" : "h5"}>
                        {showResponse}
                    </Typography>
                </Paper>
            </Grow>
        </Container>
    );
}
