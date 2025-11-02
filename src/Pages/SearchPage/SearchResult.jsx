import React, { useContext } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router";
import allProducts from "../../assets/Bulbimg/BulbData";
import { ThemeContext } from "../../Component/useContext/Toggle";
import Navbar from "../../Component/Header/Navbar";
import ProductNav from "../../Component/Header/ProductNav";
import Footer from "../../Component/Footer/Footer";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { isDark } = useContext(ThemeContext);
  const navigate=useNavigate();

  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen pt-8 px-4 sm:px-6 md:px-10 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar/>
<div className="mx-[-16px] sm:mx-[-24px] md:mx-[-40px] mt-12">
  <ProductNav />
</div>
      <div className="mt-20">
{/* 🔍 Search Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Search Results for "<span className="text-yellow-500">{query}</span>"
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="w-full h-36 sm:h-40 md:h-44 flex justify-center items-center overflow-hidden rounded-t-xl" onClick={()=>   navigate(`/productdetails/${(item.name)}`)}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-sm sm:text-base truncate">
                  {item.name}
                </h3>
                <p className="text-yellow-500 font-semibold text-sm sm:text-base mt-1">
                  Rs. {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="no results"
            className="w-24 h-24 mb-4 opacity-80"
          />
          <p className="text-lg font-medium text-center opacity-80">
            No products found for "
            <span className="text-yellow-500">{query}</span>"
          </p>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  );
}
