"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCamera, FaSpinner } from "react-icons/fa";
import PlaceHolder from "../../../../../public/PlaceHolder.jpg";
import Link from "next/link";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

export default function page() {
  const [avatar, setAvatar] = useState(null);
  const [avatartoBE, setavatartoBE] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [ArrayData, setArrayData] = useState({});
  const [Isloading, setIsloading] = useState(false);

  const router = useRouter();

  const ArrayDatas = (eo) => {
    setArrayData({ ...ArrayData, [eo.target.name]: eo.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setavatartoBE(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    if (!avatar || !avatartoBE) {
      toast.error("Please select an avatar");
      setIsloading(false);
      return;
    }

    if (ArrayData?.password !== ArrayData?.confirmPassword) {
      setPasswordError("Passwords do not match");
      setIsloading(false);
      return;
    }

    if (!emailRegex.test(ArrayData?.email)) {
      toast.error("Invalid email address");
      setIsloading(false);
      return;
    }

    if (!passwordRegex.test(ArrayData?.password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      setIsloading(false);
      return;
    }

    if (
      !ArrayData?.email ||
      !ArrayData?.password ||
      !ArrayData?.confirmPassword ||
      !ArrayData?.firstName ||
      !ArrayData?.lastName
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    if (avatartoBE) {
      formData.append("avatar", avatartoBE);
    }
    formData.append("email", ArrayData?.email);
    formData.append("password", ArrayData?.password);
    formData.append("firstName", ArrayData?.firstName);
    formData.append("lastName", ArrayData?.lastName);
    formData.append("phoneNumber", ArrayData?.phoneNumber);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      credentials: "include",
      cache: "no-store",
      body: formData,
    });

    try {
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);

        setIsloading(false);
        return;
      }

      toast.success("Registration successful. Redirecting to home page...");
      router.replace("/login");
      setIsloading(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.log("Error:", error);
      setIsloading(false);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center py-12 px-4 relative sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <Link
        href="/"
        className="absolute top-3 z-50 left-2 text-white p-2 bg-black  hover:scale-105 transition-all duration-300 rounded-md"
      >
        Return to Home
      </Link>
      <Toaster />
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:shadow-2xl">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">
            Sign Up for Hotel App
          </h1>
          <p className="text-center text-gray-500">
            Create your account to get started
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <label htmlFor="avatar" className="relative cursor-pointer group">
              <div className="w-24 h-24 ">
                <Image
                  className="rounded-full object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
                  width={96}
                  height={96}
                  quality={100}
                  src={avatar || PlaceHolder}
                  alt="User avatar"
                />
                {!avatar && (
                  <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-75">
                    <FaCamera className="w-8 h-8 text-gray-400" />
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
              name="avatar"
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
                onChange={(eo) => {
                  ArrayDatas(eo);
                }}
                id="firstName"
                placeholder="John"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                onChange={(eo) => {
                  ArrayDatas(eo);
                }}
                id="lastName"
                placeholder="Doe"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
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
              onChange={(eo) => {
                ArrayDatas(eo);
              }}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-600">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              onChange={(eo) => {
                ArrayDatas(eo);
              }}
              type="email"
              placeholder="john.doe@example.com"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
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
              onChange={(eo) => {
                ArrayDatas(eo);
              }}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
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
              onChange={(eo) => {
                ArrayDatas(eo);
              }}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
            />
          </div>

          {passwordError && (
            <div className="text-red-500 text-center">
              <span>{passwordError}</span>
            </div>
          )}

          <button
            disabled={Isloading}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg px-4 py-2 hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
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
