import { useEffect, useState } from "react";
import {
    Button,
    Grow,
    Paper,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";
import axios from "axios";
import RenderBlogs from "./RenderBlogs";

export default function Blogs({
    blogs,
    refresh,
    setRefresh,
    setBlogs,
    setShowLoading,
}) {
    const [errorBackend, setErrorBackend] = useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const RefreshButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.text.primary,
        padding: "8px 20px",
        borderRadius: "15px",
        width: isMobile ? "100%" : "300px",
        fontSize: isMobile ? "16px" : "24px",
        transition: "all 200ms ease",
        border: `2px solid ${theme.palette.text.primary}`,
        "&:hover": {
            backgroundColor: theme.palette.accent.secondary,
        },
    }));

    const BlogButton = styled(Button)(({ theme }) => ({
        borderRadius: "15px",
        padding: isMobile ? "20px" : "20px 40px 20px 40px",
        width: "100%",
        transition: "all 200ms ease",
        flexDirection: "column",
        cursor: "pointer",
        color: theme.palette.text.primary,
        gap: "20px",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
            transform: "scale(1.2)",
        },
    }));

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

    return (
        <Stack
            direction="column"
            spacing={isMobile ? 6 : 8}
            sx={{
                transition: "all 200ms ease",
                padding: isMobile ? "0 5% 5% 5%" : "0 28% 5% 28%",
                paddingTop: isMobile ? "100px" : "15vh",
                transition: "all 200ms ease",
            }}
        >
            {errorBackend ? (
                <Grow in={true}>
                    <Paper
                        elevation={2}
                        sx={{
                            borderRadius: "15px",
                            padding: isMobile ? "20px" : "20px 40px 20px 40px",
                            display: "flex",
                            gap: "40px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            transition: "all 200ms ease",
                        }}
                    >
                        <Typography variant={isMobile ? "h6" : "h3"}>
                            <strong>Could not connect to the database.</strong>
                        </Typography>
                        <RefreshButton
                            onClick={() => {
                                setRefresh(true);
                            }}
                            sx={{}}
                        >
                            Refresh
                        </RefreshButton>
                    </Paper>
                </Grow>
            ) : (
                <RenderBlogs
                    blogs={blogs}
                    isMobile={isMobile}
                    BlogButton={BlogButton}
                    setShowLoading={setShowLoading}
                />
            )}
        </Stack>
    );
}
