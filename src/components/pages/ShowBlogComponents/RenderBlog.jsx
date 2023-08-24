import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import {
    Avatar,
    CircularProgress,
    Container,
    Grow,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";

import { BlogImageBox, BlogTitle } from "../../shared/CustomComponents";
import { useState } from "react";

export default function RenderBlog(props) {
    const [imageLoading, setImageLoading] = useState(true);
    const [avatarLoading, setAvatarLoading] = useState(true);

    return (
        <Grow in={true}>
            <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                component={Container}
                marginBottom={4}
                padding="7rem 0 0 0"
                width={props.isMobile ? "100%" : "50rem"}
                sx={{
                    cursor: "default",
                    transition: (theme) => theme.transitions.create(),
                }}
            >
                <Container component={Stack} spacing={2}>
                    <BlogTitle variant={props.isMobile ? "h4" : "h2"}>
                        {props.currentBlog.title}
                    </BlogTitle>

                    <Stack direction="row" alignItems="center" spacing={2}>
                        {avatarLoading ? (
                            <Skeleton variant="circular">
                                <Avatar
                                    src={props.currentBlog.avatar}
                                    onLoad={() => setAvatarLoading(false)}
                                />
                            </Skeleton>
                        ) : (
                            <Avatar src={props.currentBlog.avatar} />
                        )}

                        <Stack direction="column" spacing={0} textAlign="left">
                            <Typography variant="body1" fontWeight="bold">
                                {props.currentBlog.author}
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
                    {imageLoading && <CircularProgress color="icon" />}

                    <Grow in={!imageLoading}>
                        <BlogImageBox
                            component="img"
                            src={props.currentBlog.image}
                            alt={props.currentBlog.title}
                            onLoad={() => setImageLoading(false)}
                            sx={{
                                display: imageLoading && "none",
                            }}
                        />
                    </Grow>

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
