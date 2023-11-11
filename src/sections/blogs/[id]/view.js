"use client";

import blogsService from "@/api/blogs-service";
import { useGlobalContext } from "@/context";
import { endpoints } from "@/lib/axios";
import { useSettingsContext } from "@/settings/context";
import { Avatar, Container, Grow, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { BlogImageBox, BlogTitle } from "./styled/blog-styled";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

export default function BlogView({ id }) {
    const { isMobile } = useSettingsContext();
    const { showLoader, setShowLoader } = useGlobalContext();

    const [blog, setBlog] = useState(null);

    const fetchBlog = useCallback(async () => {
        setShowLoader(true);
        try {
            const response = await blogsService.fetchAllSingleBlog(
                endpoints.blogs.single_blog_path(id)
            );
            setBlog(response.data);
        } catch (error) {
            console.log("PROMISE ERROR=>", error);
        } finally {
            setShowLoader(false);
        }
    }, [id]);

    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        !showLoader &&
        blog && (
            <Grow in={true} timeout={{ enter: 500 }}>
                <Stack
                    direction="column"
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    component={Container}
                    py={15}
                    px={0}
                    width={isMobile ? "100%" : "50rem"}
                    sx={(theme) => ({
                        cursor: "default",
                        transition: theme.transitions.create(),
                    })}
                >
                    <Stack component={!isMobile && Container} spacing={4}>
                        <BlogTitle variant="h3" color="primary">
                            {blog.title}
                        </BlogTitle>

                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar
                                src={blog.avatar}
                                sx={(theme) => ({
                                    height: 60,
                                    width: 60,
                                    border: `2px solid ${theme.palette.tertiary.main}`,
                                })}
                            />

                            <Stack
                                direction="column"
                                spacing={0}
                                textAlign="left"
                                color="primary"
                            >
                                <Typography
                                    variant={isMobile ? "body1" : "h6"}
                                    fontWeight={600}
                                    color="tertiary.main"
                                >
                                    {blog.author}
                                </Typography>
                                <Typography
                                    variant={isMobile ? "body2" : "body1"}
                                >
                                    {blog.date}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        component={!isMobile && Container}
                        id="blog-container"
                    >
                        <BlogImageBox
                            component="img"
                            src={blog.image}
                            alt={blog.title}
                        />

                        <CKEditor
                            editor={BalloonEditor}
                            data={blog.content}
                            disabled={true}
                        />
                    </Stack>
                </Stack>
            </Grow>
        )
    );
}
