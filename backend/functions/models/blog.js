import { Schema, Types, model } from "mongoose";

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: Object, required: true },
    author: { type: String, required: true },
    authorID: { type: Types.ObjectId, required: true, ref: "User" },
    date: { type: String, required: true },
    image: { type: String, required: true },
    edited: { type: Boolean, required: true },
});

export default model("Blog", blogSchema);
