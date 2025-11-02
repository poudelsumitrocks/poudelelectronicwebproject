import React from "react";
import { useNavigate } from "react-router";

export default function Bulb() {
  const navigate = useNavigate();

  const handleClick = () => {
 
    navigate("/bulbdetails");
  };

  return (
    <div className="relative flex gap-10 pl-4">
      <button
        onClick={handleClick}
        className="w-full h-10 flex items-center gap-1 font-medium rounded-2xl hover:bg-gray-100 text-gray-600 hover:cursor-pointer  pl-6 transition-colors"
      >
        Bulb
      </button>
    </div>
  );
}
