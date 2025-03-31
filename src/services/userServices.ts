import {UserModel} from "../models/userModel";

const userService = {
  getUser: async () => {
    return UserModel.getUser();
  },
};

export default userService;
