import React, { useContext } from "react";
import allProducts from '../../assets/Bulbimg/BulbData'
import { ThemeContext } from "../../Component/useContext/Toggle";
import { useNavigate } from "react-router";
import Navbar from "../../Component/Header/Navbar";
import Footer from "../../Component/Footer/Footer";

export default function BulbDetails() {
  const navigate=useNavigate();
  const { isDark } = useContext(ThemeContext);
  const products = allProducts; 

  return (
    <div>
      <Navbar/>
      <section className=" px-6 mt-2">
        <h2
          className={`text-2xl font-semibold mb-6 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
         Bulbs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index} onClick={()=>navigate(`/productdetails/${product.name}`)}
              className={`rounded-xl shadow p-4 transition transform hover:scale-105 duration-300 ${
                isDark
                  ? "bg-gray-800 text-white hover:shadow-gray-700"
                  : "bg-white text-gray-800 hover:shadow-lg"
              }`}
            >
              <div
                className={`h-40 rounded-lg mb-4 flex items-center justify-center ${
                  isDark ? "bg-white" : "bg-gray-200"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm mb-2 font-medium">
                Rs: {product.price}
              </p>
              <button
                className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-md hover:bg-yellow-400 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    
    </div>
  );
}
