"use client";

import blogsService from "@/api/blogs-service";
import { useGlobalContext } from "@/context";
import { endpoints } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import RenderBlogContent from "./blog-content";
import RenderBlogActions from "./blog-actions";

export default function BlogView({ id }) {
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
            <>
                <RenderBlogContent blog={blog} />
                <RenderBlogActions />
            </>
        )
    );
}
