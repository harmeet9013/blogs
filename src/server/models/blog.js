import { Schema, Types, model, models } from "mongoose";

const blogModel = new Schema(
    {
        title: { type: String, required: true },
        content: { type: Object, required: true },
        author: { type: String, required: true },
        authorID: { type: Types.ObjectId, required: true, ref: "User" },
        date: { type: String, required: true },
        image: { type: String, required: true },
        edited: { type: Boolean, required: true },
    },
    { timestamps: true }
);

export default models.Blog || model("Blog", blogModel);
