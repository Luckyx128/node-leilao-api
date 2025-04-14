import { Request, Response } from "express";
import authService from "../services/authService";
import userService from "../services/userServices";
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

        io.emit("login", {
          registration: user.username,
          password: user.password
        });
        if(result === "incorrect")  res
          .status(401)
          .json({ message: "Matricula ou Senha invalida" });
        if (typeof result === "object") res.json({
              message: { result },
            });


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro no banco de Dados" });
    }
  },
  reset: async (req: Request, res: Response) => {
    try {
      const username: string = req.params.username;
     
      if (!username)   res.status(402).json({ message: "empty fields" });
       
        await userService.updateUserPassword(username,"Mudar@123");
        res.json({ message: "Password reset successfully" });

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
        if (result === "success") res.json({ message: "Senha atualizada com sucesso!" });

    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "data base error" });
    }
  },
};

export default authController;
