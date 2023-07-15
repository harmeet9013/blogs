const Express = require("express");
const router = Express.Router();
const usersController = require("../controllers/users-controller.js");

router.post("/login", usersController.loginUser);
router.post("/signup", usersController.createUser);

module.exports = router;
