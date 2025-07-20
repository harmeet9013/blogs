const GLOBAL = {
    ADMIN: "/admin",
    BLOGS: "/blogs",
};

const generateURL = (data = []) => {
    return data?.join("/");
};

export const PATHS = {
    blogs: {
        root: generateURL([GLOBAL.BLOGS]),
        single_blog: (key) => generateURL([GLOBAL.BLOGS, key]),
    },
    admin: {
        root: generateURL([GLOBAL.ADMIN, "dashboard"]),
        blogs: {
            root: generateURL([GLOBAL.ADMIN, "blogs"]),
            create_edit: (key) => generateURL([GLOBAL.ADMIN, "blogs", key]),
        },
        media: {
            root: generateURL([GLOBAL.ADMIN, "media"]),
        },
    },
    users: {},
    auth: {
        root: generateURL([GLOBAL.ADMIN, "auth"]),
        login: generateURL([GLOBAL.ADMIN, "auth", "login"]),
        register: generateURL([GLOBAL.ADMIN, "auth", "register"]),
        forget_password: generateURL([GLOBAL.ADMIN, "auth", "forget-password"]),
    },
};
