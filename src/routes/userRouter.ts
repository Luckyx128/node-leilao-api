// routes/userRoutes.ts
import { Router } from "express";
import userController from "../controllers/userController";
import authMiddleware from "../middleware/auth.middleware";
const router = Router();

/**
 * @swagger
 * /user/:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   matricula:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   email:
 *                     type: string
 *                   saldo:
 *                     type: number
 *       500:
 *         description: Erro no servidor
 */
router.get("/", authMiddleware, userController.getUsers);

/**
 * @swagger
 * /user/{username}:
 *   get:
 *     summary: Obtém um usuário específico
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: Matrícula do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 name:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:username", authMiddleware, userController.getUserByUsername);

/**
 * @swagger
 * /user/:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", userController.createUser);

export default router;
