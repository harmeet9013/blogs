import { Check, Delete } from "@mui/icons-material";
import {
    Divider,
    Paper,
    TextField,
    createTheme,
    useTheme,
} from "@mui/material";

import "./CreateBlog.css";
import { ThemeProvider } from "@emotion/react";

export default function CreateBlog({
    darkMode,
    setShowLoading,
    setShowDialog,
}) {
    const outerTheme = useTheme();

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
                            textarea: {
                                backgroundColor: "rgba(0,0,0,0)",
                                color: ` ${darkMode ? "white" : "black"}`,
                                fontSize: "20px",
                            },
                        },
                    },
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        root: {
                            "&:before, &:after": {
                                border: "2px solid rgba(0,0,0,0)",
                            },
                            "&:hover:not(.Mui-disabled, .Mui-error):before": {
                                border: "2px solid rgba(150, 150, 150)",
                            },
                            "&.Mui-focused:after": {
                                border: `2px solid ${
                                    darkMode ? "#55380b" : "#ffc0ab"
                                }`,
                                borderRadius: "50px",
                            },
                        },
                    },
                },
            },
        });

    return (
        <div className={`create-blog-container ${darkMode ? "dark" : "light"}`}>
            <header
                className={`create-blog-actions ${darkMode ? "dark" : "light"}`}
            >
                <button
                    name="Delete"
                    type="delete"
                    className={`create-blog-actions-button ${
                        darkMode ? "dark" : "light"
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        console.log("got here");
                        setDialogText({
                            title: "Delete Blog",
                            content:
                                "Are you sure you want to delete this blog?",
                            event: "logout",
                            location: "",
                        });
                        setShowDialog(true);
                    }}
                >
                    <Delete sx={{ my: "-6px" }} /> Delete
                </button>

                <Divider
                    sx={{ bgcolor: `${darkMode ? "white" : "black"}` }}
                    orientation="vertical"
                    flexItem
                />

                <button
                    name="Finish"
                    type="submit"
                    className={`create-blog-actions-button ${
                        darkMode ? "dark" : "light"
                    }`}
                >
                    <Check sx={{ my: "-6px" }} /> Finish
                </button>
            </header>
            <Paper
                elevation={4}
                className={`create-blog-inputs ${darkMode ? "dark" : "light"}`}
                sx={{ borderRadius: "15px" }}
            >
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                        className={`create-blog-title ${
                            darkMode ? "dark" : "light"
                        }`}
                        name="title"
                        variant="outlined"
                        type="text"
                        placeholder="Enter your Blog Title here"
                        autoFocus
                        fullWidth
                        multiline
                    />
                    <TextField
                        className={`create-blog-content  ${
                            darkMode ? "dark" : "light"
                        }`}
                        name="content"
                        type="text"
                        placeholder="Enter your Blog Content here"
                        fullWidth
                        multiline
                        minRows={10}
                    />
                </ThemeProvider>
            </Paper>
        </div>
    );
}
