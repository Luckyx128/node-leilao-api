import { UserModel } from "../models/userModel";
import bcrypt from "bcrypt";
const authService = {
  login: async (registration: number, password: string) => {
    try {
      const user = await UserModel.consultUser(registration);

      if (user) {
        const senha: string = user.Sn_Usuario || "";
        const isMatch = await bcrypt.compare(password, senha);

        if (isMatch) {
          return "success";
        } else {
          return "incorrect";
        }
      } else {
        return "incorrect";
      }
    } catch (error) {
      throw new Error("Login failed");
    }
  },
  register: async (registration: number, password: string) => {
    try {
      const user = await UserModel.consultUser(registration);
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await UserModel.createUser(registration, hashedPassword);
        if (result) {
          return "success";
        } else {
          return "exists";
        }
      } else {
        return "exists";
      }
    } catch (error) {
      throw new Error("Registration failed");
    }
  },
  updateLogin: async (registration: number, password: string) => {
    try {
      const user = await UserModel.consultUser(registration);
      if (user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await UserModel.updateUser(registration, hashedPassword);
        if (result) {
          return "success";
        } else {
          return "incorrect";
        }
      } else {
        return "incorrect";
      }
    } catch (error) {
      throw new Error("Update failed");
    }
  },
};

export default authService;
