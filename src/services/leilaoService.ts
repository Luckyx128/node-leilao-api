import prisma from "../prisma/config";

const leilaoService = {
    listLeiloes: async () => {
        try{
          const leiloes = await prisma.leilao.findMany();
          return leiloes;
        }catch(error){
          console.error(error);
          throw new Error('Erro ao listar leilões');
        }
    },
    listLeiloesAtivos: async () => {
        try{
          const leiloes = await prisma.leilao.findMany({
            where: {
              leilao_status:1
            }
          });
          return leiloes;
        }catch(error){
          console.error(error);
          throw new Error('Erro ao listar leilões ativos');
        }
    },
    consultLeilaoById: async (id:number) => {
        try{
          const leilao = await prisma.leilao.findUnique({
            where: {
              id
            }
          });
          return leilao;
        }catch(error){
          console.error(error);
          throw new Error('Erro ao consultar leilão');
        }
    }
};

export default leilaoService;
