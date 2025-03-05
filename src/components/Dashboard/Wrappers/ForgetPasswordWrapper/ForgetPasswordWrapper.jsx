"use client";
import useForgetPassword from "Hooks/useForgetPassword";
import Link from "next/link";
import { CgSpinner } from "react-icons/cg";
import { GrSend } from "react-icons/gr";
import { MdHotel } from "react-icons/md";

function ForgetPasswordWrapper() {
  const { email, setEmail, isloading, handleSubmit, isSubmitted, setIsSubmitted } =
    useForgetPassword();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <MdHotel className="h-8 w-8 text-yellow-600" />
          <h1 className="text-2xl font-bold text-gray-800 ml-2">
            LuxeStay Hotel
          </h1>
        </div>

        {!isSubmitted ? (
          <>
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-2">
              Forgot Your Password?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Enter your email address and we'll send you instructions to reset
              your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isloading}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                {isloading ? (
                  <div className="flex justify-center items-center h-full">
                    <CgSpinner className="animate-spin h-5 w-5" />
                  </div>
                ) : (
                  <>
                    <GrSend className="h-5 w-5" />
                    <span>Send Reset Instructions</span>
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Sign in
              </Link>
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <h3 className="font-semibold">Check Your Email</h3>
              <p className="mt-1">
                We've sent password reset instructions to {email}
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Try another email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgetPasswordWrapper