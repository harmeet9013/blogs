import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Avatar, Box, Container, Grow, Stack, Typography } from "@mui/material";

export default function RenderBlog(props) {
    return (
        <Stack direction="column" spacing={4} sx={{ cursor: "default" }}>
            <Typography
                variant={props.isMobile ? "h4" : "h2"}
                sx={{ textAlign: "left", letterSpacing: "2px" }}
            >
                <strong>{props.currentBlog.title}</strong>
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar src={props.currentBlog.avatar} />
                <Stack direction="column" spacing={0} textAlign="left">
                    <Typography variant="body1">
                        <strong>{props.currentBlog.author}</strong>
                    </Typography>
                    <Typography variant="body2">
                        {props.currentBlog.date}
                    </Typography>
                </Stack>
            </Stack>

            <Grow in={true}>
                <Container
                    component={Stack}
                    spacing={2}
                    sx={{
                        borderRadius: "15px",
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
                            pointerEvents: "none",
                        }}
                    />

                    <CKEditor
                        editor={BalloonEditor}
                        data={props.currentBlog.content}
                        disabled={true}
                    />
                </Container>
            </Grow>
        </Stack>
    );
}
