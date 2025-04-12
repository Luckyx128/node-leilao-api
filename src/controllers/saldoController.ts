import { Request, Response } from "express";
import saldoServicce from "../services/saldoService";

type saldoUser = {
      user: string;
      valor: number;
      id : number;
}

const SaldoController = {
    consultarSaldo: async (req: Request, res: Response) => {
        try {
            const { username } = req.params;
            
            const usuario:saldoUser | null = await saldoServicce.getUserSaldo(username);
            
            if (!usuario) {
                res.status(404).json({ message: "Usuário não encontrado" });
            }else{

               
               res.status(200).json({
                  matricula: usuario.user,
                  saldo: usuario.valor
                  
               });
            }
        } catch (error) {
             res.status(500).json({ message: "Erro ao consultar saldo" });
        }
    },

    atualizarSaldo: async (req: Request, res: Response) => {
        try {
            const { username } = req.params;
            const { valor } = req.body;

            const usuario:saldoUser = await saldoServicce.updateUserSaldo(username, valor, req.body.motivo);

             res.status(200).json({
                message: "Saldo atualizado com sucesso",
                novoSaldo: usuario.valor
            });
        } catch (error) {
             res.status(500).json({ message: "Erro ao atualizar saldo" });
        }
    }
}

export default SaldoController;