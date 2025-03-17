import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const User = {
  getUser: async () => {
    return prisma.tb_Usuarios.findMany();
  },
  consultUser: async (registration: number) => {
    return prisma.tb_Usuarios.findUnique({
      where: { Mt_Usuario: registration },
    });
  },
  createUser: async (registration: number, password: string) => {
    return prisma.tb_Usuarios.create({
      data: {
        Mt_Usuario: registration,
        Sn_Usuario: password,
      },
    });
  },
  updateUser: async (registration: number, password: string) => {
    try {
      const user = await User.consultUser(registration);
      if (user) {
        user;
        const updatedUser = await prisma.tb_Usuarios.update({
          where: { Mt_Usuario: registration },
          data: { Sn_Usuario: password },
        });
        if (!updatedUser) {
          throw new Error("Update failed");
        }
        return "success";
      } else {
        return "incorrect";
      }
    } catch (error) {
      throw new Error("Update failed");
    }
  },
};

export { User };
