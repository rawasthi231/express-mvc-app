// app/Controllers/AuthController.ts
import React from "react";
import ReactDOMServer from "react-dom/server";

import { Request, Response } from "express";

import Signup from "../Views/Signup";
import Helpers from "../Helpers/Index";

class AuthController {
  public static showSignupForm(req: Request, res: Response): void {
    const reactElement = React.createElement(Signup);
    const html = ReactDOMServer.renderToString(reactElement);
    res.send(Helpers.getView("Signup", html));
  }

  public static async signup(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    
    // Here, you would handle the signup logic, e.g., save to a database.
    // For now, let's just simulate a success response.

    res.json({
      message: "User signed up successfully",
      user: { username, email },
    });
  }
}

export default AuthController;
