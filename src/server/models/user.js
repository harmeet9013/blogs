import { Schema, Types, model, models } from "mongoose";

const userModel = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minlength: 8 },
        avatar: { type: String, required: false },
        blogs: [{ type: Types.ObjectId, required: true, ref: "Blog" }],
    },
    { timestamps: true }
);

export default models.User || model("User", userModel);
