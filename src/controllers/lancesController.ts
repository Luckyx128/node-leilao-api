import LanceService from '../services/lancesService'
import { Request,Response } from 'express';
interface LanceLeilao {
   Id_Leilao: number;
   Id_GrupoLances: number;
   Mt_Usuario: number;
   Dh_Lance?: string;
   Vr_Lance: number;
 }
const LancesController = {
   realizarLance: async (req:Request,res:Response) => {
      console.log(req.body)
      const lance:LanceLeilao = req.body;

      console.log(lance)
      try{
         const result = await LanceService.fazerLance(lance)
         res.json({message:result})
      }catch(error){
         res.status(500).json({message:"Erro no banco de dados"});
      }

   }
}

export default LancesController;