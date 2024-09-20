import * as user from "../controllers/userControllers";
import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";

const router = Router();
router.post("/signup", user.createUser);

router.post("/login", user.loginUser)



export default router