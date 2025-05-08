import axios from "axios";

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

const axiosInstance = axios.create({
  baseURL: BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies in requests
});

export default axiosInstance;
