import { Request, Response } from "express";
import { UserModel } from "../Models/User";

class AuthController {
  public static async signup(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      const user = new UserModel({ email, name, password });
      await user.save();

      res.status(201).json({
        message: "User signed up successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

export default AuthController;
