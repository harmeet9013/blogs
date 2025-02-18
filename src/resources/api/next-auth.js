import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
//
import { loginApi } from "./services";
import { InvalidError } from "../libs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async ({ email, password }) => {
                const response = await loginApi({ email, password });

                if (response?.status) {
                    return response?.data;
                }

                return { error: response?.message || "invalid user" };
            },
        }),
    ],
    callbacks: {
        signIn: async ({ user }) => {
            if (user?.error) {
                throw new InvalidError(user?.error);
            }

            return user;
        },
    },
});
