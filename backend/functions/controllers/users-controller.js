const HttpError = require("../models/http-error");

const User = require("../models/user.js");

const loginUser = async (req, res, next) => {
    const { email, password } = req.body.inputs;

    let userExists;

    try {
        userExists = await User.findOne({ email });
    } catch (error) {
        return next(new HttpError("Could not connect to database"), 500);
    }

    if (!userExists || userExists.password !== password) {
        return next(new HttpError("Invalid Credentials"), 444);
    }

    res.status(200).json({ id: userExists._id });
};

const createUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    let userExists;
    try {
        userExists = await User.findOne({ email: email });
    } catch (error) {
        return next(
            new HttpError("Could not connect to the database. Try again later"),
            500
        );
    }

    if (userExists) {
        return next(new HttpError("User already exists"), 400);
    }

    let newUser = new User({
        name,
        email,
        password,
        avatar: "",
        blogs: [],
    });

    try {
        await newUser.save();
    } catch (error) {
        return next(new HttpError("COuld not create a new user."), 500);
    }

    res.status(200).json({ message: "User Created!" });
};

exports.loginUser = loginUser;
exports.createUser = createUser;
