import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import {
    Box,
    Divider,
    Paper,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import { ArrowBack, Check, Login } from "@mui/icons-material";
import {
    DialogDark,
    DialogLight,
    DialogTitleDark,
    DialogTitleLight,
    DialogContentDark,
    DialogContentLight,
    DialogButtonDark,
    DialogButtonLight,
} from "../shared/DialogStyle";

import "./CreateBlog.css";
import ImageUpload from "../shared/ImageUpload";

export default function CreateBlog({
    darkMode,
    isLoggedIn,
    dialogOpen,
    dialogInputs,
    setDialogOpen,
    setDialogInputs,
    setShowLoading,
    setRefresh,
    setSnackbarInputs,
}) {
    const navigate = useNavigate();
    const { logged, userID } = isLoggedIn;

    const [isValid, setIsValid] = useState(false);
    const [inputs, setInputs] = useState({
        title: "",
        content: "",
        image: "",
    });
    const [showResponse, setShowResponse] = useState(
        "Write your blog and then click on Finish"
    );

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputs((prevInputs) => {
            return { ...prevInputs, [id]: value };
        });
    };

    const createBlogRequest = async () => {
        await axios
            .post("http://localhost:5000/api/blogs/create", {
                ...inputs,
                userID,
            })
            .then((res) => {
                if (res.status === 201) {
                    setRefresh(true);
                    setSnackbarInputs({
                        open: true,
                        message: "Your blog has been created!",
                    });
                    navigate("/");
                }
            })
            .catch((error) => {
                setShowResponse(error);
            });
    };

    const handleSubmit = () => {
        setShowLoading(true);
        const hasError =
            inputs.title === "" ||
            inputs.content === "" ||
            inputs.image === "" ||
            !isValid;

        if (dialogInputs.navigate === "/") {
            setSnackbarInputs({ open: true, message: "Blog was discarded!" });
            navigate("/");
            setShowLoading(false);
        } else {
            if (!hasError && logged) {
                setTimeout(() => {
                    createBlogRequest();
                    setShowLoading(false);
                }, 500);
            } else {
                setShowResponse(
                    "Inputs are invalid or the user is not logged in!"
                );
                setShowLoading(false);
            }
        }
    };

    const handleButtonNavigate = (event) => {
        event.preventDefault();
        setShowLoading(true);
        setTimeout(() => {
            navigate(event.target.id);
            setShowLoading(false);
        }, 200);
    };

    return logged ? (
        <React.Fragment>
            {/* Dialog component specifically for header usage */}
            <Dialog
                open={dialogOpen}
                PaperProps={{
                    component: Box,
                    sx: darkMode ? DialogDark : DialogLight,
                }}
            >
                <DialogTitle sx={darkMode ? DialogTitleDark : DialogTitleLight}>
                    {dialogInputs.title}
                </DialogTitle>
                <Divider
                    sx={{
                        bgcolor: `${darkMode ? "white" : "black"}`,
                    }}
                    variant="middle"
                    flexItem
                />
                <DialogContent
                    sx={darkMode ? DialogContentDark : DialogContentLight}
                >
                    {dialogInputs.content}
                </DialogContent>
                <DialogActions sx={darkMode ? DialogDark : DialogLight}>
                    <button
                        style={darkMode ? DialogButtonDark : DialogButtonLight}
                        onClick={() => {
                            setDialogOpen(false);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        style={darkMode ? DialogButtonDark : DialogButtonLight}
                        onClick={() => {
                            setDialogOpen(false);
                            handleSubmit();
                        }}
                    >
                        Yes
                    </button>
                </DialogActions>
            </Dialog>

            {/* Component that displays to the user for creating blog */}
            <div
                className={`create-blog-container ${
                    darkMode ? "dark" : "light"
                }`}
            >
                <Paper
                    elevation={4}
                    className={`create-blog-header ${
                        darkMode ? "dark" : "light"
                    }`}
                    style={{ borderRadius: "15px" }}
                >
                    <button
                        name="Back"
                        className={`create-blog-actions-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setDialogInputs({
                                title: "Discard changes?",
                                content:
                                    "Are you sure you want to go back? This will discard everything!",
                                navigate: "/",
                            });
                            setDialogOpen(true);
                        }}
                    >
                        <ArrowBack sx={{ my: "-6px" }} /> Back
                    </button>
                    <p
                        className={`response-text ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        {showResponse}
                    </p>
                    <button
                        name="Finish"
                        type="submit"
                        className={`create-blog-actions-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setDialogInputs({
                                title: "Submit Blog?",
                                content:
                                    "Are you sure you want to create the blog?",
                                navigate: "",
                            });
                            setDialogOpen(true);
                        }}
                    >
                        <Check sx={{ my: "-6px" }} /> Finish
                    </button>
                </Paper>

                <Paper
                    elevation={4}
                    className={`create-blog-inputs ${
                        darkMode ? "dark" : "light"
                    }`}
                    sx={{ borderRadius: "15px" }}
                >
                    <ImageUpload
                        darkMode={darkMode}
                        id="blog-image"
                        onInput={(image) => {
                            setInputs((prevInputs) => {
                                return {
                                    ...prevInputs,
                                    image: image,
                                };
                            });
                        }}
                        isValid={isValid}
                        setIsValid={setIsValid}
                    />
                    <textarea
                        className={`create-blog-title ${
                            darkMode ? "dark" : "light"
                        }`}
                        id="title"
                        variant="outlined"
                        type="text"
                        placeholder="Enter your Blog Title here"
                        value={inputs.title}
                        onChange={handleChange}
                        autoFocus
                    />
                    <Divider
                        sx={{ bgcolor: `${darkMode ? "white" : "black"}` }}
                        variant="middle"
                        flexItem
                    />
                    <textarea
                        className={`create-blog-content  ${
                            darkMode ? "dark" : "light"
                        }`}
                        id="content"
                        type="text"
                        placeholder="Enter your Blog Content here"
                        value={inputs.content}
                        onChange={handleChange}
                        rows={10}
                    />
                </Paper>
            </div>
        </React.Fragment>
    ) : (
        <div className="create-blog-container">
            <p className={`response-text ${darkMode ? "dark" : "light"}`}>
                You do not have persmission to view this page!
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
                <button
                    className={`create-blog-actions-button ${
                        darkMode ? "dark" : "light"
                    }`}
                    id="/"
                    onClick={handleButtonNavigate}
                >
                    <ArrowBack sx={{ my: "-6px" }} /> Back
                </button>
                <button
                    className={`create-blog-actions-button ${
                        darkMode ? "dark" : "light"
                    }`}
                    id="/authUser"
                    onClick={handleButtonNavigate}
                >
                    Login <Login sx={{ my: "-6px" }} />
                </button>
            </div>
        </div>
    );
}
