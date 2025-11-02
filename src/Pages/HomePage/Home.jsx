import React, { useContext } from "react";
import Navbar from "../../Component/Header/Navbar";
import ProductNav from "../../Component/Header/ProductNav";
import HeroSection from "./HeroSection";
import Footer from "../../Component/Footer/Footer";
import FeaturedProducts from "./FeaturedProducts";
import { ThemeContext } from "../../Component/useContext/Toggle";

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-700"
      }`}
    >
      <Navbar />

      <div className="pt-20">
        <HeroSection />

        <div>
          <div
            className={`min-h-screen pt-10 grid grid-cols-[280px_1fr] ${
              isDark ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            {/* Left Sidebar */}
            <aside className="p-2 border-r border-gray-300">
              <ProductNav />
            </aside>

            {/* Right Main Content */}
            <main className="p-2">
              <FeaturedProducts />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
