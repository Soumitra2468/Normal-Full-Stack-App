// src/components/Dashboard.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import TodoLayout from "../../Layouts/TodoLayout";

const menuItems = [
  { id: "home", label: "Home", icon: <FaHome size={18} />, path: "/" },
  {
    id: "profile",
    label: "Profile",
    icon: <FaUser size={18} />,
    path: "profile",
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaEnvelope size={18} />,
    path: "contact",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <FaCog size={18} />,
    path: "settings",
  },
];

export default function Dashboard() {
  return (
    <TodoLayout>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg flex flex-col">
          <div className="p-6 text-center border-b">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <nav className="flex-1 mt-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-200 transition ${
                    isActive ? "bg-gray-200 font-medium" : ""
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="p-6 border-t">
            <button className="flex items-center text-red-600 hover:text-red-800 transition">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </TodoLayout>
  );
}
