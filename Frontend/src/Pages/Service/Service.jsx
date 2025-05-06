// src/pages/Service.jsx
import React from 'react'
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaSearch,
  FaBullhorn,
  FaPaintBrush
} from 'react-icons/fa'
import TodoLayout from '../../Layouts/TodoLayout'
import { Outlet } from 'react-router-dom'

export default function Service() {
  const services = [
    {
      icon: <FaCode size={36} className="text-blue-600 mb-4" />,
      title: 'Web Development',
      description:
        'Full-stack applications using React, Express, Node.js & MongoDB for scalable, maintainable codebases.',
    },
    {
      icon: <FaMobileAlt size={36} className="text-blue-600 mb-4" />,
      title: 'Mobile-First Design',
      description:
        'Responsive, accessible UIs built with Tailwind CSS, optimized for every device—from phones to desktops.',
    },
    {
      icon: <FaCloud size={36} className="text-blue-600 mb-4" />,
      title: 'Cloud Integration',
      description:
        'Deploy on AWS, Azure, or DigitalOcean with CI/CD pipelines, containerization, and serverless functions.',
    },
    {
      icon: <FaSearch size={36} className="text-blue-600 mb-4" />,
      title: 'SEO & Performance',
      description:
        'Best-practice optimizations to improve load times, Lighthouse scores, and search engine rankings.',
    },
    {
      icon: <FaBullhorn size={36} className="text-blue-600 mb-4" />,
      title: 'Marketing Automation',
      description:
        'Integrate email campaigns, analytics, and CRM tools to nurture leads and boost conversions.',
    },
    {
      icon: <FaPaintBrush size={36} className="text-blue-600 mb-4" />,
      title: 'UI/UX Design',
      description:
        'Clean, modern interfaces with user flows and wireframes to deliver delightful experiences.',
    },
  ]

  return (
    <TodoLayout>
    
    <main className="space-y-16 bg-gray-50 py-16">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600">
            From concept to launch, we offer end-to-end solutions to make your digital presence shine.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex justify-center">{svc.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {svc.title}
              </h3>
              <p className="text-gray-600 text-center">{svc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Project?
          </h2>
          <p className="mb-6">
            Let’s discuss your requirements and craft a custom plan that drives results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </main>
    <Outlet/>
    </TodoLayout>
  )
}
