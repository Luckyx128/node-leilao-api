import { Router } from "express";
import LancesController from "../controllers/lancesController";
import AuthMiddleware from "../middleware/auth.middleware";

const lancesRouter = Router()

/**
 * @swagger
 * /lances/fazerlance/{id_leilao}:
 *   post:
 *     summary: Realiza um lance em um leilão específico
 *     tags: [Lances]
 *     parameters:
 *       - in: path
 *         name: id_leilao
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do leilão
 *     responses:
 *       200:
 *         description: Lance realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valor:
 *                   type: integer
 *                 username:
 *                   type: string
 *       500:
 *         description: Erro no servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro no banco de dados
 */
lancesRouter.post("/fazerlance/:id_leilao",AuthMiddleware, LancesController.realizarLance)


export default lancesRouter;