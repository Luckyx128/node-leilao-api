import ProdutosService from "../services/ProdutosService";
import { Request, Response } from "express";
import ProdutosEntity from "../entity/ProdutosEntity";

class ProdutosController {
	private produtosService: typeof ProdutosService;

	constructor() {
		this.produtosService = ProdutosService;
	}

	createProduto = async (req: Request, res: Response) => {
		try {
			const produtoData: ProdutosEntity = req.body;
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
			const produtoData: ProdutosEntity = req.body;
			const produto = await this.produtosService.updateProduto(id, produtoData);
			res.status(200).json(produto);
		} catch (error) {
			console.error("Erro ao atualizar produto:", error);
			res.status(500).json({ error: "Erro ao atualizar produto" });
		}
	};

	getProdutos = async (req: Request, res: Response) => {
		try {
			const produtos = await this.produtosService.getProdutos();
			res.status(200).json(produtos);
		} catch (error) {
			console.error("Erro ao obter produtos:", error);
			res.status(500).json({ error: "Erro ao obter produtos" });
		}
	};
	getProdutoById = async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id);
			const produto = await this.produtosService.getProdutoById(id);
			if (!produto) {
				 res.status(404).json({ error: "Produto não encontrado" });
			}
			res.status(200).json(produto);
		} catch (error) {
			console.error("Erro ao obter produto:", error);
			res.status(500).json({ error: "Erro ao obter produto" });
		}
	}
	deleteProduto = async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id);
			const produto = await this.produtosService.deleteProduto(id);
			if (!produto) {
				 res.status(404).json({ error: "Produto não encontrado" });
			}
			res.status(200).json({ message: "Produto deletado com sucesso" });
		} catch (error) {
			console.error("Erro ao deletar produto:", error);
			res.status(500).json({ error: "Erro ao deletar produto" });
		}
	}
	getProdutoByStatus = async (req: Request, res: Response) => {
		try {
			const status = parseInt(req.params.status);
			const produtos = await this.produtosService.getProdutoByStatus(status);
			res.status(200).json(produtos);
		} catch (error) {
			console.error("Erro ao obter produtos:", error);
			res.status(500).json({ error: "Erro ao obter produtos" });
		}
	}
}

export default new ProdutosController();
