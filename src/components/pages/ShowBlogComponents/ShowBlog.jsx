import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack, useMediaQuery, styled, Button } from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios";

import HeaderActions from "./ShowBlogHeaderActions";
import ShowBlogDialog from "./ShowBlogDialog";
import RenderBlog from "./RenderBlog";

import { API_URL } from "../../../App";
import { FooterButtons } from "../../shared/Footer";

export default function ShowBlog({
    isLoggedIn,
    setShowLoading,
    setSnackbarInputs,
    setRefresh,
}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [isCopied, setIsCopied] = useState(false);
    const [renderBlog, setRenderBlog] = useState(false);
    const [currentBlog, setCurrentBlog] = useState({});
    const [dialogInputs, setDialogInputs] = useState({
        open: false,
        title: "",
        desc: "",
        navigate: "",
        button: false,
    });

    const DialogButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 20px",
        fontSize: "16px",
        "&:hover": {
            backgroundColor: theme.palette.accent.secondary,
        },
    }));

    const deleteBlog = async (blogID = currentBlog._id) => {
        setShowLoading(true);
        try {
            const userID = Cookies.get("userID");
            const token = Cookies.get("token");

            const result = await axios.delete(
                `${API_URL}/api/blogs/delete/${blogID}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        userID: userID,
                        "Content-Type": "application/json",
                    },
                    data: {},
                }
            );

            // if status code is 200
            setSnackbarInputs({ open: true, message: "Blog was deleted!" });
            setRefresh(true);
            navigate("/blogs");
        } catch (error) {
            if (
                error.response.status === 403 ||
                error.response.status === 401
            ) {
                setDialogInputs({
                    open: true,
                    title: "Session Expired",
                    desc: "This session is expired. Please login again.",
                    navigate: "",
                    button: false,
                });
            } else {
                setSnackbarInputs({
                    open: true,
                    message: "Could not deleted the blog!",
                });
            }
        }

        setShowLoading(false);
    };

    // Find the blog post with the given ID
    useEffect(() => {
        setShowLoading(true);
        const fetchBlog = async () => {
            try {
                const result = await axios.get(`${API_URL}/api/blogs/${id}`);
                setCurrentBlog(result.data);
                setRenderBlog(true);
            } catch (error) {
                setRenderBlog(false);
                setCurrentBlog({ error: true });
                setDialogInputs({
                    open: true,
                    title: "Blog not found!",
                    desc: `The blog that you tried to access does not exist. Going back to Home Page.`,
                    navigate: "/blogs",
                    button: false,
                });
            } finally {
                setShowLoading(false); // Move setShowLoading inside the fetchBlog function
            }
        };

        fetchBlog();
    }, []);

    return (
        <Stack spacing={0} justifyContent="center" alignItems="center">
            <ShowBlogDialog
                DialogButton={DialogButton}
                dialogInputs={dialogInputs}
                deleteBlog={deleteBlog}
                setDialogInputs={setDialogInputs}
                setShowLoading={setShowLoading}
            />

            <HeaderActions
                isMobile={isMobile}
                isCopied={isCopied}
                isLoggedIn={isLoggedIn}
                setIsCopied={setIsCopied}
                setSnackbarInputs={setSnackbarInputs}
                setShowLoading={setShowLoading}
                setRefresh={setRefresh}
                setDialogInputs={setDialogInputs}
            />
            <Stack
                direction="column"
                sx={{
                    transition: "all 0.2s ease",
                    padding: isMobile ? "8rem 5% 5% 5%" : "10rem 28% 5% 28%",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                {!currentBlog.error && renderBlog && (
                    <Fragment>
                        <RenderBlog
                            isMobile={isMobile}
                            currentBlog={currentBlog}
                        />
                        <FooterButtons />
                    </Fragment>
                )}
            </Stack>
        </Stack>
    );
}
