import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI


const initialState = {
    todos: [],
    loading: false,
    error: null,
}

export const  createTodo = createAsyncThunk("todo/createTodo", async(todoData) => {
    try {
        const response = await axios.post(`${BACKEND_URI}/todo-create`, todoData)
        console.log('Todo added successfully:', response.data.data);
        toast.success('Todo added successfully!')
        return response?.data?.data
    } catch (error) {
        console.error('Error creating todo:', error)
        
    }
})

export const  getTodo = createAsyncThunk("todo/getTodo", async() => {
    try {
        const response = await axios.get(`${BACKEND_URI}/todo-get`)
        // console.log('Todo fetch successfully:', response.data.data);
        
        return response?.data?.data
    } catch (error) {
        console.error('Error creating todo:', error)
        
    }
})



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(createTodo.pending,(state, action) => {
            state.loading = true
        })
        .addCase(createTodo.fulfilled,(state, action) => {
            state.loading = false
            
        })
        .addCase(createTodo.rejected,(state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(getTodo.pending,(state, action) => {
            state.loading = true
        })
        .addCase(getTodo.fulfilled,(state, action) => {
            state.loading = false
            if(action.payload) {
                state.todos = action.payload
            }
            
        })
        .addCase(getTodo.rejected,(state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default todoSlice.reducer