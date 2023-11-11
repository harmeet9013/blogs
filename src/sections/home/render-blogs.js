"use client";

import PropTypes from "prop-types";
import { Avatar, Container, Grow, Stack, Typography } from "@mui/material";
import { BlogButton, BlogsImageBox } from "./styled/home-styled";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { endpoints } from "@/lib/axios";

export default function RenderBlogs({ blogs }) {
    const router = useRouter();

    const handleClick = useCallback((id) => {
        const path = endpoints.blogs.single_blog_path(id);
        router.push(path);
    });

    return blogs?.map((blog, index) => {
        const { _id, title, image, author, date, avatar } = blog;

        return (
            <Grow in={true} key={_id} timeout={{ enter: index * 1000 }}>
                <BlogButton onClick={() => handleClick(_id)}>
                    <BlogsImageBox component="img" src={image} alt={title} />

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
                        <Stack spacing={2} direction="row" alignItems="center">
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
                                <Typography variant="body2">{date}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </BlogButton>
            </Grow>
        );
    });
}

RenderBlogs.propTypes = {
    blogs: PropTypes.array,
};
