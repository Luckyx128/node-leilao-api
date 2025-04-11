import prisma from "../../prisma/config";


const SaldoService = {
    async getUserSaldo(username: string) {
      try{

        return await prisma.saldo.findUnique({
            where: {
                user: username
            }
        });
    }catch(error){
      console.error(error);
      throw error;
    }
  },
  async updateUserSaldo(username: string, valor: number,motivo:string) {
    try{


      const saldoAtual = await prisma.saldo.findUnique({
        where: {
          user: username
        }
      });
      let novoSaldo: number = 0
      if(motivo === 'adicionar') novoSaldo = saldoAtual ? saldoAtual.valor + valor : valor;
      if(motivo === 'subtrair') novoSaldo = saldoAtual ? saldoAtual.valor - valor : valor;

        return await prisma.saldo.update({
            where: {
                user: username
            },
            data: {
                valor: novoSaldo
            }
        });
    }catch(error){
      console.error(error);
      throw error;
    }
  }
};
