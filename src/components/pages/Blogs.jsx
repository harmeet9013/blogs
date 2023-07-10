import "./Blogs.css";
import { blogs } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import { ReadMore } from "@mui/icons-material";
import { Paper } from "@mui/material";

export default function Blogs({ darkMode, setShowLoading }) {
    const navigate = useNavigate();

    const renderBlogs = () => {
        return Object.keys(blogs).map((key) => {
            const blog = blogs[key];

            let words = blog.content.split(" ");
            let truncatedText = words.slice(0, 50).join(" ");

            return (
                <Paper
                    elevation={4}
                    className={`blog-container ${darkMode ? "dark" : "light"}`}
                    sx={{ borderRadius: "15px" }}
                    key={key}
                >
                    <p className="blog-title">{blog.title}</p>
                    <p className="blog-author">
                        By Harmeet Singh &#x2022; <strong>June 2023</strong>
                    </p>

                    <p className="blog-content">{truncatedText} ... </p>
                    <Link
                        to={"#"}
                        className="read-more-button"
                        onClick={() => {
                            setTimeout(() => {
                                navigate(`/blog/${key}`);
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
            {renderBlogs()}
        </div>
    );
}
