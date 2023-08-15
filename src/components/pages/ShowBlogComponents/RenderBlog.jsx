import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
    Avatar,
    Box,
    Container,
    Grow,
    Stack,
    Typography,
    styled,
} from "@mui/material";

export default function RenderBlog(props) {
    const BlogTitle = styled(Typography)(({ theme }) => ({
        textAlign: "left",
        letterSpacing: "2px",
        fontWeight: "bold",
    }));

    const BlogImage = styled(Box)(({ theme }) => ({
        borderRadius: "15px",
        width: "100%",
        height: props.isMobile ? "300px" : "500px",
        objectFit: "cover",
        pointerEvents: "none",
    }));

    return (
        <Grow in={true}>
            <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                component={Container}
                sx={{
                    cursor: "default",
                    marginBottom: "30px",
                    transition: (theme) => theme.transitions.create(),
                    padding: props.isMobile ? "7rem 0 0 0" : "10rem 0 0 0",
                    width: props.isMobile ? "100%" : "50rem",
                }}
            >
                <Container component={Stack} spacing={2}>
                    <BlogTitle variant={props.isMobile ? "h4" : "h2"}>
                        {props.currentBlog.title}
                    </BlogTitle>

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
                </Container>

                <Stack
                    justifyContent="center"
                    alignItems="center"
                    component={Container}
                    id="blog-container"
                >
                    <BlogImage
                        component="img"
                        src={props.currentBlog.image}
                        alt={props.currentBlog.title}
                    />

                    <CKEditor
                        editor={BalloonEditor}
                        data={props.currentBlog.content}
                        disabled={true}
                    />
                </Stack>
            </Stack>
        </Grow>
    );
}
