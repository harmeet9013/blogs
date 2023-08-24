import {
    Grow,
    Typography,
    Container,
    Stack,
    Avatar,
    CircularProgress,
    Skeleton,
} from "@mui/material";
import {
    BlogButton,
    BlogsImageBox,
    navigate,
} from "../../shared/CustomComponents";
import { useState } from "react";

export default function RenderBlogs(props) {
    return Object.keys(props.blogs).map((key) => {
        const { _id, title, image, author, date, avatar } = props.blogs[key];

        const [isImageLoading, setIsImageLoading] = useState(true);
        const [isAvatarLoading, setIsAvatarLoading] = useState(true);

        return (
            <Grow
                in={true}
                style={{
                    transitionDelay: key * 100,
                }}
            >
                <BlogButton
                    key={_id}
                    onClick={() => {
                        setTimeout(() => {
                            navigate(`/blog/${_id}`);
                            props.setShowLoading(false);
                        }, 200);
                        props.setShowLoading(true);
                    }}
                >
                    {isImageLoading && (
                        <CircularProgress color="icon" size={30} />
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
                            sx={{
                                textAlign: "left",
                                cursor: "pointer",
                            }}
                            fontWeight="600"
                            variant="h4"
                        >
                            {title}
                        </Typography>
                        <Stack spacing={2} direction="row">
                            {isAvatarLoading && (
                                <Skeleton variant="circular">
                                    <Avatar />
                                </Skeleton>
                            )}

                            <Grow in={true}>
                                <Avatar
                                    src={avatar && avatar}
                                    onLoad={() => setIsAvatarLoading(false)}
                                    sx={{
                                        display: isAvatarLoading && "none",
                                    }}
                                />
                            </Grow>
                            <Stack
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                sx={{
                                    color: (theme) =>
                                        theme.palette.text.disabled,
                                }}
                            >
                                <Typography variant="body2">
                                    By <strong>{author}</strong>
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
