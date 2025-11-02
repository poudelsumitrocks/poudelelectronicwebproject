import React, { useContext, useState } from "react";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import { IoCartOutline, IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { ThemeContext } from "../useContext/Toggle";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../Redux/Slice/Userslice";
import Search from "../../Pages/SearchPage/Search";

export default function Navbar() {
  const { isDark, handleToggle } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const userIdentifier = useSelector((state) => state.user.userIdentifier);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = useSelector((state) => state.cart.totalQty);
  const dispatch = useDispatch();
  const displayName = userIdentifier ? userIdentifier.split("@")[0] : null;

  // Handle desktop/mobile account click
  const handleAccountClick = () => {
    if (userIdentifier) {
      setProfileMenuOpen(!profileMenuOpen); // toggle dropdown only if logged in
    } else {
      navigate("/landing"); // go to login if not logged in
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed w-full top-0 left-0 h-20 flex items-center px-4 sm:px-6 md:px-8 z-50 shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-blue-700 text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
          <span
            className="hidden sm:inline hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Poudel Electrical House
          </span>
          <span
            className="sm:hidden hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Poudel Electrical House
          </span>
        </h1>
      </div>

      {/* Search */}
      <div className="hidden sm:flex flex-1 mx-2 md:mx-4">
        <Search />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Theme toggle */}
        <div className="cursor-pointer" onClick={handleToggle}>
          {isDark ? (
            <IoMoonOutline className="text-2xl hover:text-gray-300" />
          ) : (
            <GoSun className="text-2xl hover:text-yellow-300" />
          )}
        </div>

        {/* Cart */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <IoCartOutline className="text-3xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </div>

        {/* Desktop Account */}
        <div className="hidden sm:flex flex-col items-center relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleAccountClick}
          >
            <FaUser className="text-3xl hover:text-yellow-100" />
            <div className="flex flex-col leading-tight">
              <h3 className="text-sm">Account</h3>
              <h3 className="text-sm flex items-center">
                {displayName ? `Hi, ${displayName}` : "Login"}
                {userIdentifier && <LuChevronDown className="ml-1" />}
              </h3>
            </div>
          </div>

          {/* Dropdown */}
          {profileMenuOpen && userIdentifier && (
            <div
              className={`absolute top-12 right-0 w-48 z-[1000] rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 ${
                isDark
                  ? "bg-gray-800 text-gray-100 border-gray-700"
                  : "bg-white text-gray-900"
              }`}
            >
              <ul className="flex flex-col">
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  My Profile
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  Orders
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  Settings
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  Help Center
                </li>
                <hr className="border-gray-200 dark:border-gray-700 my-1" />
                <li>
                  <button
                    onClick={() => dispatch(Logout())}
                    className="w-full text-left px-4 py-3 bg-gray-300 hover:bg-gray-500 text-black font-semibold transition-colors duration-150"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="sm:hidden ml-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars className="text-2xl" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden absolute top-20 left-0 w-full flex flex-col p-4 gap-4 shadow-md z-40 transition-colors duration-300 ${
            isDark ? "bg-gray-800 text-white" : "bg-blue-800 text-white"
          }`}
        >
          <Search />

          {/* Account / Login */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleAccountClick}
          >
            <FaUser className="text-2xl" />
            <span>{userIdentifier ? "Account" : "Login / Register"}</span>
          </div>

          {/* Logout only if logged in */}
          {profileMenuOpen && userIdentifier && (
            <div
              className={`absolute top-14 right-4 w-48 rounded-lg shadow-lg border border-gray-200 overflow-hidden ${
                isDark
                  ? "bg-gray-800 text-gray-100 border-gray-700"
                  : "bg-white text-gray-900"
              }`}
            >
              <ul className="flex flex-col">
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  My Profile
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  Orders
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  Settings
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  Help Center
                </li>
                <hr className="border-gray-200 dark:border-gray-700 my-1" />
                <li>
                  <button
                    onClick={() => dispatch(Logout())}
                    className="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 text-white font-semibold transition-colors duration-150"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Cart */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <IoCartOutline className="text-2xl" />
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
