import express from "express";
import { login, logout, register } from "../Controllers/user.contrller.js";

const router = express.Router();

router
  .post("/user-register", register)
  .post("/user-login", login)
  .get("/user-logout", logout);

export default router;
