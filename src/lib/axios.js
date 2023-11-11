import "dotenv/config";
import axios from "axios";

const API_URl = process.env.NEXT_PUBLIC_HOST_API;

export const api = axios.create({
    baseURL: API_URl,
});

export const endpoints = {
    blogs: {
        all_blogs_path: "/blogs/allBlogs",
        single_blog_path: (id) => `/blogs/${id}`,
    },
};
