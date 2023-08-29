import { Fragment, useState } from "react";
import {
    Stack,
    TextField,
    Divider,
    Grow,
    Avatar,
    Typography,
    Box,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

import { API_URL } from "../../../App";
import PermissionError from "./PermissionError";
import ImageUpload from "../../shared/ImageUpload";
import HeaderActions from "./CreateBlogHeaderActions";
import {
    confirmDialog,
    navigate,
    serverOffline,
} from "../../shared/CustomComponents";

export default function CreateBlog(props) {
    const [isValid, setIsValid] = useState(false);
    const [inputs, setInputs] = useState({
        title: "",
        content: "<h1>Write the Blog Content here</h1>",
        image: "",
    });

    const editorConfig = {
        toolbar: {
            items: [
                "undo",
                "redo",
                "|",
                "heading",
                "|",
                "fontfamily",
                "fontsize",
                "fontColor",
                "fontBackgroundColor",
                "|",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "subscript",
                "superscript",
                "code",
                "|",
                "link",
                "uploadImage",
                "blockQuote",
                "codeBlock",
                "|",
                "alignment",
                "|",
                "bulletedList",
                "numberedList",
                "todoList",
                "outdent",
                "indent",
            ],
            shouldNotGroupWhenFull: true,
        },
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputs((prevInputs) => {
            return { ...prevInputs, [id]: value };
        });
    };

    const createBlogRequest = async () => {
        props.setShowLoading(true);
        try {
            const formData = new FormData();

            formData.append("title", inputs.title);
            formData.append("content", inputs.content);
            formData.append("image", inputs.image);

            await axios.post(`${API_URL}/api/blogs/create`, formData, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                    userID: Cookies.get("userID"),
                    "Content-Type": "multipart/form-data",
                },
            });
            props.setRefresh(true);
            enqueueSnackbar("Your blog has been created!", {
                variant: "success",
            });
            navigate("/");
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                serverOffline();
            } else if (
                error.response.status === 403 ||
                error.response.status === 401
            ) {
                confirmDialog({
                    title: "Session Expired",
                    content:
                        "This session is expired. Please login again. Please save your work first.",
                    hideCancelButton: true,
                })
                    .then(() => {
                        //
                    })
                    .catch(() => {
                        //
                    });
            } else {
                confirmDialog({
                    title: "Unexpected Error",
                    content:
                        "Server error. Please try again later. Please save your work somewhere.",
                    hideCancelButton: true,
                })
                    .then(() => {
                        //
                    })
                    .catch(() => {
                        //
                    });
            }
        } finally {
            props.setShowLoading(false);
        }
    };

    const handleSubmit = () => {
        const hasError =
            inputs.title === "" ||
            inputs.content === "" ||
            inputs.image === "" ||
            !isValid;

        setTimeout(() => {
            if (!hasError && isLoggedIn !== null) {
                createBlogRequest();
            } else {
                confirmDialog({
                    title: "Invalid Inputs",
                    content: "Inputs are invalid or the user is not logged in!",
                    hideCancelButton: true,
                })
                    .then(() => {
                        //
                    })
                    .catch(() => {
                        //
                    });
            }
        }, 100);
    };

    return (
        <Fragment>
            <Grow in={true}>
                <Stack
                    direction="column"
                    spacing={props.isMobile ? 4 : 8}
                    paddingTop="7rem"
                    width={props.isMobile ? "95%" : "50rem"}
                    marginBottom={4}
                    sx={(theme) => ({
                        transition: theme.transitions.create(),
                    })}
                >
                    {props.isLoggedIn.logged ? (
                        <Stack
                            direction="column"
                            spacing={props.isMobile ? 2 : 4}
                            id="create-blog-container"
                        >
                            <TextField
                                fullWidth
                                multiline
                                id="title"
                                variant="standard"
                                type="text"
                                placeholder="Enter your Blog Title here"
                                value={inputs.title}
                                onChange={handleChange}
                                autoFocus
                                size="large"
                                InputProps={{
                                    sx: (theme) => ({
                                        fontSize: props.isMobile
                                            ? theme.typography.h4.fontSize
                                            : theme.typography.h2.fontSize,
                                        fontWeight: "600",
                                    }),
                                }}
                            />

                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                <Avatar
                                    src={props.isLoggedIn.avatar}
                                    sx={(theme) => ({
                                        height: 60,
                                        width: 60,
                                        border: `2px solid ${theme.palette.primary.main}`,
                                    })}
                                />
                                <Typography
                                    variant={props.isMobile ? "body1" : "h6"}
                                    fontWeight={500}
                                >
                                    {props.isLoggedIn.name}
                                </Typography>
                            </Stack>

                            <Box
                                borderRadius={30}
                                padding={props.isMobile ? 1 : 2}
                                display="flex"
                                flexDirection="column"
                                gap={4}
                            >
                                <ImageUpload
                                    id="blog-image"
                                    onInput={(newImage) => {
                                        setInputs((prevInputs) => {
                                            return {
                                                ...prevInputs,
                                                image: newImage,
                                            };
                                        });
                                    }}
                                    isValid={isValid}
                                    isMobile={props.isMobile}
                                    setIsValid={setIsValid}
                                />

                                <Divider flexItem />

                                <CKEditor
                                    editor={BalloonEditor}
                                    data={inputs.content}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setInputs((prevInputs) => {
                                            return {
                                                ...prevInputs,
                                                content: data,
                                            };
                                        });
                                    }}
                                    config={editorConfig}
                                />
                            </Box>
                        </Stack>
                    ) : (
                        <PermissionError
                            isMobile={props.isMobile}
                            setShowLoading={props.setShowLoading}
                        />
                    )}
                </Stack>
            </Grow>
            {props.isLoggedIn.logged && (
                <HeaderActions
                    isMobile={props.isMobile}
                    handleSubmit={handleSubmit}
                    setShowLoading={props.setShowLoading}
                />
            )}
        </Fragment>
    );
}
