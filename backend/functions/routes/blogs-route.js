const Express = require("express");
const router = Express.Router();
const blogsController = require("../controllers/blogs-controller.js");

router.get("/", blogsController.allBlogs);
router.post("/create", blogsController.createBlog);
router.get("/:blogID", blogsController.singleBlog);
router.patch("/edit/:blogID", blogsController.editBlog);
router.delete("/delete/:blogID", blogsController.deleteBlog);

module.exports = router;
