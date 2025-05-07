import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

const initialState = {
  auth: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth-register",
  async (userData) => {
    try {
      const response = await axios.post(
        `${BACKEND_URI}/auth/user-register`,
        userData
      );
      console.log("User register successfully:", response.data);
      toast.success("User register successfully!");
      return response?.data?.data;
    } catch (error) {
      console.error("User register failed", error);
      toast.error("User register failed");
    }
  }
);

export const loginUser = createAsyncThunk("auth-login", async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URI}/auth/user-login`,
      userData,
      {
        withCredentials: true, // ← include cookies
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("User login successfully:", response.data);
    toast.success("User login successfully!");
    return response?.data?.user;
  } catch (error) {
    console.error("User login failed", error);
    toast.error("User login failed");
  }
});

export const logoutUser = createAsyncThunk("auth-logout", async () => {
  try {
    const response = await axios.get(`${BACKEND_URI}/auth/user-logout`);
    console.log("User logout successfully:", response.data.data);
    toast.success("User logout successfully!");
    return response?.data?.data;
  } catch (error) {
    console.error("User logout failed", error);
    toast.error("User logout failed");
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.auth = action.payload;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.auth = null;
        }
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
