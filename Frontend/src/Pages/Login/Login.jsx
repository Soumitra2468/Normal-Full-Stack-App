import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoLayout from "../../Layouts/TodoLayout";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    const data = await dispatch(loginUser({ email, password }));
    // console.log("data", data);

    if (!data?.payload) {
      toast.error(data.error);
      return;
    }
    navigate("/");

    // try {
    //   const res = await fetch("/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     throw new Error(data.message || "Login failed");
    //   }
    //   localStorage.setItem("token", data.token);
    //   navigate("/dashboard");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <TodoLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </TodoLayout>
  );
};

export default Login;
