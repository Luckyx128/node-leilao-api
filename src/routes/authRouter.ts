import { Router } from "express";
import authController from "../controllers/authController";
import AuthMiddleware from "../middleware/auth.middleware";

const authRouter = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login na api
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:  # Campos obrigatórios
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Autentica o usuario
 *         content:
 *           application/json:
 *             example:
 *               {username: 123456, password: 123456}
 */
authRouter.post("/login", authController.login);
/**
 * @swagger
 * /auth/password:
 *   put:
 *     summary: updateLogin na api
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:  # Campos obrigatórios
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Usuario pode mudar a prorpia senha
 *         content:
 *           application/json:
 *             example:
 *               {username: 123456, password: 123456}
 */
authRouter.put("/password",AuthMiddleware, authController.updateLogin);
/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Resete a senha quando esquecida
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:  # Campos obrigatórios
 *               - username
 *             properties:
 *               username:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reseta a senha do usuario enviado no body
 *         content:
 *           application/json:
 *             example:
 *               {username: 123456}
 */
authRouter.post("/reset-password", authController.register);

export default authRouter;
