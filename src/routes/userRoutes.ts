import * as user from "../controllers/authController";
import { Router } from "express";
// import { protect } from "../middlewares/authMiddleware";

const router = Router();
router.post("/signup", user.createUser);

router.post("/login", user.loginUser)



export default router