import express from "express";
import { signin, signup } from "./userController.js";

export const router = express.Router();

router.post("/signup", signup);
router.post("/login", signin);
