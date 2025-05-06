// src/pages/Home.jsx
import React from 'react'
// import heroImage from '../assets/hero.jpg' // replace with your image
import { FaRocket, FaShieldAlt, FaMobileAlt } from 'react-icons/fa'
import TodoLayout from '../../Layouts/TodoLayout'

export default function Home() {
  return (
    <TodoLayout>
    <main className="space-y-20">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
              Build Modern Web Apps Effortlessly
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our full-stack boilerplate uses React, Vite, Express, and MongoDB—giving you a head start on scalable, secure, and high-performance applications.
            </p>
            <a
              href="/signup"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
          {/* Image */}
          <div className="lg:w-1/2">
            {/* <img
              src={heroImage}
              alt="App illustration"
              className="w-full rounded-lg shadow-lg object-cover"
            /> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Stack?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition">
              <FaRocket size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blazing Performance</h3>
              <p className="text-gray-600">
                Vite’s lightning-fast builds & HMR plus Express API caching mean near-instant load times.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition">
              <FaShieldAlt size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
              <p className="text-gray-600">
                JWT auth, helmet middleware, and best-practice folder structure protect your data end-to-end.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-md transition">
              <FaMobileAlt size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                Tailwind CSS ensures your app looks pixel-perfect on any screen—from mobile to widescreen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your Project?
          </h2>
          <p className="mb-8">
            Get your boilerplate up and running in minutes—and focus on what matters: building features.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </main>

    </TodoLayout>
)
}
