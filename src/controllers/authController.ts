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
        switch (result) {
          case "success":
            res.json({
              message: { result },
            });
            break;
          case "incorrect":
            res
              .status(401)
              .json({ message: "Invalid registration or password" });
            break;
          default:
            res.status(500).json({ message: "data base error" });
            break;
        }
      } else {
        res.status(402).json({ message: "empty fields" });
      }
    } catch (error) {
      res.status(500).json({ message: "data base error" });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      if (user.registration && user.password) {
        const registration = user.registration;
        const password = user.password;
        const result = await authService.register(registration, password);
        switch (result) {
          case "success":
            res.json({
              message: { result },
            });
            break;
          case "exists":
            res.status(409).json({ message: "registration already exists" });
            break;
          default:
            res.status(500).json({ message: "data base error" });
            break;
        }
      } else {
        res.status(402).json({ message: "empty fields" });
      }
    } catch (error) {
      res.status(500).json({ message: "data base error" });
    }
  },
  updateLogin: async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      if (user.registration && user.password) {
        const registration = user.registration;
        const password = user.password;
        const result = await authService.updateLogin(registration, password);
        switch (result) {
          case "success":
            res.json({
              message: { result },
            });
            break;
          case "incorrect":
            res
              .status(401)
              .json({ message: "Invalid registration or password" });
            break;
          default:
            res.status(500).json({ message: "data base error" });
            break;
        }
      } else {
        res.status(402).json({ message: "empty fields" });
      }
    } catch (error) {
      res.status(500).json({ message: "data base error" });
    }
  },
};

export default authController;
