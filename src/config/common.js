export const NEXT_PUBLIC_FILE_SIZE_LIMIT =
    process.env.NEXT_PUBLIC_FILE_SIZE_LIMIT;
export const API_URL = process.env.API_URL;
export const DATABSE_URL = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const MAX_FILE_SIZE =
    parseInt(NEXT_PUBLIC_FILE_SIZE_LIMIT) * 1024 * 1024;

export const DESIGN_CONFIG = {
    HEADER: 13,
    NAV: 30,
};

export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const BLOG_LISTING_TABLE_HEAD = [
    {
        label: "index",
    },
    {
        label: "title",
    },
    {
        label: "author",
    },
    {
        label: "actions",
    },
];

export const BLOG_LISTING_TAB_HEAD = [
    {
        label: "published",
        value: "published",
    },
    {
        label: "un-published",
        value: "unpublished",
    },
];

export const STATIC_MEDIA_TYPES = [
    {
        value: "image",
        label: "Image",
    },
    {
        value: "file",
        label: "File",
    },
    {
        value: "audio",
        label: "Audio",
    },
    {
        value: "other",
        label: "Other",
    },
];

export const COMMON_ASSETS = {
    placeholder:
        process.env.NEXT_PUBLIC_API_URL +
        "/media/2025/February/1740055183671_1735104686843-placeholder-image.jpg",
};
