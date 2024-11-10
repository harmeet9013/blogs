import mongoose from "mongoose";
//
import { DB_URI } from "@/config";

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        return { status: true };
    } catch (error) {
        console.log(error);
        return { status: false };
    }
};
