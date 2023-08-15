import { Fragment, useEffect, useState } from "react";
import {
    Button,
    Grow,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";
import axios from "axios";
import RenderBlogs from "./RenderBlogs";

import { API_URL } from "../../../App";
import { FooterButtons, FooterText } from "../../shared/Footer";

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
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.background.header,
        fontSize: isMobile ? "16px" : "18px",
        padding: isMobile ? "15px 20px" : "15px 30px",
        transition: theme.transitions.create(),
        border: `2px solid ${theme.palette.divider}`,
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    const BlogButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        borderRadius: "15px",
        padding: isMobile ? "5px" : "20px 40px 20px 40px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        cursor: "pointer",
        color: theme.palette.text.primary,
        transition: theme.transitions.create(),
        gap: "20px",
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));

    //fetch Blogs when the component loads and refresh state changes
    useEffect(() => {
        const fetchBlogs = async () => {
            setShowLoading(true);
            await axios
                .get(`${API_URL}/api/blogs/allBlogs`)
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
        <Fragment>
            <Stack
                direction="column"
                spacing={4}
                sx={{
                    transition: (theme) => theme.transitions.create(),
                    paddingTop: isMobile ? "7rem" : "10rem",
                    width: isMobile ? "100%" : "50rem",
                    marginBottom: "30px",
                }}
            >
                {errorBackend ? (
                    <Grow in={true}>
                        <Stack
                            direction="column"
                            spacing={4}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography variant="h6">
                                Could not connect to the database. <br />
                                Try again after sometime.
                            </Typography>
                            <RefreshButton
                                onClick={() => {
                                    setRefresh(true);
                                }}
                            >
                                Refresh
                            </RefreshButton>
                        </Stack>
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
            <FooterText />
            <FooterButtons />
        </Fragment>
    );
}
