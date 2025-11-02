import React, { useState, useContext } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { ThemeContext } from "../useContext/Toggle";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const { isDark } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      // alert("Message sent! (This is a demo)");
      toast.success("Message sent!)");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className={`min-h-screen pt-24 px-6 sm:px-12 md:px-24 transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-700"}`}>
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Contact Us
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p>We are happy to help you. Reach out to us anytime!</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <IoLocationSharp className="text-yellow-400 text-xl" /> SirjanaChowk, Bharatpur, Chitwan
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-yellow-400 text-xl" /> +977-9811228889
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400 text-xl" /> sumitpoudell20s@gmail.com
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className={`flex flex-col gap-4 p-6 rounded-lg shadow-md transition-colors duration-300 ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900"
            }`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900"
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
            className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900"
            }`}
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}

          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              isDark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900"
            }`}
            rows={5}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

          <button
            type="submit"
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
