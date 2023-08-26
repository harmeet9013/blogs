import { Fragment, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import {
    Avatar,
    Box,
    CircularProgress,
    Container,
    Grow,
    Skeleton,
    Stack,
    Typography,
    styled,
} from "@mui/material";

export default function RenderBlog(props) {
    const [imageLoading, setImageLoading] = useState(true);
    const [avatarLoading, setAvatarLoading] = useState(true);

    // blog title styled
    const BlogTitle = styled(Typography)(({ theme }) => ({
        transition: theme.transitions.create(),
        textAlign: "left",
        letterSpacing: "2px",
        fontWeight: "600",
    }));

    // blog image styled
    const BlogImageBox = styled(Box)(({ theme }) => ({
        transition: theme.transitions.create(),
        borderRadius: 50,
        width: "100%",
        height: props.isMobile ? "300px" : "500px",
        objectFit: "cover",
        pointerEvents: "none",
        border: `2px solid ${theme.palette.secondary.container.main}`,
    }));

    return (
        <Grow in={!props.showLoading}>
            <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                component={Container}
                marginBottom={4}
                padding="7rem 0 0 0"
                width={props.isMobile ? "100%" : "50rem"}
                sx={(theme) => ({
                    cursor: "default",
                    transition: theme.transitions.create(),
                })}
            >
                <Stack component={!props.isMobile && Container} spacing={4}>
                    <BlogTitle
                        variant={props.isMobile ? "h4" : "h2"}
                        color="primary"
                    >
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
                            <Grow in={!avatarLoading}>
                                <Avatar
                                    src={props.currentBlog.avatar}
                                    sx={(theme) => ({
                                        height: 60,
                                        width: 60,
                                        border: `2px solid ${theme.palette.tertiary.main}`,
                                    })}
                                />
                            </Grow>
                        )}

                        <Stack
                            direction="column"
                            spacing={0}
                            textAlign="left"
                            color="primary"
                        >
                            <Typography
                                variant={props.isMobile ? "body1" : "h6"}
                                fontWeight={600}
                                sx={(theme) => ({
                                    color: theme.palette.tertiary.main,
                                })}
                            >
                                {props.currentBlog.author}
                            </Typography>
                            <Typography
                                variant={props.isMobile ? "body2" : "body1"}
                            >
                                {props.currentBlog.date}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    component={!props.isMobile && Container}
                    id="blog-container"
                >
                    {imageLoading ? (
                        <Fragment>
                            <CircularProgress color="primary" />
                            <BlogImageBox
                                component="img"
                                src={props.currentBlog.image}
                                onLoad={() => setImageLoading(false)}
                                sx={{
                                    display: imageLoading && "none",
                                }}
                            />
                        </Fragment>
                    ) : (
                        <Grow in={!imageLoading}>
                            <BlogImageBox
                                component="img"
                                src={props.currentBlog.image}
                                alt={props.currentBlog.title}
                            />
                        </Grow>
                    )}

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
