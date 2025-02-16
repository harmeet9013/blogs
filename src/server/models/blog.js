import { Schema, Types, models, model } from "mongoose";

const blogSchema = new Schema(
    {
        title: { type: String, required: true },
        key: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: Types.ObjectId, required: false, ref: "user" },
        revision: { type: Number, required: true, default: 1 },
        image: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

export default models.blog || model("blog", blogSchema);
