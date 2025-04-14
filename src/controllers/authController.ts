import { Request, Response } from "express";
import authService from "../services/authService";
interface User {
  name: string;
  username: string;
  password: string;
}

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      if (!user.username || !user.password)  res.status(401).json({ message: "Campos vazios" });

      const username = user.username;
      const password = user.password;
      const result = await authService.login(username, password);
      const io = req.app.get("io");

        console.log("Logado");
        io.emit("login", {
          registration: user.username,
          password: user.password
        });
        console.log(result);
        if(result === "incorrect")  res
          .status(401)
          .json({ message: "Matricula ou Senha invalida" });
        console.log(typeof result)
        if (typeof result === "object") res.json({
              message: { result },
            });


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro no banco de Dados" });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      if (!user.username || !user.password)   res.status(402).json({ message: "empty fields" });
        const name = user.name;
        const username = user.username;
        const password = user.password;
        const result = await authService.register(username, name, password);

        if (result === "exists") res.status(400).json({ message: "registration already exists" });

        if (typeof result === 'object' ) res.json({
            message: { result },
          });


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "data base error" });
    }
  },
  updateLogin: async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      if (!user.username || !user.password)   res.status(402).json({ message: "empty fields" });

        const username = user.username;
        const password = user.password;
        const result = await authService.updateLogin(username, password);
        if (result === "incorrect")   res
            .status(401)
            .json({ message: "Invalid registration or password" });

            res.status(500).json({ message: "data base error" });

    } catch (error) {
      console.log(error); 
      res.status(500).json({ message: "data base error" });
    }
  },
};

export default authController;
