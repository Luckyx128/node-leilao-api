class Produtos {
      id: number | undefined;
      nome: string;
      descricao: string;
      valor: number;
      categoria: string;
      estoque: number;
      produto_status: number;
      produto_imagem: string;
   
      constructor(nome: string, descricao: string, valor: number, categoria: string, estoque: number, produto_imagem: string, id?: number, produto_status?: number) {
         this.id = id || undefined;
         this.nome = nome;
         this.descricao = descricao;
         this.valor = valor;
         this.categoria = categoria;
         this.estoque = estoque;
         this.produto_imagem = produto_imagem;
         this.produto_status = produto_status ||  1 ;
      }
}

export default Produtos;