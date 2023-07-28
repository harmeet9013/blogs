import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    useMediaQuery,
    Stack,
    Button,
    styled,
    Paper,
    Typography,
    TextField,
    Divider,
    Grow,
} from "@mui/material";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";

import axios from "axios";
import ImageUpload from "../../shared/ImageUpload";
import CreateBlogDialog from "./CreateBlogDialog";
import PermissionError from "./PermissionError";
import HeaderActions from "./CreateBlogHeaderActions";
import MUIRichTextEditor from "mui-rte";

export default function CreateBlog({
    darkMode,
    isLoggedIn,
    setShowLoading,
    setRefresh,
    setSnackbarInputs,
}) {
    const navigate = useNavigate();
    const { logged, userID } = isLoggedIn;
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
        content: {},
        image: "",
    });
    const [showResponse, setShowResponse] = useState(
        "Write your blog and then click on Finish"
    );

    const [blogContent, setBlogContent] = useState(EditorState.createEmpty());

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

    const CustomButton = styled(Button)(({ theme }) => ({
        color: theme.palette.text.primary,
        borderRadius: "15px",
        backgroundColor: theme.palette.action.hover,
        fontSize: isMobile ? "16px" : "18px",
        padding: isMobile ? "15px 20px" : "20px 30px",
        transition: "all 0.2s ease",
        borderColor: theme.palette.divider,
        "&:hover": {
            backgroundColor: theme.palette.accent.secondary,
        },
    }));

    const MyEditor = styled(MUIRichTextEditor)(({ theme }) => ({
        root: {
            backgroundColor: "#ebebeb",
        },
        container: {
            display: "flex",
            flexDirection: "column-reverse",
        },
        editor: {
            backgroundColor: "#ebebeb",
            padding: "20px",
            height: "200px",
            maxHeight: "200px",
            overflow: "auto",
        },
        toolbar: {
            borderTop: "1px solid gray",
            backgroundColor: "#ebebeb",
        },
        placeHolder: {
            backgroundColor: "#ebebeb",
            paddingLeft: 20,
            width: "inherit",
        },
        anchorLink: {
            color: "#333333",
            textDecoration: "underline",
        },
    }));

    const editorStyle = {
        minHeight: "500px",
        cursor: "text",
        color: (theme) => theme.palette.accent.primary,
    };

    const DividerHorizontalSX = {
        borderBottomWidth: 2,
        borderRadius: "15px",
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputs((prevInputs) => {
            return { ...prevInputs, [id]: value };
        });
    };

    const handleEditorChange = (newBlogContent) => {
        setBlogContent(newBlogContent);

        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                content: JSON.stringify(
                    convertToRaw(blogContent.getCurrentContent())
                ),
            };
        });
    };

    const createBlogRequest = async () => {
        await axios
            .post("http://localhost:5000/api/blogs/create", {
                ...inputs,
                userID,
            })
            .then((res) => {
                if (res.status === 201) {
                    setRefresh(true);
                    setSnackbarInputs({
                        open: true,
                        message: "Your blog has been created!",
                    });
                    navigate("/");
                }
            })
            .catch((error) => {
                setShowResponse(error);
            });
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
                    navigate("/");
                    setShowLoading(false);
                }, 300);
            } else {
                if (!hasError && logged) {
                    setTimeout(() => {
                        createBlogRequest();
                        setShowLoading(false);
                    }, 500);
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
                        transition: "all 200ms ease",
                        padding: isMobile ? "0 5% 5% 5%" : "0 28% 5% 28%",
                        paddingTop: isMobile ? "100px" : "10rem",
                    }}
                >
                    {logged ? (
                        <Stack direction="column" spacing={isMobile ? 2 : 4}>
                            <HeaderActions
                                CustomButton={CustomButton}
                                setDialogInputs={setDialogInputs}
                            />

                            <Paper
                                elevation={2}
                                component={Stack}
                                direction="row"
                                justifyContent="center"
                                sx={{
                                    borderRadius: "15px",
                                    padding: isMobile ? "5px" : "20px",
                                    backgroundColor: (theme) =>
                                        theme.palette.action.hover,
                                }}
                            >
                                {/* <Typography variant="h6">
                                    {showResponse}
                                </Typography> */}
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
                            </Paper>

                            <Paper
                                elevation={2}
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
                                    backgroundColor: (theme) =>
                                        theme.palette.action.hover,
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

                                {/* <MyEditor
                                    inlineToolbar={true}
                                    toolbarButtonSize="medium"
                                    label="Start Typing your blog here..."
                                    component={Stack}
                                    sx={{
                                        width: "100%",
                                        minHeight: "500px",
                                    }}
                                /> */}

                                <Editor
                                    editorState={blogContent}
                                    onEditorStateChange={handleEditorChange}
                                    // toolbar={{
                                    //     options: [
                                    //         "inline",
                                    //         "blockType",
                                    //         "list",
                                    //         "link",
                                    //         "emoji",
                                    //         "image",
                                    //     ],
                                    //     inline: {
                                    //         options: [
                                    //             "bold",
                                    //             "italic",
                                    //             "underline",
                                    //         ],
                                    //     },
                                    // }}
                                    wrapperStyle={{
                                        padding: "15px",
                                        width: "100%",
                                    }}
                                    editorStyle={{
                                        cursor: "text",
                                        borderRadius: "15px",
                                        minHeight: "500px",
                                        padding: "0px 20px 0px 20px",
                                        width: "100%",
                                        border: `2px solid ${
                                            darkMode
                                                ? "rgba(255, 255, 255, 0.2)"
                                                : "rgba(0, 0, 0, 0.2)"
                                        }`,
                                    }}
                                    toolbarStyle={{
                                        borderRadius: "15px",
                                        backgroundColor: "transparent",
                                        color: darkMode ? "black" : "black",
                                        padding: "10px",
                                        border: `2px solid ${
                                            darkMode
                                                ? "rgba(255, 255, 255, 0.2)"
                                                : "rgba(0, 0, 0, 0.2)"
                                        }`,
                                        option: {
                                            backgroundColor: "black",
                                            borderRadius: "15px",
                                        },
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
        </Fragment>
    );
}
