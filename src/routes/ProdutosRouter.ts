import {Router} from "express";
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
        this.router.post("/produtos", this.produtosController.createProduto);
        this.router.put("/produtos/:id", this.produtosController.updateProduto);
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