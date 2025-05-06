// src/components/Footer.jsx
import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">YourBrand</h3>
          <p className="text-sm leading-relaxed">
            Building next-gen web experiences with React, Node.js, and Tailwind CSS.  
            Let’s make something amazing together!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6">
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </div>
    </footer>
  )
}
