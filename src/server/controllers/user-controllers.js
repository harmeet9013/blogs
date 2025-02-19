import jwt from "jsonwebtoken";
//
import { JWT_SECRET } from "@/config";
//
import { userModel } from "../models";
import { errorResponse, getHeader, successResponse, uid } from "../utlities";
import { loginSchema, registerUserSchema, userTokenSchema } from "../schemas";

export const verifyToken = async (req) => {
    try {
        const raw_token = await getHeader("Authorization");

        await userTokenSchema({ token: raw_token });

        const token = raw_token?.split("Bearer ")[1];

        const response = jwt.verify(token, JWT_SECRET);

        return successResponse("valid token", response);
    } catch (error) {
        return errorResponse(error?.message || "unexpected error");
    }
};

export const loginUser = async (req) => {
    try {
        const request_body = await req.json();

        await loginSchema(request_body);

        const { email, password } = request_body;

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("incorrect email / password");
        }

        const { status, isMatch } = await user.comparePassword(password);

        if (!status) {
            throw new Error("user model error");
        }

        if (!isMatch) {
            throw new Error("incorrect email / password");
        }

        const response = await user.generateToken();

        if (response?.error) {
            throw new Error(response?.message);
        }

        return successResponse("logged user", { ...response });
    } catch (error) {
        return errorResponse(error?.message || "unexpected error");
    }
};

export const registerUser = async (req) => {
    try {
        const request_body = await req.json();

        await registerUserSchema(request_body);

        const { name, email, password } = request_body;

        const user = new userModel({
            name,
            email,
            password,
            key: uid.rnd(),
        });

        await user.save();

        delete user.password;
        delete user._id;
        delete user.__v;

        return successResponse("user logged in", user);
    } catch (error) {
        return errorResponse(
            error?.message?.includes("duplicate")
                ? "user already exists"
                : error?.message || "unexpected error"
        );
    }
};
