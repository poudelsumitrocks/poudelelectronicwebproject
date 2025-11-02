import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Footer from "../../Component/Footer/Footer";
import { ThemeContext } from "../../Component/useContext/Toggle";

export default function Forgotpass() {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const [localAction, setLocalAction] = useState("");

  const handleUpdate = (formData) => {
    localStorage.setItem("data", JSON.stringify(formData));
    setLocalAction("Update");
    navigate("/login");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-4 transition-colors duration-300 ${
        isDark
              ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white"
              : "bg-white text-gray-900"
      }`}
    >
      <h1 className="m-2 text-2xl font-bold">My Account</h1>
      <h1 className="p-4 text-xl text-center">
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email.
      </h1>

      <div className="flex justify-center items-center flex-1 w-full mt-6">
        <form
          onSubmit={handleSubmit((data) => {
            if (data.password !== data.confirmPassword) {
              alert("Passwords do not match!");
              return;
            }
            alert("Password updated successfully!");
            handleUpdate(data);
          })}
          className={`flex flex-col gap-5 w-full max-w-sm p-6 rounded-xl shadow-lg transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white"
              : "bg-gradient-to-br from-white via-yellow-50  text-gray-900"
          }`}
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your Email"
            {...register("email", { required: true })}
            className={`border-b p-2 w-full focus:outline-none transition-colors ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                : "border-gray-300 bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-blue-500"
            }`}
          />

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              {...register("password", { required: true })}
              className={`border-b p-2 w-full focus:outline-none transition-colors ${
                isDark
                  ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  : "border-gray-300 bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-blue-500"
              }`}
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              {...register("confirmPassword", { required: true })}
              className={`border-b p-2 w-full focus:outline-none transition-colors ${
                isDark
                  ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  : "border-gray-300 bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-blue-500"
              }`}
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 p-2 text-white font-semibold rounded-md cursor-pointer transition-all"
          >
            Change Password
          </button>

          {/* Remember me */}
          <div className="flex flex-row gap-2 text-md items-center">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
