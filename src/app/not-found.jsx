import Link from "next/link";
import { FaBed, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-2">
          <FaBed className="mx-auto h-12 w-12 text-sky-500" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            404 - Room Not Found
          </h1>
          <p className="text-lg text-gray-600">
            Oops! It seems you've wandered into an uncharted area of our hotel.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button className="w-full bg-black rounded-lg text-white hover:bg-gray-800 px-6 py-3 transition-all duration-500">
            <Link href="/">Return to Lobby (Homepage)</Link>
          </button>

          <div className="relative">
            <input
              type="search"
              placeholder="Search for amenities, rooms, or services..."
              className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-10"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact our front desk at{" "}
            <a
              href="tel:+1234567890"
              className="font-medium text-sky-600 hover:text-sky-500"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
