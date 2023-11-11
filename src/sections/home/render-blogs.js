"use client";

import PropTypes from "prop-types";
import {
    Avatar,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grow,
    Stack,
    Typography,
} from "@mui/material";
import { BlogButton } from "./styled/home-styled";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function RenderBlogs({ blogs }) {
    const router = useRouter();

    const handleClick = useCallback((id) => {
        router.push(`/blogs/${id}`);
    });

    return blogs?.map((blog) => {
        const { _id, title, image, author, date, avatar } = blog;

        return (
            <Grow in={true} key={_id} timeout={{ enter: 500 }}>
                <BlogButton variant="outlined" onClick={() => handleClick(_id)}>
                    <CardActionArea>
                        <Stack component={CardContent} spacing={2}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={image}
                                sx={{
                                    borderRadius: 10,
                                }}
                            />
                            <Stack spacing={2} component={Container}>
                                <Typography
                                    textAlign="left"
                                    fontWeight={600}
                                    variant="h4"
                                    color="primary"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Grow in={true}>
                                        <Avatar
                                            src={avatar}
                                            sx={(theme) => ({
                                                border: `2px solid ${theme.palette.tertiary.main}`,
                                            })}
                                        />
                                    </Grow>

                                    <Stack
                                        direction="column"
                                        alignItems="flex-start"
                                        justifyContent="flex-start"
                                        color="secondary.main"
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={600}
                                            color="tertiary.main"
                                        >
                                            By {author}
                                        </Typography>
                                        <Typography variant="body2">
                                            {date}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardActionArea>
                </BlogButton>
            </Grow>
        );
    });
}

RenderBlogs.propTypes = {
    blogs: PropTypes.array,
};
