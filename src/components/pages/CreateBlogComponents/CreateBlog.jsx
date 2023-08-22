import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    useMediaQuery,
    Stack,
    Button,
    styled,
    Paper,
    TextField,
    Divider,
    Grow,
    Avatar,
    Typography,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";
import { useConfirm } from "material-ui-confirm";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

import { API_URL } from "../../../App";
import PermissionError from "./PermissionError";
import ImageUpload from "../../shared/ImageUpload";
import HeaderActions from "./CreateBlogHeaderActions";

export default function CreateBlog({
    darkMode,
    isLoggedIn,
    setRefresh,
    setShowLoading,
}) {
    const confirmDialog = useConfirm();
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [isValid, setIsValid] = useState(false);
    const [inputs, setInputs] = useState({
        title: "",
        content: "<h1>Write the Blog Content here</h1>",
        image: "",
    });

    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        padding: isMobile ? "8px 15px" : "8px 20px",
        fontSize: "1rem",
        width: "100%",
        border: `1px solid ${theme.palette.action.disabled}`,
        transition: theme.transitions.create(),
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
            borderColor: theme.palette.accent.primary,
        },
    }));
    const DividerHorizontalSX = {
        borderBottomWidth: 2,
        borderRadius: "15px",
    };
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
            setRefresh(true);
            enqueueSnackbar("Your blog has been created!", {
                variant: "success",
            });
            navigate("/");
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                enqueueSnackbar("Server offline.", { variant: "info" });
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
            setShowLoading(false);
        }
    };

    const handleSubmit = () => {
        setShowLoading(true);

        const hasError =
            inputs.title === "" ||
            inputs.content === "" ||
            inputs.image === "" ||
            !isValid;

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
        setShowLoading(false);
    };

    return (
        <Fragment>
            <Grow in={true}>
                <Stack
                    direction="column"
                    spacing={isMobile ? 4 : 8}
                    paddingTop="7rem"
                    width={isMobile ? "100%" : "50rem"}
                    marginBottom={4}
                    sx={{
                        transition: (theme) => theme.transitions.create(),
                    }}
                >
                    {isLoggedIn.logged ? (
                        <Stack direction="column" spacing={isMobile ? 2 : 4}>
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
                                color="textField"
                                size="large"
                                InputProps={{
                                    style: {
                                        fontSize: "45px",
                                    },
                                }}
                            />
                            <Typography
                                component={Stack}
                                direction="row"
                                spacing={1}
                                variant={isMobile ? "caption" : "body1"}
                                sx={{ alignItems: "center" }}
                            >
                                Current user: <Avatar src={isLoggedIn.avatar} />
                                <strong>{isLoggedIn.name}</strong>
                            </Typography>

                            <Paper
                                elevation={0}
                                component={Stack}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                spacing={2}
                                sx={{
                                    borderRadius: "15px",
                                    padding: isMobile ? "10px" : "20px",
                                    width: "100%",
                                    overflow: "hidden",
                                }}
                            >
                                <ImageUpload
                                    darkMode={darkMode}
                                    id="blog-image"
                                    onInput={(image) => {
                                        setInputs((prevInputs) => {
                                            return {
                                                ...prevInputs,
                                                image: image,
                                            };
                                        });
                                    }}
                                    isValid={isValid}
                                    isMobile={isMobile}
                                    CustomButton={CustomButton}
                                    setIsValid={setIsValid}
                                />

                                <Divider flexItem sx={DividerHorizontalSX} />

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
                                    style={{
                                        color: "black",
                                    }}
                                />
                            </Paper>
                        </Stack>
                    ) : (
                        <PermissionError
                            isMobile={isMobile}
                            NavigateButton={CustomButton}
                            setShowLoading={setShowLoading}
                        />
                    )}
                </Stack>
            </Grow>
            {isLoggedIn.logged && (
                <HeaderActions
                    isMobile={isMobile}
                    setShowLoading={setShowLoading}
                    handleSubmit={handleSubmit}
                />
            )}
        </Fragment>
    );
}
