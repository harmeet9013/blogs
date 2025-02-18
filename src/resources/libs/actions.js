"use server";

import { auth, signIn } from "../api";
import { InvalidError } from "./helpers";

export const signInAPI = async (formData = {}) => {
    try {
        await signIn("credentials", {
            ...formData,
            redirect: false,
        });

        const userObject = await auth();

        return { status: true, message: "User logged in", user: userObject };
    } catch (error) {
        if (error instanceof InvalidError) {
            return {
                error: error,
                message: error?.message,
                status: false,
            };
        }

        throw error;
    }
};
