"use client";

import blogsService from "@/api/blogs-service";
import { useGlobalContext } from "@/context";
import { endpoints } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import RenderBlogContent from "./blog-content";
import RenderBlogActions from "./blog-actions";
import { Stack } from "@mui/material";
import { useBoolean } from "@/hooks";
import { LoadingScreen } from "@/components/loading-screen";

export default function BlogView({ id }) {
    const isFetching = useBoolean(true);
    const { showLoader, setShowLoader } = useGlobalContext();

    console.log(isFetching);

    const [blog, setBlog] = useState(null);

    const fetchBlog = useCallback(async () => {
        isFetching.onTrue();
        try {
            const response = await blogsService.fetchAllSingleBlog(
                endpoints.blogs.single_blog_path(id)
            );
            setBlog(response.data);
        } catch (error) {
            console.log("PROMISE ERROR=>", error);
        } finally {
            isFetching.onFalse();
        }
    }, [id]);

    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        <Stack py={!blog ? 10 : 0}>
            {isFetching.value ? (
                <LoadingScreen text="Fetching blog" />
            ) : (
                <>
                    <RenderBlogContent blog={blog} />
                    <RenderBlogActions />
                </>
            )}
        </Stack>
    );
}
