import { Request, Response } from "express";
import { User } from "../models/userModel";
const userService = {
  getUser: async () => {
    const user = await User.getUser();
    return user;
  },
};

export default userService;
