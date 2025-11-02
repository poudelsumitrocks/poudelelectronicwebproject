import React, { useContext } from "react";
import ProductNav from "../../Component/Header/ProductNav";
import { Outlet } from "react-router";
import { ThemeContext } from "../../Component/useContext/Toggle";

export default function ProductPage() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      <div className="bg-amber-600 h-10 w-full"></div>
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
          <Outlet />
        </main>
      </div>
    </div>
  );
}
