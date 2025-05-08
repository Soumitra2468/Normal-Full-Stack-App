import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/Slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Select authenticated user
  const user = useSelector((state) => state.auth.auth);

  // Close mobile menu on navigation or logout
  useEffect(() => {
    setIsOpen(false);
  }, [navigate, user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login", { replace: true });
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/todo", label: "Add Todo" },
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-3xl font-extrabold text-indigo-600">
          YourBrand
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-indigo-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="px-5 py-2 bg-green-500 text-white rounded-xl hover:bg-red-600 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block text-gray-700 font-medium hover:text-indigo-600 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-3 border-t border-gray-200">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-xl transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="mt-2 block px-4 py-2 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="px-5 py-2 bg-green-500 text-white rounded-xl hover:bg-red-600 transition"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
