import { connectMongoDB, errorResponse, registerUser } from "@/server";

export const POST = async (req) => {
    const database_connected = await connectMongoDB();

    if (!database_connected) {
        return errorResponse("database not connected");
    }

    return await registerUser(req);
};
