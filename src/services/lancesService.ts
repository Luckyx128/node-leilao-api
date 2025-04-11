import  prisma  from "../prisma/config";


type LanceLeilao = {
   valor: number;
   username: string;
   idLeilao: number;
   Dh_Lance: string;
}

const LanceService = {
   fazerLance: async (lance:LanceLeilao) =>{
     try{
      const Dh_Lance = new Date().toISOString();
      lance.Dh_Lance = Dh_Lance

      return await prisma.lances.create({
         data: {
            valor: lance.valor,
            username: lance.username,
            lances_id_leilao: lance.idLeilao,
            Dh_Lance: Dh_Lance
         }
      });
     }catch(error){
      console.error(error);
      throw new Error('Erro ao fazer lance');
     }
   },
   async obterLancesPorLeilao(idLeilao: number){
     try{
      return await prisma.lances.findMany({
         where: {
            lances_id_leilao: idLeilao
         }
      });
     }catch(error){
      console.error(error);
      throw new Error('Erro ao obter lances');
     }
   },
   async obeterUltimolance(idLeilao: number){
     try{
      return await prisma.lances.findFirst({
         where: {
            lances_id_leilao: idLeilao
         },
         orderBy: {
            Dh_Lance: 'desc'
         }
      });
     }catch(error){
      console.error(error);
      throw new Error('Erro ao obter lances');
     }
   },
}

export default LanceService;
