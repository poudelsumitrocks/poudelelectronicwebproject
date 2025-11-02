import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router"; // ✅ fixed import
import { ThemeContext } from "../useContext/Toggle";

export default function ProductNav() {
  const [isOpen, setOpen] = useState(true);
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const categories = [
    { name: "Bulb", path: "bulbdetails" },
    { name: "Fan", path: "fandetails" },
    { name: "Switch", path: "switchdetails" },
    { name: "Wires", path: "wiresdetails" },
    { name: "Lights", path: "lightdetails" },
    { name: "Holder", path: "holderdetails" },
    { name: "Boxes", path: "boxesdetails" },
    { name: "MCB", path: "mcbdetails" },
  ];

  return (
    <div
      className={`w-64 border rounded-md shadow-sm p-4   ${
        isDark
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-gray-700 border-gray-200"
      }`}
    >
      <div
        className={`flex items-center justify-between font-medium cursor-pointer`}
        onClick={() => setOpen(!isOpen)}
      >
        <span>Show All Categories</span>
        <span className="text-lg font-semibold">{isOpen ? "˅" : ">"}</span>
      </div>

      {isOpen && (
        <nav className="flex flex-col mt-3 space-y-2">
          <h2
            className="font-semibold cursor-pointer"
            onClick={() => navigate("/productpage")}
          >
            All Products
          </h2>

          {categories.map((item, i) => (
            <NavLink
              key={i}
              to={`/productpage/${item.path}`}
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md transition ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}
