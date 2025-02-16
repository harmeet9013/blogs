import { successResponse } from "@/server";

export const GET = async (req) => {
    return successResponse("hello world");
};
