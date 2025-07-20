import { Schema, Types, models, model } from "mongoose";

const schema = new Schema(
    {
        title: { type: String, required: true },
        key: { type: String, required: true },
        content: { type: String, required: true },
        published: { type: Boolean, required: true, default: false },
        author: { type: Types.ObjectId, required: false, ref: "user" },
        revision: { type: Number, required: true, default: 1 },
        media: { ref: "media", type: Types.ObjectId, required: false },
    },
    {
        timestamps: true,
    }
);

export default models.blog || model("blog", schema);
