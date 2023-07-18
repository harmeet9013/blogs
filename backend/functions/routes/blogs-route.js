import { Router } from "express";
const router = Router();
import {
    allBlogs,
    createBlog,
    singleBlog,
    editBlog,
    deleteBlog,
} from "../controllers/blogs-controller.js";

router.get("/", allBlogs);
router.post("/create", createBlog);
router.get("/:blogID", singleBlog);
router.patch("/edit/:blogID", editBlog);
router.delete("/delete/:blogID", deleteBlog);

export default router;
