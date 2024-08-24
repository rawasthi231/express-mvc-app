// routes/web.ts
import { Router } from "express";

import HomeController from "../app/Controllers/HomeController";
import AuthController from "../app/Controllers/AuthController";

const router = Router();

router.get("/", HomeController.index);

router.get("/signup", AuthController.showSignupForm);
router.post("/signup", AuthController.signup);

export default router;
