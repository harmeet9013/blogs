import {
    Grow,
    Typography,
    Container,
    Stack,
    Avatar,
    CircularProgress,
    Skeleton,
    styled,
    Button,
    Box,
} from "@mui/material";
import { useState } from "react";

import { navigate } from "../../shared/CustomComponents";

export default function RenderBlogs(props) {
    return Object.keys(props.blogs).map((key) => {
        const { _id, title, image, author, date, avatar } = props.blogs[key];

        const [isImageLoading, setIsImageLoading] = useState(true);
        const [isAvatarLoading, setIsAvatarLoading] = useState(true);

        // big blog button
        const BlogButton = styled(Button)(({ theme }) => ({
            transition: `${theme.transitions.create()}`,
            textTransform: "none",
            borderRadius: 50,
            padding: props.isMobile ? "1.5rem 0.8rem" : "2rem",
            flexDirection: "column",
            cursor: "pointer",
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.low,
            gap: 10,
            "&:hover": !props.isMobile && {
                backgroundColor: theme.palette.primary.container.main,
                transform: "translateY(-0.5rem) !important",
                boxShadow: theme.shadows[2],
            },
        }));

        // blog image styles
        const BlogsImageBox = styled(Box)(({ theme }) => ({
            transition: theme.transitions.create(),
            position: "relative",
            borderRadius: 50,
            width: "100%",
            height: "300px",
            objectFit: "cover",
            pointerEvents: "none",
            border: `1px solid ${theme.palette.secondary.container.main}`,
        }));

        return (
            <Grow
                in={true}
                key={_id}
                style={{
                    transitionDelay: key * 100,
                }}
            >
                <BlogButton
                    onClick={() => {
                        setTimeout(() => {
                            navigate(`/blog/${_id}`);
                            props.setShowLoading(false);
                        }, 200);
                        props.setShowLoading(true);
                    }}
                >
                    {isImageLoading && (
                        <CircularProgress color="primary" size={30} />
                    )}

                    <BlogsImageBox
                        component="img"
                        src={image}
                        alt={title}
                        onError={() => setIsImageLoading(true)}
                        onLoad={() => {
                            setIsImageLoading(false);
                        }}
                        sx={{
                            display: isImageLoading && "none",
                        }}
                    />

                    <Stack spacing={2} component={Container}>
                        <Typography
                            textAlign="left"
                            fontWeight={600}
                            variant="h4"
                            color={(theme) => theme.palette.primary.main}
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            {title}
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                            {isAvatarLoading ? (
                                <Skeleton variant="circular">
                                    <Avatar
                                        src={avatar && avatar}
                                        onLoad={() => setIsAvatarLoading(false)}
                                    />
                                </Skeleton>
                            ) : (
                                <Grow in={!isAvatarLoading}>
                                    <Avatar
                                        src={avatar && avatar}
                                        sx={(theme) => ({
                                            border: `2px solid ${theme.palette.tertiary.main}`,
                                        })}
                                    />
                                </Grow>
                            )}

                            <Stack
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                sx={(theme) => ({
                                    color: theme.palette.secondary.main,
                                })}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    sx={(theme) => ({
                                        color: theme.palette.tertiary.main,
                                    })}
                                >
                                    By {author}
                                </Typography>
                                <Typography variant="body2">{date}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </BlogButton>
            </Grow>
        );
    });
}
