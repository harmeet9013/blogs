"use client";

import blogsService from "@/api/blogs-service";
import { useGlobalContext } from "@/context";
import { endpoints } from "@/lib/axios";
import { Stack } from "@mui/material";
import { useCallback, useEffect } from "react";
import RenderBlogs from "./render-blogs";

export default function HomeView() {
    const { blogs, setBlogs, showLoader, setShowLoader } = useGlobalContext();

    const fetchAllBlogs = useCallback(async () => {
        setShowLoader(true);
        try {
            let url = endpoints.blogs.all_blogs_path;
            const response = await blogsService.fetchAllSingleBlog(url);

            setBlogs(response.data);
        } catch (error) {
            console.log("PROMISE ERROR =>", error);
        } finally {
            setShowLoader(false);
        }
    });

    useEffect(() => {
        fetchAllBlogs();
    }, []);

    return (
        <Stack spacing={4} py={10} justifyContent="center" alignItems="center">
            {!showLoader && <RenderBlogs blogs={blogs} />}
        </Stack>
    );
}
