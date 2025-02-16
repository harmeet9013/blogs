import { Schema, model, models } from "mongoose";
//
// import { STATIC_MEDIA_TYPES_VALUES } from "@/config";

const mediaSchema = new Schema(
    {
        name: { type: String, unique: true },
        key: { type: String, unique: true },
        path: { type: String, unique: true },
        size: { type: Number },
        type: {
            type: String,
            // enum: [...STATIC_MEDIA_TYPES_VALUES],
        },
    },
    { timestamps: true }
);

export default models.media || model("media", mediaSchema);
