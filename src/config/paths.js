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
    },
    users: {
        login: generateURL([GLOBAL.ADMIN, "login"]),
        register: generateURL([GLOBAL.ADMIN, "register"]),
    },
};
