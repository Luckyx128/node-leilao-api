import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const User = {
  getUser: async () => {
    const user = await prisma.tb_Usuarios.findFirst();
    return user;
  },
};

export { User };
