import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../../Component/Footer/Footer";
import { toast } from "react-toastify";
import { ThemeContext } from "../../Component/useContext/Toggle";

export default function Login() {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignup = () => {
    navigate("signup");
  };

  const handleLogin = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    toast.success("Congratulations! You have created your account.");
    reset();
    navigate("/landing");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-4 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
          : "bg-white  text-gray-900"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl p-4 text-center">
        Create Your Account
      </h1>

      <div className="flex justify-center items-center flex-1 w-full">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className={`flex flex-col p-4 gap-5 w-full max-w-sm rounded-xl shadow-lg transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white"
              : "bg-gradient-to-br from-white to-amber-50 text-gray-900"
          }`}
        >
          <input
            type="text"
            placeholder="Enter your Full Name"
            {...register("fullName", { required: "Full Name is required" })}
            className={`border-b p-2 w-full focus:outline-none transition ${
              isDark
                ? "border-gray-600 focus:border-blue-400 bg-gray-700 text-white"
                : "border-gray-300 focus:border-blue-500 bg-white text-gray-900"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}

          <input
            type="email"
            placeholder="Enter your Email"
            {...register("email", { required: "Email is required" })}
            className={`border-b p-2 w-full focus:outline-none transition ${
              isDark
                ? "border-gray-600 focus:border-blue-400 bg-gray-700 text-white"
                : "border-gray-300 focus:border-blue-500 bg-white text-gray-900"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Min length 8" },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  message: "Must include uppercase, number & special character",
                },
              })}
              className={`border-b p-2 w-full focus:outline-none transition ${
                isDark
                  ? "border-gray-600 focus:border-blue-400 bg-gray-700 text-white"
                  : "border-gray-300 focus:border-blue-500 bg-white text-gray-900"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 p-2 text-white font-semibold rounded-md cursor-pointer transition-all"
          >
            Create Account
          </button>

          <p
            className={`mt-4 text-sm flex gap-2 justify-center font-semibold transition-colors ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Already have an account?
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/landing")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
