import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import ueserTodoRoute from './Routes/todo.route.js';
const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", ueserTodoRoute)

// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })


export default app