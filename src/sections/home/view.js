"use client";

import { useCallback, useEffect } from "react";
//
import { useTheme } from "@emotion/react";
import { Chip, Stack, Typography } from "@mui/material";
//
import { useBoolean } from "@/hooks";
import { endpoints } from "@/lib/axios";
import { useGlobalContext } from "@/context";
//
import blogsService from "@/api/blogs-service";
//
import { LoadingScreen } from "@/components/loading-screen";
//
import RenderBlogs from "./render-blogs";

export default function HomeView() {
    const theme = useTheme();

    const isError = useBoolean(false);
    const isLoading = useBoolean(true);
    const { blogs, setBlogs } = useGlobalContext();

    const fetchAllBlogs = useCallback(async () => {
        isLoading?.onTrue();
        try {
            let url = endpoints.blogs.all_blogs_path;
            const response = await blogsService.fetchAllSingleBlog(url);

            setBlogs(response.data);
        } catch (error) {
            isError?.onTrue();
            console.log("PROMISE ERROR =>", error);
        } finally {
            isLoading?.onFalse();
        }
    });

    useEffect(() => {
        if (!blogs?.length) {
            fetchAllBlogs();
        } else {
            isLoading.onFalse();
        }
    }, [blogs]);

    return (
        <Stack
            spacing={4}
            pt={15}
            pb={10}
            justifyContent="center"
            alignItems="center"
        >
            {isLoading?.value ? (
                <LoadingScreen text="Fetching blogs" />
            ) : isError?.value ? (
                <Chip
                    color="error"
                    label="Error fetching blogs"
                    sx={{
                        ...theme.typography.h4,
                        py: 4,
                        px: 4,
                        borderRadius: 3,
                    }}
                />
            ) : (
                <RenderBlogs blogs={blogs} />
            )}
        </Stack>
    );
}
