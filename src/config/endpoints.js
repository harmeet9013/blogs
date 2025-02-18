const PREFIX = "/api";

export const endpoints = {
    blogs: {
        root: PREFIX + "/blogs",
    },
    users: {
        root: PREFIX + "/user",
        login: PREFIX + "/user" + "/login",
    },
};
