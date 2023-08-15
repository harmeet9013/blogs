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
    Container,
} from "@mui/material";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import Cookies from "js-cookie";

import ImageUpload from "../../shared/ImageUpload";
import CreateBlogDialog from "./CreateBlogDialog";
import PermissionError from "./PermissionError";
import HeaderActions from "./CreateBlogHeaderActions";

import { API_URL } from "../../../App";

export default function CreateBlog({
    darkMode,
    isLoggedIn,
    setShowLoading,
    setRefresh,
    setSnackbarInputs,
}) {
    const navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [dialogInputs, setDialogInputs] = useState({
        open: false,
        title: "",
        content: "",
        navigate: "",
        button: true,
    });
    const [isValid, setIsValid] = useState(false);
    const [inputs, setInputs] = useState({
        title: "",
        content: "<h1>Write the Blog Content here</h1>",
        image: "",
    });

    const DialogButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.background.header,
        transition: theme.transitions.create(),
        padding: isMobile ? "8px 15px" : "8px 20px",
        fontSize: "16px",
        "&:hover": {
            backgroundColor: theme.palette.accent.hover,
        },
    }));
    const CustomButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.background.header,
        fontSize: isMobile ? "16px" : "18px",
        padding: isMobile ? "15px 20px" : "15px 30px",
        transition: theme.transitions.create(),
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

            const result = await axios.post(
                `${API_URL}/api/blogs/create`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                        userID: Cookies.get("userID"),
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setRefresh(true);
            setSnackbarInputs({
                open: true,
                message: "Your blog has been created!",
            });
            navigate("/blogs");
        } catch (error) {
            if (
                error.response.status === 403 ||
                error.response.status === 401
            ) {
                setDialogInputs({
                    open: true,
                    title: "Session Expired",
                    content:
                        "This session is expired. Please login again. Please save your work first.",
                    navigate: "",
                    button: false,
                });
            } else {
                setDialogInputs({
                    open: true,
                    title: "Unexpected Error",
                    content:
                        "Server error. Please try again later. Please save your work somewhere.",
                    navigate: "",
                    button: false,
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

        setTimeout(() => {
            if (dialogInputs.navigate === "/") {
                setShowLoading(true);
                setTimeout(() => {
                    setSnackbarInputs({
                        open: true,
                        message: "Blog was discarded!",
                    });
                    navigate("/blogs");
                    setShowLoading(false);
                }, 300);
            } else {
                if (!hasError && isLoggedIn !== null) {
                    createBlogRequest();
                } else {
                    setDialogInputs({
                        open: true,
                        title: "Invalid Inputs",
                        content:
                            "Inputs are invalid or the user is not logged in!",
                        navigate: "",
                        button: false,
                    });
                    setShowLoading(false);
                }
            }
        }, 300);
    };

    return (
        <Fragment>
            <CreateBlogDialog
                dialogInputs={dialogInputs}
                DialogButton={DialogButton}
                handleSubmit={handleSubmit}
                setDialogInputs={setDialogInputs}
            />

            <Grow in={true}>
                <Stack
                    direction="column"
                    spacing={isMobile ? 4 : 8}
                    sx={{
                        transition: (theme) => theme.transitions.create(),
                        paddingTop: isMobile ? "7rem" : "10rem",
                        width: isMobile ? "100%" : "50rem",
                        marginBottom: "30px",
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
                                        fontWeight: "bold",
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
                                <i>Current user:</i>
                                <Avatar src={isLoggedIn.avatar} />{" "}
                                <strong>{isLoggedIn.name}</strong>
                            </Typography>

                            <Paper
                                elevation={1}
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
                    setDialogInputs={setDialogInputs}
                />
            )}
        </Fragment>
    );
}
