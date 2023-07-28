import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Stack,
    useMediaQuery,
    ButtonGroup,
    styled,
    Button,
    Paper,
    Grow,
} from "@mui/material";
import HeaderActions from "./ShowBlogHeaderActions";
import ShowBlogDialog from "./ShowBlogDialog";
import RenderBlog from "./RenderBlog";
import axios from "axios";
import { EditorState, convertFromRaw } from "draft-js";

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

    const HeaderButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "5px",
        backgroundColor: "transparent",
        fontSize: isMobile ? "12px" : "20px",
        padding: "20px 30px",
        transition: "all 0.2s ease",
        width: "100%",
        borderColor: theme.palette.divider,
        opacity: "0.6",
        "&:hover": {
            backgroundColor: theme.palette.accent.secondary,
            opacity: "1",
        },
    }));

    const deleteBlog = async (blogID = currentBlog._id) => {
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
        setShowLoading(true);
        const fetchBlog = async () => {
            try {
                const result = await axios.get(
                    `http://localhost:5000/api/blogs/${id}`
                );
                setCurrentBlog(result.data);
                setRenderBlog(true);
            } catch (error) {
                setRenderBlog(false);
                setCurrentBlog({ error: true });
                setDialogInputs({
                    open: true,
                    title: "Blog not found!",
                    desc: `The blog that you tried to access does not exist. Going back to Home Page.`,
                    button: false,
                });
            } finally {
                setShowLoading(false); // Move setShowLoading inside the fetchBlog function
            }
        };

        fetchBlog();
    }, []);

    return (
        <Fragment>
            <ShowBlogDialog
                DialogButton={DialogButton}
                dialogInputs={dialogInputs}
                deleteBlog={deleteBlog}
                setDialogInputs={setDialogInputs}
                setShowLoading={setShowLoading}
            />

            <HeaderActions
                HeaderButton={HeaderButton}
                isMobile={isMobile}
                isCopied={isCopied}
                logged={isLoggedIn.logged}
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
                    padding: isMobile ? "0 5% 5% 5%" : "0 28% 5% 28%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    textAlign: "right",
                }}
            >
                {!currentBlog.error && (
                    <Fragment>
                        {renderBlog && (
                            <RenderBlog
                                isMobile={isMobile}
                                currentBlog={currentBlog}
                            />
                        )}
                    </Fragment>
                )}
            </Stack>
        </Fragment>
    );
}
