const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    avatar: { type: String, required: false },
    blogs: [{ type: mongoose.Types.ObjectId, required: true, ref: "Blog" }],
});

userSchema.plugin(validator);

module.exports = mongoose.model("User", userSchema);
