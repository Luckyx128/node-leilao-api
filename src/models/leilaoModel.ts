import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const LeilaoModel = {
    listLeiloes: async () =>{
        return prisma.tb_Leilao.findMany();
    },
    consultLeilao: async (id:number) =>{
        console.log(prisma.tb_Leilao.findUnique(
            {where:{ Id_leilao: id }}
        ))

        return prisma.tb_Leilao.findUnique(
            {where:{ Id_leilao: id }}
        )
    }
}

export default LeilaoModel;