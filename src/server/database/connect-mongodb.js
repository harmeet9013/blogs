import mongoose from "mongoose";
//
import { DATABSE_URL } from "@/config";

export const connectMongoDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return true;
        }

        await mongoose.connect(DATABSE_URL);

        return true;
    } catch (error) {
        console.log("DB ERROR:: \n", error?.message, "\n\n");
        return false;
    }
};
