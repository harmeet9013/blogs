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
    users: {
        login: generateURL([GLOBAL.ADMIN, "login"]),
    },
};
