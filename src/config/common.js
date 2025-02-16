export const {
    MONGO_URI: DATABSE_URL,
    JWT_SECRET,
    API_URL,
    NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_FILE_SIZE_LIMIT,
} = process.env;

export const MAX_FILE_SIZE =
    parseInt(NEXT_PUBLIC_FILE_SIZE_LIMIT) * 1024 * 1024;

export const DESIGN_CONFIG = {
    HEADER: 13,
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
