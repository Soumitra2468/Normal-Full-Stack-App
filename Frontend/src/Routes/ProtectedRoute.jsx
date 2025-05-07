import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Select the authenticated user from Redux state
  const user = useSelector((state) => state.auth.auth);
  console.log("user", user);

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Render children if provided, otherwise nested routes via Outlet
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
