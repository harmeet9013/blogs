import { connectMongoDB, createBlog, errorResponse, getBlogs } from "@/server";

export const GET = async (req) => {
    let database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("database not connected");
    }

    return await getBlogs(req);
};

export const POST = async (req) => {
    let database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("database not connected");
    }

    return await createBlog(req);
};
