// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import {
//   FaBolt,
//   FaLightbulb,
//   FaToggleOn,
//   FaPhone,
//   FaWrench,
//   FaFacebook,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";

// export default function Landing() {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleSignUp = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="font-sans overflow-hidden scroll-smooth">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <h1 className="text-2xl font-bold">Poudel Electric House</h1>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <a href="#services" className="hover:text-blue-200">
//               Services
//             </a>
//             <a href="#about" className="hover:text-blue-200">
//               About
//             </a>
//             <a href="#contact" className="hover:text-blue-200">
//               Contact
//             </a>
//             <a href="#brand" className="hover:text-blue-200">
//               Brands
//             </a>
//           </div>

//           {/* Desktop Sign Up */}
//           <div className="hidden md:block">
//             <button
//               onClick={handleSignUp}
//               className="bg-blue-900 px-4 py-2 ml-4 rounded-2xl hover:bg-blue-800 transition"
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {/* Hamburger / Close Icon */}
//             {menuOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {menuOpen && (
//           <div className="md:hidden mt-2 bg-blue-700 rounded-lg p-4 space-y-2">
//             <a
//               href="#services"
//               className="block hover:text-blue-200"
//               onClick={() => setMenuOpen(false)}
//             >
//               Services
//             </a>
//             <a
//               href="#about"
//               className="block hover:text-blue-200"
//               onClick={() => setMenuOpen(false)}
//             >
//               About
//             </a>
//             <a
//               href="#contact"
//               className="block hover:text-blue-200"
//               onClick={() => setMenuOpen(false)}
//             >
//               Contact
//             </a>
//             <a
//               href="#brand"
//               className="block hover:text-blue-200"
//               onClick={() => setMenuOpen(false)}
//             >
//               Brands
//             </a>
//             <button
//               onClick={() => {
//                 handleSignUp();
//                 setMenuOpen(false);
//               }}
//               className="w-full bg-blue-900 px-4 py-2 mt-2 rounded-2xl hover:bg-blue-800 transition"
//             >
//               Sign Up
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section
//         className="relative bg-blue-900 text-white py-28 text-center"
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-blue-900/70"></div>
//         <div className="relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Powering Your Home & Business ⚡
//           </h2>
//           <p className="text-lg mb-6 max-w-2xl mx-auto">
//             Wires, switches, lights, and complete electrical solutions — trusted
//             by customers for quality and service.
//           </p>
//           <a
//             href="#services"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Explore Our Products
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 container mx-auto text-center">
//         <h3 className="text-3xl font-bold text-blue-700 mb-8">Our Services</h3>
//         <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
//           <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
//             <FaBolt className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">
//               Wiring & Fittings
//             </h4>
//             <p className="text-gray-600">
//               High-quality wires and fittings for safe electrical setups.
//             </p>
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
//             <FaToggleOn className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">
//               Switches & Boards
//             </h4>
//             <p className="text-gray-600">
//               Modern, durable switches and distribution boards.
//             </p>
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
//             <FaLightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">
//               Lighting Solutions
//             </h4>
//             <p className="text-gray-600">
//               LEDs, bulbs, and decorative lights for every need.
//             </p>
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
//             <FaWrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">
//               Plumbing Services
//             </h4>
//             <p className="text-gray-600">
//               Professional plumbing solutions, including installation and
//               repairs.
//             </p>
//           </div>
//         </div>
//         <p className="mt-8 text-lg text-gray-700">
//           💡 We also have a physical shop with all necessary electrical items.
//           You are welcome to visit us for products or advice!
//         </p>
//       </section>

//       {/* About Section */}
//       <section id="about" className="bg-blue-50 py-16 relative flex flex-row">
//         <div className="container mx-auto text-center relative z-10">
//           <h3 className="text-3xl font-bold text-blue-700 mb-6">About Us</h3>
//           <p className="max-w-2xl mx-auto text-gray-700 mb-6">
//             Poudel Electric House has been serving the community with
//             top-quality electrical products and solutions. We believe in trust,
//             quality, and long-lasting customer relationships.
//           </p>
//           <p className="text-lg text-blue-600 font-semibold">
//             “Your Power, Our Responsibility”
//           </p>
//         </div>
//         <div
//           className="absolute inset-0"
//           style={{
//             clipPath: "polygon(19% 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
//           }}
//         >
//           <img
//             src="/about-bg.jpg"
//             alt="About background"
//             className="w-full h-full object-cover opacity-20"
//           />
//         </div>
//       </section>

//       {/* Trusted Brands Section */}
//       <section
//         id="brand"
//         className="py-16 container mx-auto flex flex-col justify-center items-center"
//       >
//         <h3 className="text-3xl font-bold text-blue-700 mb-8">
//           Brands We Sell
//         </h3>
//         <p className="text-gray-700 mb-6">
//           We offer quality products from trusted brands you know and trust.
//         </p>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center opacity-90 p-4 mx-auto">
//           <img src="/Rathi.png" alt="Rathi Cable" className="sm:h-16 md:h-24 object-contain hover:scale-110 hover:shadow-lg transition-transform duration-500" />
//           <img src="/Prime.png" alt="Prime Cable" className="h-16 object-contain hover:scale-110 hover:shadow-lg transition-transform duration-500" />
//           <img src="/Orient.png" alt="Orient Fan" className="h-24 object-contain hover:scale-110 hover:shadow-lg transition-transform duration-500" />
//           <img src="/Usha.png" alt="Usha Fan" className="h-24 object-contain hover:scale-110 hover:shadow-lg transition-transform duration-500" />
//           <img src="/Parkash.png" alt="Parkash Switches" className="h-16 object-contain hover:scale-110 hover:shadow-lg transition-transform duration-500" />
//         </div>
//         <span className="text-gray-600 font-medium hover:cursor-pointer hover:underline">
//           and many more...
//         </span>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 container mx-auto text-center">
//         <h3 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h3>
//         <p className="text-gray-700 mb-4">
//           Got questions or need assistance? Reach out to us today!
//         </p>
//         <a
//           href="tel:+9779840596181"
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition inline-flex items-center gap-2"
//         >
//           <FaPhone /> Call Now
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white text-center py-8 mt-10">
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="w-6 h-6 hover:text-blue-300" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="w-6 h-6 hover:text-blue-300" />
//           </a>
//           <a href="https://wa.me/9779800000000" target="_blank" rel="noopener noreferrer">
//             <FaWhatsapp className="w-6 h-6 hover:text-blue-300" />
//           </a>
//         </div>
//         <p>
//           &copy; {new Date().getFullYear()} Poudel Electric House. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }
