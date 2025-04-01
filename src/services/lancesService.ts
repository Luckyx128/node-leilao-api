import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient().tb_Lance_Leilao;
import { LanceLeilao,LancesModel } from "../models/lancesModel";


const LanceService = {
   fazerLance: async (lance:LanceLeilao) =>{
      const Dh_Lance = new Date().toISOString();
      lance.Dh_Lance = Dh_Lance
   
      return lance
   }
}

export default LanceService;