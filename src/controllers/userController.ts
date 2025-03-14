import { Request, Response } from "express";
import userService from "../services/userServices";
interface CustomRequest extends Request {
  userId?: string;
  // outros campos personalizados
}

interface CustomResponse extends Response {
  // campos personalizados da resposta, se houver
}

const userController = {
  getUsers: async (req: CustomRequest, res: CustomResponse) => {
    try {
      const user = await userService.getUser();
      res.json({ message: "Users retrieved", user });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default userController;
