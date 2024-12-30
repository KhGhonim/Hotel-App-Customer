"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaShip, FaSpinner, FaTrain } from "react-icons/fa";
import { SiTurkishairlines } from "react-icons/si";
import { getSession, signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { SignInSuccess } from "app/lib/DashboardSlice";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (eo) => {
    eo.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
    }

    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res.ok) {
        setIsLoading(false);
        toast.error("Wrong email or password");
        return;
      }

      if (res.ok) {
        toast.success("Login Successful");
        setIsLoading(false);
        const Session = await getSession();
        dispatch(SignInSuccess(Session?.user?.Role));

        router.push("/");
      }
      eo.target.reset();
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      eo.target.reset();
      setIsLoading(false);
    }
  };

  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Toaster/>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Return to Home Button */}
      <Link
        href="/"
        className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-2 rounded-md shadow-lg hover:scale-105 transition transform duration-300"
      >
        Return to Home
      </Link>

      {/* Login Card */}
      <div className="relative bg-white bg-opacity-80 p-10 rounded-lg shadow-2xl w-[400px] backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold text-blue-900 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            KG Cave Hotel
          </h1>
          <p className="text-blue-600 font-medium">
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="text-xs text-gray-500">PW: Admin123@</span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isLoading ? (
              <div className="flex justify-center">
                <FaSpinner className="animate-spin" />
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
            href="/forgetPW"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6 text-blue-500">
          <SiTurkishairlines className="h-6 w-6 text-red-500 hover:scale-110 transition transform duration-300 cursor-pointer" />
          <FaShip className="h-6 w-6 hover:scale-110 transition transform duration-300 cursor-pointer" />
          <FaTrain className="h-6 w-6 text-gray-500 hover:scale-110 transition transform duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
