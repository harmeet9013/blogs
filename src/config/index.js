export * from "./theme.js";
export * from "./paths.js";

export const { NEXT_PUBLIC_BASE_URL: SERVER_URL, MONGO_URL: DB_URI } =
    process.env;
