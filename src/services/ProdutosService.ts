import prisma from "../prisma/config";
import ProdutosEntity from "../entity/ProdutosEntity";
class ProdutosService {



   createProduto = async (produtoData: { nome: string; descricao: string; preco: number; categoria: string; estoque: number; produto_imagem: string }) => {
     const novoProduto:ProdutosEntity = new ProdutosEntity(produtoData.nome, produtoData.descricao, produtoData.preco, produtoData.categoria, produtoData.estoque, produtoData.produto_imagem);
      const produto = await prisma.produtos.create({
         data: novoProduto,
      });
      return produto;
   }

   updateProduto = async (id: number, produtoData: { nome?: string; descricao?: string; preco?: number; categoria?: string; estoque?: number }) => {
      const produto = await prisma.produtos.update({
         where: { id },
         data: produtoData,
      });
      return produto;
   }

   getProdutos = async () => {
      const produtos = await prisma.produtos.findMany();
      return produtos;
   }
  
   teste = async () => {
      console.log("Teste de serviço");
   }
} 


export default new ProdutosService();