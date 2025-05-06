// src/pages/Contact.jsx
import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import TodoLayout from '../../Layouts/TodoLayout'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send form data to backend API
    console.log('Contact form submitted:', form)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <TodoLayout>
    <main className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or feedback? We’d love to hear from you. Reach out via any of the methods below or fill in the form.
          </p>
          <div className="space-y-6">
            <div className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 mr-4" />
              <span>123 Developer Lane, Tech City, TC 56789</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaPhoneAlt className="text-blue-600 mr-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="text-blue-600 mr-4" />
              <span>support@yourbrand.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
    </TodoLayout>
  )
}
