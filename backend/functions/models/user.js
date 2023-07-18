import { Schema, Types, model } from "mongoose";
import validator from "mongoose-unique-validator";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    avatar: { type: String, required: false },
    blogs: [{ type: Types.ObjectId, required: true, ref: "Blog" }],
});

userSchema.plugin(validator);

export default model("User", userSchema);
