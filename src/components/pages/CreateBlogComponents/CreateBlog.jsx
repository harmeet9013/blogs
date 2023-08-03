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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

import ImageUpload from "../../shared/ImageUpload";
import CreateBlogDialog from "./CreateBlogDialog";
import PermissionError from "./PermissionError";
import HeaderActions from "./CreateBlogHeaderActions";
import Cookies from "js-cookie";
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
            const result = await axios.post(
                `${API_URL}/api/blogs/create`,
                {
                    ...inputs,
                },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                        userID: Cookies.get("userID"),
                        "Content-Type": "application/json",
                    },
                }
            );
            setRefresh(true);
            setSnackbarInputs({
                open: true,
                message: "Your blog has been created!",
            });
            navigate("/");
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
                    title: "Unexcpected Error",
                    content:
                        "There was an error connecting to the servers. Please try again later. Please save your work somewhere.",
                    navigate: "",
                    button: false,
                });
            }
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
                    navigate("/");
                    setShowLoading(false);
                }, 300);
            } else {
                if (!hasError && isLoggedIn !== null) {
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
                        padding: isMobile
                            ? "8rem 5% 5% 5%"
                            : "10rem 28% 5% 28%",
                    }}
                >
                    {Cookies.get("token") || Cookies.get("userID") ? (
                        <Stack direction="column" spacing={isMobile ? 2 : 4}>
                            <HeaderActions
                                isMobile={isMobile}
                                setDialogInputs={setDialogInputs}
                            />
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
                                <i>Current user:</i>
                                <Avatar src={isLoggedIn.avatar} />{" "}
                                <strong>{isLoggedIn.name}</strong>
                            </Typography>

                            <Paper
                                elevation={6}
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
        </Fragment>
    );
}