import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connect } from "mongoose";

import blogsRoute from "./routes/blogs-route.js";
import usersRoute from "./routes/users-route.js";
import HttpError from "./models/http-error.js";

import { KEY } from "./credentials.js";
const PORT = 5000;

const app = Express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/blogs", blogsRoute);
app.use("/api/users", usersRoute);

app.use((req, res, next) => {
    const Error = new HttpError("Route not found!", 404);
    throw Error;
});

//special middleware function, executed when error is passed
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    } else {
        res.status(error.code || 500).json({
            error: error.message || "Something went horribly wrong!",
        });
    }
});

console.log("Trying to connect to database...");
connect(KEY)
    .then(() => {
        console.log("Connected to database! Port: " + PORT);
        app.listen(PORT);
        // module.exports = serverlessHttp(app);
    })
    .catch((error) => {
        // return next(new HttpError("Could not connect to the database!", 500));
        console.log(error);
    });
