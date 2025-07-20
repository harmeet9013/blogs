import {
    errorResponse,
    connectMongoDB,
    updateSingleMedia,
    uploadSingleMedia,
} from "@/server";

export async function POST(req) {
    const database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("Database not connected");
    }

    return await uploadSingleMedia(req);
}
