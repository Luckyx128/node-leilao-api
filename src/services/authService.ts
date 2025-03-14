import { User } from "../models/userModel";

const authService = {
  login: async (registration: number, password: string) => {
    try {
      const user = await User.consultUser(registration);
      if (!user) throw new Error("User not found");
      // const isMatch = await bcrypt.compare(password, user.password);
      // if (!isMatch) throw new Error("Invalid credentials");
      // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      // expiresIn: "1h",
      // });
      return user;
    } catch (error) {
      throw new Error("Login failed");
    }
  },
};

export default authService;
