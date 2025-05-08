import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <TodoLayout>
      {/* Wrap with relative to position fixed children correctly */}
      <div className="relative flex h-screen bg-gray-100">
        {/* Mobile Top Bar */}
        <div className="md:hidden fixed top-0 inset-x-0 bg-white shadow-md z-40 flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button onClick={() => setSidebarOpen((prev) => !prev)}>
            {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Sidebar for desktop & overlay for mobile */}
        <aside
          className={`fixed inset-y-0 left-0 bg-white shadow-lg transform md:transform-none transition-transform duration-300 z-40 w-64 flex flex-col
            ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
        >
          <div className="p-6 text-center border-b md:hidden">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <nav className="flex-1 mt-4 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors
                    ${isActive ? "bg-gray-200 font-medium" : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="p-6 border-t">
            <button
              className="flex items-center text-red-600 hover:text-red-800 transition"
              onClick={() => {
                // Logout logic here
              }}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </aside>

        {/* Overlay backdrop on mobile when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 md:ml-64 mt-16 md:mt-0">
          <Outlet />
        </main>
      </div>
    </TodoLayout>
  );
}
