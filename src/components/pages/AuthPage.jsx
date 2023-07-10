import {
    Box,
    TextField,
    InputAdornment,
    IconButton,
    Divider,
    ThemeProvider,
    useTheme,
    createTheme,
    Paper,
} from "@mui/material";
import {
    AlternateEmail,
    Password,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";

import "./AuthPage.css";

export default function AuthPage({ darkMode }) {
    const customTheme = (outerTheme) =>
        createTheme({
            components: {
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            "--TextField-brandBorderColor": "#E0E3E7",
                            "--TextField-brandBorderHoverColor": "#B2BAC2",
                            "--TextField-brandBorderFocusedColor": "#6F7E8C",
                            label: {
                                color: "rgba(150,150,150,1)",
                                letterSpacing: "2px",
                                fontWeight: "600",
                            },
                            "& label.Mui-focused": {
                                color: ` ${darkMode ? "white" : "black"}`,
                            },
                            input: {
                                color: ` ${darkMode ? "white" : "black"}`,
                                fontSize: "20px",
                            },
                        },
                    },
                },
                MuiFilledInput: {
                    styleOverrides: {
                        root: {
                            "&:before, &:after": {
                                borderBottom: "2px solid rgba(0,0,0,0)",
                            },
                            "&:hover:not(.Mui-disabled, .Mui-error):before": {
                                borderBottom: "2px solid rgba(150, 150, 150)",
                            },
                            "&.Mui-focused:after": {
                                borderBottom: `2px solid ${
                                    darkMode ? "#55380b" : "#ffc0ab"
                                }`,
                                borderRadius: "50px",
                            },
                        },
                    },
                },
            },
        });
    const outerTheme = useTheme();

    const [showPassword, setShowPassword] = useState(false);
    const [errorFields, setErrorFields] = useState({
        fullName: false,
        email: false,
        password: false,
    });
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setErrorFields((prevInputs) => {
            return { ...prevInputs, [id]: false };
        });
        setInputs((prevInputs) => {
            return { ...prevInputs, [id]: value };
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (inputs.fullName === "") {
            setErrorFields((prevInputs) => {
                return { ...prevInputs, fullName: true };
            });
        }
        if (inputs.email === "") {
            setErrorFields((prevInputs) => {
                return { ...prevInputs, email: true };
            });
        }
        if (inputs.password === "") {
            setErrorFields((prevInputs) => {
                return { ...prevInputs, password: true };
            });
        }
        if (errorFields === "false") {
            alert("Successful!");
            setErrorFields({
                fullName: false,
                email: false,
                password: false,
            });
        }
    };

    return (
        <div className={`auth-page-container ${darkMode ? "dark" : "light"}`}>
            <Paper
                elevation={4}
                className={`auth-details-container ${
                    darkMode ? "dark" : "light"
                }`}
            >
                <p
                    className={`auth-details-title ${
                        darkMode ? "dark" : "light"
                    }`}
                >
                    User Authentication
                </p>
                <Divider
                    sx={{
                        bgcolor: `${darkMode ? "white" : "black"}`,
                        width: "100%",
                        height: "1%",
                    }}
                    flexItem
                />

                {/* Input fields */}
                <div
                    style={{
                        margin: "auto",
                        display: "grid",
                        gridTemplateColumns: "350px",
                        rowGap: "40px",
                    }}
                >
                    <ThemeProvider theme={customTheme(outerTheme)}>
                        {/* Full Name */}
                        {/* <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        className={`auth-details-input ${
                            darkMode ? "dark" : "light"
                        }`}
                        label="Full-Name"
                        id="fullName"
                        value={inputs.fullName}
                        onChange={handleChange}
                        error={errorFields.fullName}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person
                                        sx={{
                                            marginY: "10px",
                                            color: `${
                                                darkMode ? "white" : "black"
                                            }`,
                                        }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    /> */}

                        {/* Email Address */}
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <AlternateEmail
                                sx={{
                                    color: `${darkMode ? "white" : "black"}`,
                                    mr: 1,
                                    my: 2,
                                }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                className={`auth-details-input ${
                                    darkMode ? "dark" : "light"
                                }`}
                                label="Email Address"
                                id="email"
                                value={inputs.email}
                                onChange={handleChange}
                                error={errorFields.email}
                                autoFocus
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start"></InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        {/* Password */}
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Password
                                sx={{
                                    color: `${darkMode ? "white" : "black"}`,
                                    mr: 1,
                                    my: 2,
                                }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type={`${showPassword ? "text" : "password"}`}
                                className={`auth-details-input ${
                                    darkMode ? "dark" : "light"
                                }`}
                                label="Password"
                                id="password"
                                value={inputs.password}
                                onChange={handleChange}
                                error={errorFields.password}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start"></InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => {
                                                    setShowPassword(
                                                        !showPassword
                                                    );
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
                        </Box>
                    </ThemeProvider>
                </div>

                <button
                    className={`auth-details-button ${
                        darkMode ? "dark" : "light"
                    }`}
                    onClick={handleClick}
                >
                    Login
                </button>
            </Paper>
        </div>
    );
}