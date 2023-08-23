import axios from "axios";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

import RenderBlog from "./RenderBlog";
import { API_URL } from "../../../App";
import HeaderActions from "./ShowBlogHeaderActions";
import {
    confirmDialog,
    navigate,
    serverOffline,
} from "../../shared/CustomComponents";

export default function ShowBlog(props) {
    const { id } = useParams();
    const [currentBlog, setCurrentBlog] = useState(null);

    // delete the blog only when user is logged in
    const deleteBlog = async (blogID = currentBlog._id) => {
        props.setShowLoading(true);
        try {
            const userID = Cookies.get("userID");
            const token = Cookies.get("token");

            // delete blog using token and userid
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
            props.setRefresh(true);
            navigate("/");
        } catch (error) {
            // server offline
            if (error.code === "ERR_NETWORK") {
                props.setRefresh(true);
                serverOffline();
            }

            // session expired (token invalid) error
            else if (
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
            }

            // cannot delete blog error
            else {
                enqueueSnackbar("Error deleting this blog!", {
                    variant: "error",
                });
            }
        } finally {
            props.setShowLoading(false);
        }
    };

    // Find the blog post with the given ID
    useEffect(() => {
        const fetchBlog = async () => {
            props.setShowLoading(true);
            try {
                // fetch form api
                const result = await axios.get(`${API_URL}/api/blogs/${id}`);
                setCurrentBlog(result.data);
            } catch (error) {
                // server offline
                if (error.code === "ERR_NETWORK") {
                    props.setRefresh(true);
                    serverOffline();
                    navigate("/");
                }

                // blog not found error
                else {
                    confirmDialog({
                        title: "Blog not found!",
                        content:
                            "The blog does not exist. Go back to home page.",
                        hideCancelButton: true,
                    })
                        .then(() => {
                            props.setShowLoading(true);
                            props.setRefresh(true);
                            setTimeout(() => {
                                navigate("/");
                                props.setShowLoading(false);
                            }, 200);
                        })
                        .catch(() => {
                            /* */
                        });
                }
            } finally {
                props.setShowLoading(false);
            }
        };

        fetchBlog();
    }, []);

    return (
        currentBlog &&
        !props.showLoading && (
            <Fragment>
                <RenderBlog
                    currentBlog={currentBlog}
                    isMobile={props.isMobile}
                />

                <HeaderActions
                    isMobile={props.isMobile}
                    deleteBlog={deleteBlog}
                    isLoggedIn={props.isLoggedIn}
                    setRefresh={props.setRefresh}
                    setShowLoading={props.setShowLoading}
                />
            </Fragment>
        )
    );
}
