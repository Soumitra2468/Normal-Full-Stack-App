import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/Slices/todoSlice"

export const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})