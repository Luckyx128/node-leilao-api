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
      const io = req.app.get("io");
      io.emit("userCreated", user);
      res.json({ message: "Users retrieved", user });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  createUser: async (req: CustomRequest, res: CustomResponse) => {
    const { name, username, password } = req.body;
    try {
      const user = await userService.createUser(name, username, password);
      res.status(201).json({ message: "User created", user });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getUserByUsername: async (req: CustomRequest, res: CustomResponse) => {
    const { username } = req.params;
    try {
      const user = await userService.getUserByUsername(username);
      if (!user) {
         res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User retrieved", user });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export default userController;
