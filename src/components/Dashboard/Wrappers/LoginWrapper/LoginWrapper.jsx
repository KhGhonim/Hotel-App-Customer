"use client";

import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { FaShip, FaSpinner, FaTrain } from "react-icons/fa";
import { SiTurkishairlines } from "react-icons/si";
import useLogin from "Hooks/useLogin";
import { CgHome } from "react-icons/cg";

function LoginWrapper() {
  const { email, setEmail, password, setPassword, isLoading, handleSubmit } =
    useLogin();
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661928260943-4aa36c5e1acc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Toaster />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/40"></div>

      <div className="relative bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl w-[400px] backdrop-blur-md border border-gray-200">
        <Link
          href="/"
          className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition duration-300"
        >
        <CgHome 
            className="  text-white font-semibold rounded-lg  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
        </Link>
        <div className="text-center my-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3 font-serif">
            LuxeStay Hotel
          </h1>
          <p className="text-gray-600 font-medium text-lg">
            Experience the magic of two continents
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow duration-200"
              required
            />
            <span className="text-xs text-gray-500">
              Admin: admin@admin.com
            </span>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow duration-200"
              required
            />
            <span className="text-xs text-gray-500">PW: Admin123@</span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {isLoading ? (
              <div className="flex justify-center">
                <FaSpinner className="animate-spin w-5 h-5" />
              </div>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            href="/register"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Create an account
          </Link>
        </div>

        <div className="text-center mt-4">
          <Link
            href="/ForgetPassword"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6 text-blue-500">
          <SiTurkishairlines className="h-6 w-6 text-red-500 hover:scale-110 transition duration-300 cursor-pointer" />
          <FaShip className="h-6 w-6 hover:scale-110 transition duration-300 cursor-pointer" />
          <FaTrain className="h-6 w-6 text-gray-500 hover:scale-110 transition duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default LoginWrapper;
