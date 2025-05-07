import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/Slices/todoSlice";
import authReducer from "../Redux/Slices/authSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});
