import ProdutosService from "../services/ProdutosService";
import { Request, Response } from "express";
class ProdutosController {
   private produtosService: typeof ProdutosService;

   constructor() {
      this.produtosService = ProdutosService;
   }

   createProduto = async (req: Request, res: Response) => {
      try {
         const produtoData = req.body;
         const produto = await this.produtosService.createProduto(produtoData);
         res.status(201).json(produto);
      } catch (error) {
         console.error("Erro ao criar produto:", error);
         res.status(500).json({ error: "Erro ao criar produto" });
      }
   };

   updateProduto = async (req: Request, res: Response) => {
      try {
         const id = parseInt(req.params.id);
         const produtoData = req.body;
         const produto = await this.produtosService.updateProduto(id, produtoData);
         res.status(200).json(produto);
      } catch (error) {
         console.error("Erro ao atualizar produto:", error);
         res.status(500).json({ error: "Erro ao atualizar produto" });
      }
   };

   test = async (req: Request, res: Response) => {
      try {
         await this.produtosService.teste();
         
         res.status(200).json({ message: "Teste executado com sucesso" });
      } catch (error) {
         console.error("Erro ao executar teste:", error);
         res.status(500).json({ error: "Erro ao executar teste" });
      }
   }
}


export default new ProdutosController();