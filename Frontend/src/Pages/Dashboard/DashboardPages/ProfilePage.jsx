// src/pages/Profile.jsx
import React from 'react'
import {
  FaEdit,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa'

export default function ProfilePage() {
  // In a real app, you'd fetch this data
  const user = {
    name: 'Jane Doe',
    role: 'Full Stack Developer',
    joined: 'January 2023',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    avatar: '/assets/avatar.jpg',
    bio: `Passionate developer with 5+ years building scalable web applications.
          Lover of clean code, good coffee, and mountain hikes.`
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Avatar */}
          <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
            <img
              src={user.avatar}
              alt={`${user.name} avatar`}
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          {/* Profile Info */}
          <div className="md:w-2/3 p-8 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-indigo-600 font-medium">{user.role}</p>
              </div>
              <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                <FaEdit className="mr-2" /> Edit Profile
              </button>
            </div>

            {/* Bio */}
            <p className="text-gray-600 leading-relaxed">{user.bio}</p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <FaCalendarAlt className="text-indigo-600 mr-3" />
                <span><strong>Joined:</strong> {user.joined}</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-600 mr-3" />
                <span><strong>Email:</strong> {user.email}</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-indigo-600 mr-3" />
                <span><strong>Phone:</strong> {user.phone}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-indigo-600 mr-3" />
                <span><strong>Location:</strong> {user.location}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex space-x-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">24</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">120</p>
                <p className="text-gray-500">Commits</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">8</p>
                <p className="text-gray-500">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
