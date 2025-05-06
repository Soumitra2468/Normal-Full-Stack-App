import express from 'express';
import { createTodo, getAllTodos } from '../Controllers/todo.controller.js';

const router = express.Router();

router
.post('/todo-create',createTodo)
.get('/todo-get', getAllTodos)





export default router;