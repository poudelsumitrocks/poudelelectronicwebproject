import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../Component/useContext/Toggle";
import allProducts from "../../assets/Bulbimg/BulbData";
import ceilingProducts from "../../assets/FanImg/Cellingfan";
import ExhaustProducts from "../../assets/FanImg/ExhaustFan";
import StandProducts from "../../assets/FanImg/Standfan";
import TableProducts from "../../assets/FanImg/Tablefan";
import { useNavigate } from "react-router";
import Navbar from "../../Component/Header/Navbar";



const productsData = [
  ...allProducts,
  ...ceilingProducts,
  ...ExhaustProducts,
  ...StandProducts,
  ...TableProducts,
];

const FeaturedProducts=()=> {
  const { isDark } = useContext(ThemeContext);
  const [products, setProducts] = useState(productsData);
  const [sort, setSort] = useState("priceLow");


  const navigate = useNavigate();

  useEffect(() => {
    let sorted = [...productsData];

    if (sort === "priceLow") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "priceHigh") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "nameAZ") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "nameZA") sorted.sort((a, b) => b.name.localeCompare(a.name));

    setProducts(sorted);
  }, [sort]);

  return (
    <div className="p-4">
      {/* Header + Sort */}
      <Navbar/>
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
          All Products
        </h2>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={`p-2 border rounded ${isDark ? "bg-gray-700 text-white" : "bg-white"}`}
        >
          <option value="priceLow">Price Low → High</option>
          <option value="priceHigh">Price High → Low</option>
          <option value="nameAZ">Name A → Z</option>
          <option value="nameZA">Name Z → A</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index.name}
            onClick={() => navigate(`/productdetails/${product.name}`)}
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
              <img src={product.image} alt={product.name} className="h-full object-contain" />
            </div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm mb-2 font-medium">Rs: {product.price}</p>
            <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-md hover:bg-yellow-400 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default  FeaturedProducts;