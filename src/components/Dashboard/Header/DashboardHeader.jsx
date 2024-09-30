import { FaBell, FaSearch } from "react-icons/fa";
import { FaMessage, FaThreads } from "react-icons/fa6";

export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
      <button className="text-gray-500 focus:outline-none lg:hidden">
        <FaThreads className="h-6 w-6" />
      </button>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-600">
          <FaSearch className="h-6 w-6" />
        </button>
        <button className="relative text-gray-500 hover:text-gray-600">
          <FaBell className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            4
          </span>
        </button>
        <button className="relative text-gray-500 hover:text-gray-600">
          <FaMessage className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-xs text-white">
            7
          </span>
        </button>
        <button className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src="/placeholder.svg"
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
