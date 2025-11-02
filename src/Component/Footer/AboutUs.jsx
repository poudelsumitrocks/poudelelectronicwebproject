import React, { useContext } from "react";
import { ThemeContext } from "../useContext/Toggle";

export default function AboutUs() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen pt-24 px-6 sm:px-12 md:px-24 transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-700"}`}>
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        About Us
      </h1>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-6">
        Poudel Electric House is your one-stop shop for all electrical, lighting, 
        plumbing, and home improvement needs. Founded with the vision of providing 
        high-quality products at affordable prices, we pride ourselves on our 
        reliability, excellent customer service, and commitment to innovation.
      </p>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        Our team of professionals is always ready to assist you in finding the 
        perfect products for your home or business. From the latest electrical 
        equipment to traditional household necessities, Poudel Electric House is 
        dedicated to making your life easier and your projects successful.
      </p>
    </div>
  );
}
