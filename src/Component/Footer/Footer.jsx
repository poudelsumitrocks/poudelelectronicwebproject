import React, { useContext } from "react";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { ThemeContext } from "../useContext/Toggle";

export default function Footer() {
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);

  return (
    <footer
      className={`mt-10 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-blue-700 text-white"
      }`}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Poudel Electric House</h2>
          <p className="text-sm">
            Your trusted shop for all electrical, plumbing, and lighting needs.
            Quality products with reliable service at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("")}
            >
              Shop
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-yellow-400" />
              <span>SirjanaChowk,Bharatpur, Chitwan</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-400" />
              <span>+977-9811228889</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>sumitpoudell20s@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 py-4 text-center text-sm">
        © {new Date().getFullYear()} Poudel Electrical House — All Rights Reserved.
      </div>
    </footer>
  );
}
