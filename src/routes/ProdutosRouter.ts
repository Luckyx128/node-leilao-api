import { Router } from "express";
import ProdutosController from "../controllers/ProdutosController";

class ProdutosRouter {
	private router: Router;
	private produtosController: typeof ProdutosController;

	constructor() {
		this.router = Router();
		this.produtosController = ProdutosController;
		this.initializeRoutes();
	}

	private initializeRoutes() {
		/**
		 * @swagger
		 * /produtos:
		 *   post:
		 *     summary: Cria um novo produto
		 *     tags: [Produto]
		 *     requestBody:
		 *       required: true
		 *       content:
		 *         application/json:
		 *           schema:
		 *             type: object
		 *             properties:
		 *               nome:
		 *                 type: string
		 *               descricao:
		 *                 type: string
		 *               valor:
		 *                 type: number
		 *               categoria:
		 *                 type: string
		 *               estoque:
		 *                 type: number
		 *               produto_imagem:
		 *                 type: string
		 *     responses:
		 *       201:
		 *         description: Produto criado com sucesso
		 *       400:
		 *         description: Erro na validação dos dados
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
		this.router.post("/", this.produtosController.createProduto);
        /**
         * @swagger
         * /produtos/{id}:
         *   put:
         *     summary: Atualiza um produto existente
         *     tags: [Produto]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: integer
         *         description: ID do produto a ser atualizado
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               nome:
         *                 type: string
         *               descricao:
         *                 type: string
         *               valor:
         *                 type: number
         *               categoria:
         *                 type: string
         *               estoque:
         *                 type: number
         *               produto_imagem:
         *                 type: string
         *     responses:
         *       200:
         *         description: Produto atualizado com sucesso
         *       400:
         *         description: Erro na validação dos dados
         *       404:
         *         description: Produto não encontrado
         */
		this.router.put("/:id", this.produtosController.updateProduto);
		/**
		 * @swagger
		 * /produtos/test:
		 *   get:
		 *     summary: Lista todos os produtos
		 *     tags: [Produto]
		 *     responses:
		 *       200:
		 *         description: Lista de produtos retornada com sucesso
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
		this.router.get("/test", this.produtosController.test);
	}

	public getRouter() {
		return this.router;
	}
}

export default new ProdutosRouter().getRouter();
