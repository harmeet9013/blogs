import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReadMore } from "@mui/icons-material";
import { Paper } from "@mui/material";

import "./Blogs.css";
export default function Blogs({
    darkMode,
    blogs,
    refresh,
    setRefresh,
    setBlogs,
    setShowLoading,
}) {
    const navigate = useNavigate();

    const [errorBackend, setErrorBackend] = useState(false);

    //fetch Blogs when the component loads and refresh state changes
    useEffect(() => {
        const fetchBlogs = async () => {
            setShowLoading(true);
            await axios
                .get("http://localhost:5000/api/blogs")
                .then((res) => {
                    setBlogs(res.data);
                    setErrorBackend(false);
                })
                .catch((error) => {
                    setErrorBackend(true);
                });
            setShowLoading(false);
        };
        if (refresh) {
            fetchBlogs();
            setRefresh(false);
        }
    }, [refresh]);

    const renderBlogs = () => {
        return Object.keys(blogs).map((key) => {
            const { _id, title, content, author, date } = blogs[key];

            let words = content.split(" ");
            let truncatedText = words.slice(0, 50).join(" ");

            return (
                <Paper
                    elevation={4}
                    className={`blog-container ${darkMode ? "dark" : "light"}`}
                    sx={{ borderRadius: "15px" }}
                    key={_id}
                >
                    <p className="blog-title">{title}</p>
                    <p className="blog-author">
                        By {author} &#x2022; <strong>{date}</strong>
                    </p>

                    <p className="blog-content">{truncatedText} ... </p>
                    <Link
                        to={"#"}
                        className={`read-more-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setTimeout(() => {
                                navigate(`/blog/${_id}`);
                                setShowLoading(false);
                            }, 300);
                            setShowLoading(true);
                        }}
                    >
                        Read More
                        <ReadMore
                            sx={{
                                my: "-6px",
                                ml: "15px",
                                transform: "scale(1.5)",
                                bgcolor: "rgba(0,0,0,0.2)",
                                borderRadius: "5px",
                                padding: "0px 3px",
                            }}
                        />
                    </Link>
                </Paper>
            );
        });
    };

    return (
        <div className={`blogs-container ${darkMode ? "dark" : "light"}`}>
            {errorBackend ? (
                <Paper
                    elevation={4}
                    className={`blog-container ${darkMode ? "dark" : "light"}`}
                    sx={{
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p className="error-heading-text">
                        Could not connect to the database.
                    </p>
                    <button
                        className={`error-refresh-button ${
                            darkMode ? "dark" : "light"
                        }`}
                        onClick={() => {
                            setRefresh(true);
                        }}
                    >
                        Refresh
                    </button>
                </Paper>
            ) : (
                renderBlogs()
            )}
        </div>
    );
}
