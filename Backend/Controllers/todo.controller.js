import Todo from "../Models/todo.model.js";


export const createTodo = async(req, res) => {
    try {
        // console.log("Creating todo:", req.body);
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }
        const newTodo = new Todo({
            title,
            description,
        });
       const result =  await newTodo.save();
       if(!result) {
            return res.status(500).json({ message: "Failed to create todo" });
        }
        res.status(200).json({ message: "Todo created successfully" ,data:result});
        
    } catch (error) {
        console.log("Error creating todo:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}

export const getAllTodos = async(req, res) => {
    try {
        const todos = await Todo.find();
        if (!todos || todos.length === 0) {
            return res.status(404).json({ message: "No todos found" });
        }
        res.status(200).json({ message: "Todos fetched successfully", data: todos });
    } catch (error) {
        console.log("Error fetching todos:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

