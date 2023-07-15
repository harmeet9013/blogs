const Express = require("express");
const bodyParser = require("body-parser");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const mongoose = require("mongoose");
const app = Express();

const blogsRoute = require("./routes/blogs-route");
const usersRoute = require("./routes/users-route.js");
const HttpError = require("./models/http-error.js");
const { KEY } = require("./credentials");
const PORT = 5000;

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

mongoose
    .connect(KEY)
    .then(() => {
        console.log("Connected to database! Port: " + PORT);
        app.listen(PORT);
        // module.exports = serverlessHttp(app);
    })
    .catch((error) => {
        // return next(new HttpError("Could not connect to the database!", 500));
        console.log(error);
    });
