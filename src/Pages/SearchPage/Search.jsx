import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Search() {
  const navigate = useNavigate();
  const [searchItems, setSearchItems] = useState("");

  const handleClick = (e) => {
    setSearchItems(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?query=${searchItems.trim()}`);
    }
  };

  const handleSearch = () => {
    navigate(`/search?query=${searchItems.trim()}`);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* Desktop & Tablet Search */}
      <div className="hidden sm:flex flex-1 mx-2 md:mx-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchItems}
          onChange={handleClick}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 rounded-l-md border-t border-b border-l border-gray-300 text-black bg-white focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500"
        >
          <FaSearch />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="flex sm:hidden w-full px-3">
        <input
          type="text"
          placeholder="Search..."
          value={searchItems}
          onChange={handleClick}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 rounded-l-md border-t border-b border-l border-gray-300 text-black bg-white focus:outline-none text-sm"
        />
        <button
          onClick={handleSearch}
          className="px-3 py-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
