import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Avatar, Box, Grow, Paper, Stack, Typography } from "@mui/material";

export default function RenderBlog(props) {
    return (
        <Stack direction="column" spacing={4} sx={{ cursor: "default" }}>
            <Typography
                variant={props.isMobile ? "h4" : "h2"}
                sx={{ textAlign: "left", letterSpacing: "2px" }}
            >
                <strong>{props.currentBlog.title}</strong>
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar src={props.currentBlog.avatar} />
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
                            borderRadius: "15px",
                            width: "100%",
                            height: props.isMobile ? "300px" : "500px",
                            objectFit: "cover",
                        }}
                    />

                    <CKEditor
                        editor={BalloonEditor}
                        data={props.currentBlog.content}
                        disabled={true}
                    />
                </Paper>
            </Grow>
        </Stack>
    );
}
