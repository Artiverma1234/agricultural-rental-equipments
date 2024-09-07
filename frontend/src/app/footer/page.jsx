import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="bg-gray-800 text-gray-200">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 ml-20 md:grid-cols-2 lg:grid-cols-4">
      {/* About Section */}
      <div>
        <h3 className="text-lg font-semibold text-white">About Us</h3>
        <p className="mt-4 text-gray-400">
          We are committed to providing high-quality agricultural equipment for all your farming needs. Learn more about our mission and values.
        </p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-lg font-semibold ml-32 text-white">Quick Links</h3>
        <ul className="mt-4 space-y-4 ml-32">
          <li>
            <a href="/" className="text-gray-400 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-400 hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" className="text-gray-400 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      

      {/* Social Media Section */}
      <div>
        <h3 className="text-lg font-semibold text-white ml-32">Follow Us</h3>
        <div className="mt-4 flex space-x-4 ml-32">
          <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h10M7 16h10"
              />
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://x.com/i/flow/login" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://www.instagram.com/" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h10M7 16h10"
              />
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://in.linkedin.com/" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h10M7 16h10"
              />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-700 pt-8 text-center">
      <p className="text-gray-400">
        &copy; 2024 <strong>FarmRent Hub</strong>. All rights reserved.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer