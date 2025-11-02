import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../../Component/Footer/Footer";
import { toast } from "react-toastify";
import { ThemeContext } from "../../Component/useContext/Toggle";

import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slice/Userslice";

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
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    const userCredentials = localStorage.getItem("data");
    if (!userCredentials) {
      toast.error("No user found. Please sign up first.");
      return;
    }

    const parsedUserCredentials = JSON.parse(userCredentials);
    const { fullName, email, password } = parsedUserCredentials;

    if (data.email === email && data.password === password) {
      toast.success("Successfully Logged In!");

      // Save last credentials and session
      localStorage.setItem(
        "lastSavedCredentials",
        JSON.stringify({ email: data.email, password: data.password })
      );
      sessionStorage.setItem("currentUser", fullName);

      dispatch(login(email));

      navigate("/", { state: fullName, replace: true });
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-4 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-center items-center flex-1 w-full mt-6">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className={`flex flex-col gap-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 rounded-xl shadow-lg transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white"
              : "bg-gradient-to-br from-white to-amber-50 text-gray-900"
          }`}
        >
          <div className="flex justify-center items-center gap-10 text-center">
            <h1
              className="text-xl sm:text-2xl font-bold hover:underline cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </h1>
          </div>

          <input
            type="email"
            placeholder="Enter username or email"
            {...register("email", { required: true })}
            className={`border p-2 rounded-xl w-full transition-colors ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              {...register("password", { required: true })}
              className={`border p-2 rounded-xl w-full transition-colors ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={(e) => {
                if (e.target.checked) {
                  const current = JSON.parse(
                    localStorage.getItem("lastSavedCredentials")
                  );
                  if (current) {
                    reset({
                      email: current.email,
                      password: current.password,
                    });
                  }
                } else {
                  reset({
                    email: "",
                    password: "",
                  });
                }
              }}
            />

            <span>Remember Me</span>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 p-2 text-white font-semibold rounded-md cursor-pointer transition-all"
          >
            Login
          </button>

          <h3
            className="text-red-400 text-center text-sm sm:text-base cursor-pointer hover:underline"
            onClick={() => navigate("forgotpass")}
          >
            Forgot password?
          </h3>

          <p
            className={`mt-4 text-sm flex gap-2 justify-center font-semibold transition-colors ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Don't have an account?
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={handleSignup}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
