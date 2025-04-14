import { Router } from "express";
import SaldoController from "../controllers/saldoController";
import authMiddleware from "../middleware/auth.middleware";

const saldoRouter = Router();

/**
 * @swagger
 * /saldo/{matricula}:
 *   get:
 *     summary: Consulta o saldo de um usuário
 *     tags: [Saldo]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         schema:
 *           type: string
 *         description: Matrícula do usuário
 *     responses:
 *       200:
 *         description: Saldo consultado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 matricula:
 *                   type: string
 *                 saldo:
 *                   type: number
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro ao consultar saldo
 */
saldoRouter.get("/:matricula", authMiddleware, SaldoController.consultarSaldo);

/**
 * @swagger
 * /saldo/{matricula}:
 *   put:
 *     summary: Atualiza o saldo de um usuário
 *     tags: [Saldo]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         schema:
 *           type: string
 *         description: Matrícula do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valor:
 *                 type: number
 *                 description: Valor a ser adicionado/subtraído do saldo
 *     responses:
 *       200:
 *         description: Saldo atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Saldo atualizado com sucesso
 *                 novoSaldo:
 *                   type: number
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro ao atualizar saldo
 */
saldoRouter.put("/:matricula", authMiddleware, SaldoController.atualizarSaldo);

export default saldoRouter;