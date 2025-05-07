import express from "express";
import { createTodo, getAllTodos } from "../Controllers/todo.controller.js";
import isLogin from "../Midllewares/isLogin.js";

const router = express.Router();

router
  .post("/todo-create", isLogin, createTodo)
  .get("/todo-get", isLogin, getAllTodos);

export default router;
