// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/Slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector((state) => state?.auth?.auth);
  console.log("auth", auth);
  useEffect(() => {}, [dispatch]);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-gray-800">YourBrand</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <Link to="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-900 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-900 transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-900 transition">
            Contact
          </Link>
          <Link to="/todo" className="hover:text-gray-900 transition">
            Add Todo
          </Link>
        </nav>

        {/* CTAs */}
        {!auth ? (
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex space-x-4">
            <button onClick={() => dispatch(logoutUser())}>logout</button>
          </div>
        )}

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 px-6 py-4 text-gray-700">
            <li>
              <a href="/" className="block hover:text-gray-900 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block hover:text-gray-900 transition">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block hover:text-gray-900 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block hover:text-gray-900 transition"
              >
                Contact
              </a>
            </li>
            <li className="pt-2 border-t border-gray-200">
              <a
                href="/login"
                className="block px-4 py-2 hover:bg-gray-100 rounded transition"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
