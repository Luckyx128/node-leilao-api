import { Request, Response } from "express";
import leilaoService from "../services/leilaoService";

const LeilaoController = {
    listLeiloes: async (req:Request,res:Response) => {
        try{
            const Leiloes = await leilaoService.listLeiloes()
            
            res.json({message:'sucesso',Leiloes})
        }
        catch(error){
            res.status(500).json({message:'Erro no banco de dados'})
        }
  },
    consultLeilao: async (req:Request,res:Response)=> {
        try {
            const id:number = parseInt(req.params.id)
            console.log(id)
            const leilao = await leilaoService.consultLeilao(id)
            res.json(leilao)
        }catch (error){
            res.status(500).json({message:"Erro no banco de dados"})
        }
    }
}


export default LeilaoController;