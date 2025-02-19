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
            create: generateURL([GLOBAL.ADMIN, "create", "blog"]),
        },
    },
    users: {
        login: generateURL([GLOBAL.ADMIN, "login"]),
        register: generateURL([GLOBAL.ADMIN, "register"]),
    },
};
