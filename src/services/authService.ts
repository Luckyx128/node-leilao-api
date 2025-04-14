import userService from "./userServices";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN ?? '1h';

type user = {
  name: string;
  username: string;
}


type LoginResponse = {
  user: user;
  token: string;
};

const authService = {
  login: async (username: string, password: string) => {
    try {
      const user = await userService.getUserByUsername(username);
      if (!user) return "incorrect";

        const oldPassword: string = user.password || "";

        const isMatch = await bcrypt.compare(password, oldPassword);
      if (!isMatch) return "incorrect";
      const token = jwt.sign(
          { id: user.username },
          JWT_SECRET as jwt.Secret,
          {
            expiresIn: JWT_EXPIRES_IN,
          } as jwt.SignOptions,
      );
      const loginResponse: LoginResponse = {
        user: {
          name: user.name,
          username: user.username,
        },
        token,
      };
    return loginResponse
    } catch (error) {
      console.error("Error during login:", error);
      throw new Error("Login failed");
    }
  },
  updateLogin: async (username: string, password: string) => {
    try {
      const user = await userService.getUserByUsername(username);
      if (!user) return "incorrect";
        const result = await userService.updateUserPassword(username, password);
        if (result) return "success";


    } catch (error) {
      console.error("Error during password update:", error);
      throw new Error("Update failed");
    }
  },
  verifyToken: async (token: string) => {
    return jwt.verify(token, JWT_SECRET);
  },
};

export default authService;
