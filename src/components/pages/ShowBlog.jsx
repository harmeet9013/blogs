import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowBack,
    CheckCircle,
    Delete,
    Edit,
    Link,
} from "@mui/icons-material";
import { Divider, Paper } from "@mui/material";

import { ShowDialog } from "../shared/ShowDialog";
import { Scrollbar } from "react-scrollbars-custom";

import "./ShowBlog.css";
import axios from "axios";

export default function ShowBlog({
    darkMode,
    isLoggedIn,
    setShowLoading,
    setSnackbarInputs,
    setRefresh,
}) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isCopied, setIsCopied] = useState(false);
    const [currentBlog, setCurrentBlog] = useState({});

    const deleteBlog = async (blogID) => {
        setShowLoading(true);
        await axios
            .delete(`http://localhost:5000/api/blogs/delete/${blogID}`, {
                data: {
                    userID: isLoggedIn.userID,
                },
            })
            .then((res) => {
                setSnackbarInputs({ open: true, message: "Blog was deleted!" });
                setRefresh(true);
                navigate("/");
            })
            .catch((error) => {
                setSnackbarInputs({
                    open: true,
                    message: "Could not deleted the blog!",
                });
            });
        setShowLoading(false);
    };

    // Find the blog post with the given ID
    useEffect(() => {
        const fetchBlog = async () => {
            await axios
                .get(`http://localhost:5000/api/blogs/${id}`)
                .then((res) => {
                    setCurrentBlog(res.data);
                })
                .catch((error) => {
                    setCurrentBlog({ error: true });
                });
        };

        fetchBlog();
    }, []);

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

    return currentBlog.error === true ? (
        <Scrollbar style={{ width: "100%", height: "100%" }}>
            <ShowDialog
                darkMode={darkMode}
                setShowLoading={setShowLoading}
                setRefresh={setRefresh}
                title="Blog not found!"
                content="The requested blog was not found."
            />
        </Scrollbar>
    ) : (
        <div
            className={`solo-blog-main-container ${
                darkMode ? "dark" : "light"
            }`}
        >
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
                                setShowLoading(false);
                                navigate("/");
                            }, 100);
                            setShowLoading(true);
                            setRefresh(true);
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

                {isLoggedIn.logged && (
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
                            onClick={async (e) => {
                                e.preventDefault();
                                deleteBlog(currentBlog._id);
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
                    {currentBlog.title}
                </span>
                <p className="solo-blog-author">
                    By {currentBlog.author} &#x2022;{" "}
                    <strong>{currentBlog.date}</strong>
                </p>
                <p
                    // contentEditable={`${isEditing ? true : false}`}
                    className="solo-blog-content"
                >
                    {currentBlog.content}
                </p>
            </Paper>
        </div>
    );
}
