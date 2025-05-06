// src/pages/Error.jsx
import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-red-600 text-[4rem]" />
        </div>
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
