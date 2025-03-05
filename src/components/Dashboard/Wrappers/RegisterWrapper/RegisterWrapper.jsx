"use client";

import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { FaCamera, FaSpinner } from "react-icons/fa";
import PlaceHolder from "../../../../../public/PlaceHolder.jpg";
import Link from "next/link";
import useRegister from "Hooks/useRegister";
import { CgHome } from "react-icons/cg";

function RegisterWrapper() {
  const {
    avatar,
    handleAvatarChange,
    ArrayDatas,
    handleSubmit,
    passwordError,
    Isloading,
  } = useRegister();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
      className="min-h-screen flex items-center justify-center py-12 px-4 relative sm:px-6 lg:px-8 bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/40"></div>

      <Toaster />

      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl relative z-10 transform transition-all duration-300 hover:shadow-3xl">
        {/* Return Home Button */}
        <Link
          href="/"
          className="absolute top-4 left-4 z-50 text-white p-3 bg-black/60 rounded-lg hover:scale-105 transition-all duration-300"
        >
          <CgHome className="  text-white font-semibold rounded-lg  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />{" "}
        </Link>
        <div className="my-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to LuxeStay
          </h1>
          <p className="text-gray-500 mt-2">
            Create your account to experience luxury
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center">
            <label htmlFor="avatar" className="relative cursor-pointer group">
              <div className="w-28 h-28">
                <Image
                  className="rounded-full object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
                  width={112}
                  height={112}
                  quality={100}
                  src={avatar || PlaceHolder}
                  alt="User avatar"
                />
                {!avatar && (
                  <div className="absolute inset-0 bg-gray-300 opacity-60 rounded-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-80">
                    <FaCamera className="w-8 h-8 text-gray-600" />
                  </div>
                )}
              </div>
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-gray-600">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                required
                onChange={ArrayDatas}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-shadow duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                required
                onChange={ArrayDatas}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-shadow duration-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-gray-600">
              Phone Number
            </label>
            <input
              id="phone"
              name="phoneNumber"
              type="tel"
              placeholder="+1 (555) 123-4567"
              required
              onChange={ArrayDatas}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-shadow duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-600">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              required
              onChange={ArrayDatas}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-shadow duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              onChange={ArrayDatas}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-shadow duration-200"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              onChange={ArrayDatas}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-shadow duration-200"
            />
          </div>

          {passwordError && (
            <div className="text-red-500 text-center">{passwordError}</div>
          )}

          <button
            disabled={Isloading}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg px-4 py-3 hover:from-gold-600 hover:to-yellow-700 transition-all duration-300"
          >
            {Isloading ? (
              <FaSpinner className="animate-spin w-5 h-5 mx-auto" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterWrapper;
