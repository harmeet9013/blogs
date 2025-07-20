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

                if (response?.error) {
                    return {
                        error:
                            response?.error ||
                            response?.message ||
                            "invalid user",
                    };
                }

                return response?.data?.data;
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
        jwt: async ({ token, user, trigger, session }) => {
            if (user) {
                token = { ...user };
            }

            if (trigger === "update") {
                return {
                    ...token,
                    ...session.user,
                };
            }

            return token;
        },
        session: async ({ session, token }) => {
            session.user = token;

            return session;
        },
    },
});
