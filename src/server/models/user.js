import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        key: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        contact: { type: String, required: false },
        image: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

export default models.user || model("user", userSchema);
