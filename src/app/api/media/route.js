import {
    getMedia,
    errorResponse,
    connectMongoDB,
    updateSingleMedia,
} from "@/server";

export const GET = async (req) => {
    const database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("Database not connected");
    }

    return await getMedia(req);
};

export async function PUT(req) {
    const database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("Database not connected");
    }

    return await updateSingleMedia(req);
}
