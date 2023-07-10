import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowBack,
    CheckCircle,
    Close,
    Delete,
    Edit,
    Link,
} from "@mui/icons-material";
import { Divider, IconButton, Paper, Snackbar } from "@mui/material";
import { blogs } from "../../main";

import "./ShowBlog.css";

export default function ShowBlog({
    darkMode,
    setDialogText,
    setShowLoading,
    setShowDialog,
    isLoggedIn,
}) {
    // const [isEditing, setIsEditing] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [snackbarInputs, setSnackbarInputs] = useState({
        open: false,
        message: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    // Find the blog post with the given ID
    const blog = blogs[id];

    const handleCopyURL = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => setIsCopied(true))
            .catch((error) => {
                setIsCopied(false);
                setSnackbarInputs({
                    open: true,
                    message: "Could not copy link. Error Code - " + error,
                });
            });
        console.log("got here!");
    };

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div
            className={`solo-blog-main-container ${
                darkMode ? "dark" : "light"
            }`}
        >
            <Snackbar
                open={snackbarInputs.open}
                autoHideDuration={5000}
                onClose={() => {
                    setSnackbarInputs({
                        open: false,
                        message: "",
                    });
                }}
                message={snackbarInputs.message}
            />
            {/* Header that contains the actions of blog */}
            <div className="solo-blog-header-actions">
                <div
                    className={`solo-blog-header-button-group ${
                        darkMode ? "dark" : "light"
                    }`}
                >
                    <button
                        className={`solo-blog-header-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setTimeout(() => {
                                navigate("/");
                                setShowLoading(false);
                            }, 100);
                            setShowLoading(true);
                        }}
                    >
                        <ArrowBack sx={{ marginY: "-5px" }} /> Back
                    </button>

                    <Divider
                        sx={{ bgcolor: `${darkMode ? "white" : "black"}` }}
                        orientation="vertical"
                        flexItem
                    />
                    <button
                        className={`solo-blog-header-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        style={{
                            backgroundColor: `${
                                isCopied && "rgba(0,255,0,0.5)"
                            }`,
                            "&:hover": {
                                backgroundColor: `${
                                    darkMode ? "#55380b" : "#ffc0ab"
                                }`,
                            },
                        }}
                        onClick={() => {
                            setTimeout(() => {
                                handleCopyURL;
                                setShowLoading(false);
                            }, 300);
                            setShowLoading(true);
                        }}
                    >
                        {isCopied ? (
                            <React.Fragment>
                                <CheckCircle sx={{ marginY: "-5px" }} /> Copied!
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Link sx={{ marginY: "-5px" }} /> Copy Link
                            </React.Fragment>
                        )}
                    </button>
                </div>

                {isLoggedIn && (
                    <div
                        className={`solo-blog-header-button-group ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        <button
                            className={`solo-blog-header-button ${
                                darkMode ? "dark" : "light"
                            }`}
                        >
                            <Edit sx={{ marginY: "-5px" }} /> Edit
                        </button>

                        <Divider
                            sx={{ bgcolor: `${darkMode ? "white" : "black"}` }}
                            orientation="vertical"
                            flexItem
                        />

                        <button
                            className={`solo-blog-header-button ${
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
                            <Delete sx={{ marginY: "-5px" }} /> Delete
                        </button>
                    </div>
                )}
            </div>

            {/* The actual blog itself */}
            <Paper
                elevation={4}
                className={`solo-blog-container ${darkMode ? "dark" : "light"}`}
                sx={{ borderRadius: "15px" }}
            >
                <span
                    // contentEditable={`${isEditing ? true : false}`}
                    className="solo-blog-title"
                >
                    {blog.title}
                </span>
                <p className="solo-blog-author">
                    By Harmeet Singh &#x2022; <strong>June 2023</strong>
                </p>
                <p
                    // contentEditable={`${isEditing ? true : false}`}
                    className="solo-blog-content"
                >
                    {blog.content}
                </p>
            </Paper>
        </div>
    );
}
