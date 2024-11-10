import "dotenv/config";
import axios from "axios";
import Cookies from "js-cookie";

const API_URl = process.env.NEXT_PUBLIC_HOST_API;

const axiosInstance = axios.create({
    baseURL: API_URl,
});

axiosInstance.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    const userID = Cookies.get("userID");

    if (token && userID) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.headers["userID"] = userID;
    }

    return config;
});

export default axiosInstance;

export const endpoints = {
    blogs: "/api/blogs",
    users: {
        login_path: "/users/login",
        verify_token_path: "/users/verify",
    },
};
