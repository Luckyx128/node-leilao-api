import { PrismaClient } from "@prisma/client";
import { Stats } from "node:fs";

const prisma = new PrismaClient();

const User = {
  getUser: async () => {
    const user = await prisma.tb_Usuarios.findFirst();
    return user;
  },
  consultUser: async (registration: number) => {
    const user = await prisma.tb_Usuarios.findUnique({
      where: { Mt_Usuario: registration },
    });
    return user;
  },
};

export { User };
