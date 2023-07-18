import { default as mongoose } from "mongoose";
import HttpError from "../models/http-error.js";

import Blog from "../models/blog.js";
import User from "../models/user.js";

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const allBlogs = async (req, res, next) => {
    let blogs;

    try {
        blogs = await Blog.find();
    } catch (error) {
        return next(
            new HttpError("Could not fetch blogs from the Database!"),
            500
        );
    }

    res.status(200).json(blogs);
};

export const createBlog = async (req, res, next) => {
    const { title, content, userID } = req.body;

    const date = new Date();
    const currentDate =
        date.getDate() +
        " " +
        month[date.getMonth()] +
        " " +
        date.getFullYear();

    let loggedUser;
    try {
        loggedUser = await User.findById(userID);
    } catch (error) {
        return next(new HttpError("Invalid Request"), 500);
    }

    const newBlog = new Blog({
        title,
        content,
        author: loggedUser.name,
        authorID: loggedUser._id,
        date: currentDate,
        image: "https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg",
        edited: false,
    });

    try {
        // Create a new session
        const session = await mongoose.startSession();
        // start transaction
        session.startTransaction();
        // save blog
        await newBlog.save({ session });
        // push blog id to user
        loggedUser.blogs.push(newBlog);
        // save user information
        await loggedUser.save({ session });
        // finalize transactions and commit them
        await session.commitTransaction();
    } catch (error) {
        console.log(error);
        return next(new HttpError("Could not create blog", 500));
    }
    res.status(201).json({ message: "Blog has been created!" });
};

export const singleBlog = async (req, res, next) => {
    //catch the blog id from the url
    const blogID = req.params.blogID;
    let blog;

    try {
        // find the blog from the database
        blog = await Blog.findById(blogID);
    } catch (error) {
        return next(
            new HttpError("Bad request. Improper requests maybe?", 500)
        );
    }

    if (!blog) {
        return next(new HttpError("The requested blog does not exist!"), 404);
    }

    // send blog back as a response as a json
    res.json(blog.toObject({ getters: true }));
};

export const editBlog = async (req, res, next) => {
    const { title, content } = req.body;
    const blogID = req.params.blogID;

    let blog;

    try {
        blog = await Blog.findById(blogID);
    } catch (error) {
        return next(new HttpError("Could not fetch blog"), 404);
    }

    blog.title = title;
    blog.content = content;
    blog.edited = true;

    try {
        await blog.save();
    } catch (error) {
        return next(new HttpError("Could not update blog"), 500);
    }

    res.status(200).json({ message: "Blog was edited!" });
};

export const deleteBlog = async (req, res, next) => {
    const blogID = req.params.blogID;
    const { userID } = req.body;
    let blog;

    // Find the blog with reference to the user
    try {
        blog = await Blog.findById(blogID).populate("authorID");
    } catch (error) {
        return next(new HttpError("Could not fetch the blog"), 404);
    }

    //find the logged in user
    //if the userID does not exist, the blog is not deleted
    //this is present to only authorize registered users from deleting blogs
    let loggedUser;
    try {
        loggedUser = await User.findById(userID);
    } catch (error) {
        return next(new HttpError("Invalid login. Please log-in again."), 500);
    }

    //if the blog does not exist
    if (!blog) {
        return next(new HttpError("The blog does not exist"), 404);
    }

    // session transaction starts here
    try {
        const session = await mongoose.startSession();
        session.startTransaction();

        // Delete blog
        await blog.deleteOne({ session });

        // Pull id from the array
        await blog.authorID.blogs.pull(blog);

        // save because its a document
        await blog.authorID.save({ session });

        await session.commitTransaction();
    } catch (error) {
        return next(new HttpError("Could not delete the blog"), 500);
    }

    res.status(200).json({ message: "Blog was deleted!" });
};
