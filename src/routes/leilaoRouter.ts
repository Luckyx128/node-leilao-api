import {Router} from "express";
import leilaoController from "../controllers/leilaoController";
const leilaoRouter = Router()

/**
 * @swagger
 * /leilao/leiloes:
 *   get:
 *     summary: Lista todos os leilões
 *     tags: [Leilão]
 *     responses:
 *       200:
 *         description: Lista de leilões retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: sucesso
 *                 Leiloes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       lance_inicial:
 *                         type: integer
 *                       data_inicial:
 *                         type: string
 *                       matricula_arremate:
 *                         type: string
 *                       ultimo_lance:
 *                         type: integer
 *                       data_final:
 *                         type: string
 *                       leilao_status:
 *                         type: integer
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
leilaoRouter.get("/leiloes",leilaoController.listLeiloes)

/**
 * @swagger
 * /leilao/leilao/{id}:
 *   get:
 *     summary: Consulta um leilão específico
 *     tags: [Leilão]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do leilão
 *     responses:
 *       200:
 *         description: Leilão encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 lance_inicial:
 *                   type: integer
 *                 data_inicial:
 *                   type: string
 *                 matricula_arremate:
 *                   type: string
 *                 ultimo_lance:
 *                   type: integer
 *                 data_final:
 *                   type: string
 *                 leilao_status:
 *                   type: integer
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
leilaoRouter.get("/leilao/:id",leilaoController.consultLeilao)

export default leilaoRouter