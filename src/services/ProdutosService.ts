import prisma from "../prisma/config";
import ProdutosEntity from "../entity/ProdutosEntity";
class ProdutosService {
	createProduto = async (produtoData: ProdutosEntity) => {
		const novoProduto: ProdutosEntity = new ProdutosEntity(
			produtoData.nome,
			produtoData.descricao,
			produtoData.valor,
			produtoData.categoria,
			produtoData.estoque,
			produtoData.produto_imagem,
         produtoData.produto_status
		);
		const produto = await prisma.produtos.create({
			data: novoProduto,
		});
		return produto;
	};

	updateProduto = async (
		id: number,
		produtoData: {
			nome?: string;
			descricao?: string;
			valor?: number;
			categoria?: string;
			estoque?: number;
			produto_imagem?: string;
		},
	) => {
		const produto = await prisma.produtos.update({
			where: { id },
			data: produtoData,
		});
		return produto;
	};

	getProdutos = async () => {
		const produtos = await prisma.produtos.findMany();
		return produtos;
	};

	getProdutoById = async (id: number) => {
		const produto = await prisma.produtos.findUnique({
			where: { id },
		});
		return produto;
	};
	getProdutoByStatus = async (status: number) => {
		const produtos = await prisma.produtos.findMany({
			where: { produto_status: status },
		});
		return produtos;
	};
	deleteProduto = async (id: number) => {
		const produto = await prisma.produtos.update({
			where: { id },
			data: {
				produto_status: 2,
			},
		});
		return produto;
	};
}
  
export default new ProdutosService();
