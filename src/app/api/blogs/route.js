import {
    connectMongoDB,
    createBlog,
    errorResponse,
    getBlogs,
    updateBlog,
} from "@/server";

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

export const PUT = async (req) => {
    let database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("database not connected");
    }

    return await updateBlog(req);
};
