import { connectMongoDB, errorResponse, verifyToken } from "@/server";

export const GET = async (req) => {
    const database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("database not connected");
    }

    return await verifyToken(req);
};
