import React from "react";
import ReactDOMServer from "react-dom/server";

import { Request, Response } from "express";

import Home from "../Views/Home";
import Helpers from "../Helpers/Index";

class HomeController {
  public static index(req: Request, res: Response): void {
    const reactElement = React.createElement(Home);
    const html = ReactDOMServer.renderToString(reactElement);
    res.send(Helpers.getView("Home", html));
  }
}

export default HomeController;
