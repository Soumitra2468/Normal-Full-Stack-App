import mongoose from "mongoose";

const Dbconnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully:", conn?.connection?.host);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        
    }
}

export default Dbconnect;