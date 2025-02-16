import { errorResponse, connectMongoDB, getMedia } from "@/server";

export const GET = async (req) => {
    const database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("Database not connected");
    }

    return await getMedia(req);
};
