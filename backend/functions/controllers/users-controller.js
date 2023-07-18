import HttpError from "../models/http-error.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

import User from "../models/user.js";
import { tokenKEY } from "../credentials.js";

const errorLogin = new HttpError("Could not login", 500);

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body.inputs;

    let currentUser;
    let userValidation = false;
    let token;

    // find user in the database using email
    try {
        currentUser = await User.findOne({ email });
    } catch (error) {
        return next(errorLogin);
    }

    // if the user returned is empty meaning user does not exist
    if (!currentUser) {
        return next(new HttpError("Invalid Credentials"), 444);
    }

    // compare or validate the password from the user to the database
    try {
        userValidation = await bcrypt.compare(password, currentUser.password);
    } catch (error) {
        return next(errorLogin);
    }

    //throw error if user is not valid
    if (!userValidation) {
        return next(new HttpError("Could not validate user.", 404));
    }

    try {
        token = JWT.sign(
            { userID: currentUser._id, name: currentUser.name },
            tokenKEY,
            { expiresIn: "1h" }
        );
    } catch (error) {
        return next(errorLogin);
    }

    res.status(200).json({
        userID: currentUser._id,
        name: currentUser.name,
        token,
    });
};

export const createUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    let userExists;
    let hashPassword;

    // check if the user already exists in the database
    try {
        userExists = await User.findOne({ email: email });
    } catch (error) {
        return next(
            new HttpError("Could not connect to the database. Try again later"),
            500
        );
    }

    //throw error if the user exists
    if (userExists) {
        return next(new HttpError("User already exists"), 400);
    }

    //create a hashed password
    try {
        hashPassword = await bcrypt.hash(password, 12);
    } catch (error) {
        return next(new HttpError("Could not create a user", 500));
    }

    //create the new user locally
    let newUser = new User({
        name,
        email,
        password: hashPassword,
        avatar: "",
        blogs: [],
    });

    //save the user in the database
    try {
        await newUser.save();
    } catch (error) {
        return next(new HttpError("COuld not create a new user."), 500);
    }

    //return +ve if all went well!
    res.status(200).json({ message: "User Created!" });
};
