const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    authorID: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    date: { type: String, required: true },
    image: { type: String, required: true },
    edited: { type: Boolean, required: true },
});

module.exports = mongoose.model("Blog", blogSchema);
