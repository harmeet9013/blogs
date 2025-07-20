import axios from "axios";
//
import { API_URL, endpoints, NEXT_PUBLIC_API_URL } from "@/config";
//
import { GET_REQUEST, POST_REQUEST } from "./requests";

export const axiosInstance = axios.create({
    baseURL: API_URL || NEXT_PUBLIC_API_URL,
});

export const fetchAllBlogs = async (
    blog_id = null,
    search_term = null,
    published = true,
    pagination = {}
) => {
    let state = {
        loading: true,
        data: null,
        error: false,
    };

    let params = {
        ...(blog_id
            ? {
                  blog: blog_id,
              }
            : {}),
        published: published,
        ...(search_term
            ? {
                  search: search_term?.trim()?.toLowerCase(),
              }
            : {}),
        ...pagination,
    };

    const response = await GET_REQUEST(endpoints["blogs"]["root"], params);

    if (response?.status) {
        state.data = response;
    } else {
        state.error = response?.message;
    }

    state.loading = false;

    return state;
};

export const loginApi = async (data = {}, params = {}) => {
    let state = {
        loading: true,
        data: null,
        error: null,
    };

    const response = await POST_REQUEST(
        endpoints["users"]["login"],
        data,
        params
    );

    if (response?.status) {
        state.data = response;
    } else {
        state.error = response?.message;
    }

    state.loading = false;

    return state;
};

export const registerApi = async (data = {}, params = {}) => {
    let state = {
        loading: true,
        data: null,
        error: null,
    };

    const response = await POST_REQUEST(
        endpoints["users"]["register"],
        data,
        params
    );

    if (response?.status) {
        state.data = response;
    } else {
        state.error = response?.message;
    }

    state.loading = false;

    return state;
};

export const verifyEmailApi = async (params = {}) => {
    let state = {
        loading: true,
        data: null,
        error: null,
    };

    const response = await GET_REQUEST(
        endpoints["users"]["verify_email"],
        params
    );

    if (response?.status) {
        state.data = response;
    } else {
        state.error = response?.message;
    }

    state.loading = false;

    return state;
};

export const forgetPasswordRequestApi = async (data = null, params = {}) => {
    let state = {
        loading: true,
        data: null,
        error: null,
    };

    const response = await (data ? POST_REQUEST : GET_REQUEST)(
        endpoints["users"]["forget_password"],
        data || params,
        data ? params : null
    );

    if (response?.status) {
        state.data = response;
    } else {
        state.error = response?.message;
    }

    state.loading = false;

    return state;
};
