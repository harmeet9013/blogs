import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema, models, model } from "mongoose";
//
import { JWT_SECRET } from "@/config";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        key: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        contact: { type: String, required: false },
        image: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }

        const hashed = await bcrypt.hash(this.password, 10);

        this.password = hashed;

        next();
    } catch (error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function (password) {
    try {
        const isMatch = await bcrypt.compare(password, this.password);

        return { status: true, isMatch };
    } catch (error) {
        return { status: false };
    }
};

userSchema.methods.generateToken = async function () {
    try {
        let payload = {
            email: this.email,
            name: this.name,
            key: this.key,
        };
        const token = jwt.sign({ ...payload }, JWT_SECRET, { expiresIn: "7d" });

        return { ...payload, token };
    } catch (error) {
        return { error: error, message: error?.message || "unexpected error" };
    }
};

export default models.user || model("user", userSchema);
