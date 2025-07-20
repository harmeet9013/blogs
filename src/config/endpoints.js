const PREFIX = "/api";

export const endpoints = {
    blogs: {
        root: PREFIX + "/blogs",
    },
    users: {
        root: PREFIX + "/users",
        login: PREFIX + "/users" + "/login",
        verify: PREFIX + "/users" + "/me",
        register: PREFIX + "/users" + "/register",
        verify_email: PREFIX + "/users" + "/verify-email",
        forget_password: PREFIX + "/users" + "/forgot-password",
    },
    media: {
        root: PREFIX + "/media",
        upload: PREFIX + "/media" + "/upload",
    },
};
