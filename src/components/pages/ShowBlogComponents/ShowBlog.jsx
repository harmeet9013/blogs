import axios from "axios";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";
import { useMediaQuery } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import RenderBlog from "./RenderBlog";
import HeaderActions from "./ShowBlogHeaderActions";

import { API_URL } from "../../../App";
import { FooterButtons } from "../../shared/Footer";

export default function ShowBlog({ isLoggedIn, setRefresh, setShowLoading }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const confirmDialog = useConfirm();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [currentBlog, setCurrentBlog] = useState(null);

    const fetchBlog = async () => {
        setShowLoading(true);
        try {
            const result = await axios.get(`${API_URL}/api/blogs/${id}`);
            setCurrentBlog(result.data);
        } catch (error) {
            confirmDialog({
                title: "Blog not found!",
                content:
                    "The blog that you tried to access does not exist. Going back to Home Page.",
                hideCancelButton: true,
            })
                .then(() => {
                    setShowLoading(true);
                    setRefresh(true);
                    navigate("/");
                })
                .catch(() => {
                    /* */
                });
        } finally {
            setShowLoading(false);
        }
    };

    const deleteBlog = async (blogID = currentBlog._id) => {
        setShowLoading(true);
        try {
            const userID = Cookies.get("userID");
            const token = Cookies.get("token");

            await axios.delete(`${API_URL}/api/blogs/delete/${blogID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    userID: userID,
                    "Content-Type": "application/json",
                },
                data: {},
            });

            // if status code is 200
            enqueueSnackbar("Blog was deleted!", { variant: "success" });
            setRefresh(true);
            navigate("/");
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                enqueueSnackbar("Server Offline", { variant: "info" });
                setRefresh(true);
            } else if (
                error.response.status === 403 ||
                error.response.status === 401
            ) {
                confirmDialog({
                    title: "Session Expired",
                    content: "This session is expired. Please login again.",
                    hideCancelButton: true,
                })
                    .then(() => {
                        /* */
                    })
                    .catch(() => {
                        /* */
                    });
            } else {
                enqueueSnackbar("Error deleting this blog!", {
                    variant: "error",
                });
            }
        }
        setShowLoading(false);
    };

    // Find the blog post with the given ID
    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        currentBlog && (
            <Fragment>
                <RenderBlog currentBlog={currentBlog} isMobile={isMobile} />

                <HeaderActions
                    isMobile={isMobile}
                    deleteBlog={deleteBlog}
                    isLoggedIn={isLoggedIn}
                    setRefresh={setRefresh}
                    setShowLoading={setShowLoading}
                />

                <FooterButtons />
            </Fragment>
        )
    );
}
