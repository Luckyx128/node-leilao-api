import e, { Request, Response } from "express";
import authService from "../services/authService";
interface User {
  registration?: number;
  password?: string;
}

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      if (user.registration && user.password) {
        const registration = user.registration;
        const password = user.password;
        const result = await authService.login(registration, password);
        res.json({
          message: { result },
        });
      } else {
        res.status(400).json({ message: "Invalid registration or password" });
      }
    } catch (error) {
      res.status(500).json({ message: "data base error" });
    }
  },
};

export default authController;
