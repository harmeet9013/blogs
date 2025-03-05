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
