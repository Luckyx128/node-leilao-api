import { Router } from "express";
import authController from "../controllers/authController";
const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.put("/login", authController.updateLogin);
authRouter.post("/register", authController.register);

export default authRouter;
