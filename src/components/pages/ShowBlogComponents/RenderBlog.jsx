import { Avatar, Box, Grow, Paper, Stack, Typography } from "@mui/material";
import { EditorState, convertFromRaw } from "draft-js";
import { Fragment, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function RenderBlog(props) {
    const [editorState, setEditorState] = useState(null);

    useEffect(() => {
        setEditorState(
            EditorState.createWithContent(
                convertFromRaw(JSON.parse(props.currentBlog.content))
            )
        );
    }, []);

    return (
        <Stack direction="column" spacing={4}>
            <Typography
                variant={props.isMobile ? "h4" : "h2"}
                sx={{ textAlign: "left", letterSpacing: "2px" }}
            >
                <strong>{props.currentBlog.title}</strong>
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar />
                <Typography
                    component={Stack}
                    direction="row"
                    spacing={5}
                    sx={{ textAlign: "left" }}
                    variant={props.isMobile ? "caption" : "body1"}
                >
                    <strong>{props.currentBlog.author}</strong>
                    <i>{props.currentBlog.date}</i>
                </Typography>
            </Stack>

            <Grow in={true}>
                <Paper
                    elevation={1}
                    component={Stack}
                    spacing={2}
                    sx={{
                        borderRadius: "15px",
                        padding: props.isMobile
                            ? "20px"
                            : "20px 40px 20px 40px",
                        transition: "all 0.2s ease",
                    }}
                >
                    <Box
                        component="img"
                        src={props.currentBlog.image}
                        alt={props.currentBlog.title}
                        sx={{
                            position: "relative",
                            borderRadius: "15px",
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            zIndex: "11",
                        }}
                    />

                    <Editor
                        editorState={editorState}
                        toolbarHidden={true}
                        readOnly={true}
                    />
                </Paper>
            </Grow>
        </Stack>
    );
}
