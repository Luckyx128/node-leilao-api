import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface LanceLeilao {
  Id_Leilao: number;
  Id_GrupoLances: number;
  Mt_Usuario: number;
  Dh_Lance?: string;
  Vr_Lance: number;
}

const LancesModel = {
  realizarLance: async (lanceLeilao: LanceLeilao) => {
   try{

      prisma.tb_Lance_Leilao.create({
         data: {
            Id_Leilao: lanceLeilao.Id_Leilao,
            Dh_Lance: lanceLeilao.Dh_Lance,
            Id_GrupoLances: lanceLeilao.Id_GrupoLances,
            Mt_Usuario: lanceLeilao.Mt_Usuario,
            Vr_Lance: lanceLeilao.Vr_Lance,
         },
      });
   }catch(e){
      throw e
   }

    
  },
};

export { LanceLeilao, LancesModel };
