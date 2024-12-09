import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        {/* Footer Top */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white hover:text-red-500">Get in Touch</h2>
          <p className="text-lg text-gray-400 mt-4">
            Feel free to contact us or follow us on social media.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.facebook.com/developerrabbani" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
          </a>
          <a href="https://www.linkedin.com/in/rabbani-sarker-86ab60205/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-gray-400">
          <p>&copy; 2024 Dev Rabbani Sarkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
