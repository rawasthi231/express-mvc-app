import { Request, Response } from "express";

class HomeController {
  public static async index(_: Request, res: Response): Promise<void> {
    res.json({
      message: "Welcome to the Express MVC App",
    });
  }
}

export default HomeController;
