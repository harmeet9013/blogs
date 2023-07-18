import { Router } from "express";
const router = Router();
import { loginUser, createUser } from "../controllers/users-controller.js";

router.post("/login", loginUser);
router.post("/signup", createUser);

export default router;
