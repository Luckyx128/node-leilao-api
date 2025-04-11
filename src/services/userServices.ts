import prisma from "../prisma/config";
const userService = {
  getUser: async () => {
      try {
    return prisma.users.findMany();
        } catch (error) {
            console.error("Error fetching users:", error);
            throw new Error("Error fetching users");
        }
  },
    getUserByUsername: async (username: string) => {
      try {


        return prisma.users.findUnique({
        where: {
            username:username,
        },
        });
        } catch (error) {
            console.error("Error fetching user:", error);
            throw new Error("Error fetching user");
        }
    },
  createUser: async (name:string,username: string, password: string) => {
      try {
    return prisma.users.create({
      data: {
        name,
        username,
        password,
      },
    });
        }catch (error) {
            console.error("Error creating user:", error);
            throw new Error("Error creating user");
        }
  },
    updateUserPassword: async (username: string, password: string) => {
      try {
        return prisma.users.update({
        where: {
            username,
        },
        data: {
            password,
        },
        });
        } catch (error) {
            console.error("Error updating password:", error);
            throw new Error("Error updating password");
        }

    },
};

export default userService;
