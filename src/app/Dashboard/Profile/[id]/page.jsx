"use client";
import DashboardHeader from "components/Dashboard/Header/DashboardHeader";
import SideBar from "components/Dashboard/SideBar/SideBar";
import Image from "next/image";
import { useState } from "react";
import { FaPenSquare } from "react-icons/fa";
import { useSelector } from "react-redux";

const currentUser = {
  name: "Alice Johnson",
  email: "alice.johnson@hotel.com",
  role: "Front Desk Manager",
  department: "Front Office",
  joinDate: "2021-03-15",
};

const authorizedPersons = [
  {
    id: "1",
    name: "Bob Smith",
    email: "bob.smith@hotel.com",
    role: "General Manager",
    department: "Management",
    joinDate: "2019-01-01",
  },
  {
    id: "2",
    name: "Carol Davis",
    email: "carol.davis@hotel.com",
    role: "Housekeeping Supervisor",
    department: "Housekeeping",
    joinDate: "2020-06-15",
  },
  {
    id: "3",
    name: "David Wilson",
    email: "david.wilson@hotel.com",
    role: "Chef de Cuisine",
    department: "Food & Beverage",
    joinDate: "2018-11-30",
  },
  {
    id: "4",
    name: "Eva Brown",
    email: "eva.brown@hotel.com",
    role: "HR Manager",
    department: "Human Resources",
    joinDate: "2021-09-01",
  },
];

export default function page() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(currentUser);
  const { IsSideBarOpened } = useSelector((state) => state.Users);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated profile to your backend
    console.log("Updated profile:", profile);
  };
  return (
    <div
      className={`container mx-auto  ${
        IsSideBarOpened ? "pl-20 lg:pl-36 pt-24" : "pl-20 pr-5 lg:p-6  !pt-24"
      }  transition-all duration-300  w-full h-full md:h-dvh`}
    >
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800">
        Dashboard Profile
      </h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            User Profile
          </h2>
          <p className="text-gray-500 mb-6">
            View and edit your profile information
          </p>
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100">
              <Image
                width={96}
                height={96}
                src="/placeholder-avatar.jpg"
                alt={profile.name}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-600 bg-opacity-30 flex items-center justify-center text-white text-lg font-bold uppercase">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-500">{profile.role}</p>
            </div>
          </div>
          <div className="space-y-4">
            {isEditing ? (
              <>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 mt-1"
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 mt-1"
                    type="email"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 mt-1"
                    type="text"
                    id="department"
                    name="department"
                    value={profile.department}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-gray-600">
                    Email
                  </span>
                  <p className="text-gray-800">{profile.email}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-gray-600">
                    Department
                  </span>
                  <p className="text-gray-800">{profile.department}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-gray-600">
                    Join Date
                  </span>
                  <p className="text-gray-800">{profile.joinDate}</p>
                </div>
                <button
                  className="mt-4 w-full flex items-center justify-center bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
                  onClick={() => setIsEditing(true)}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5h4m4 4V5a2 2 0 00-2-2h-3.585a2 2 0 00-1.414.586L5 7.586A2 2 0 004 9v7.5A2.5 2.5 0 006.5 19h11a2.5 2.5 0 002.5-2.5V12"
                    ></path>
                  </svg>
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>

        {/* Authorized Persons Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Authorized Persons
          </h2>
          <p className="text-gray-500 mb-6">
            View all authorized personnel and their roles
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th scope="col" className="py-2 px-4">
                    Name
                  </th>
                  <th scope="col" className="py-2 px-4">
                    Role
                  </th>
                  <th scope="col" className="py-2 px-4">
                    Department
                  </th>
                  <th scope="col" className="py-2 px-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {authorizedPersons.map((person) => (
                  <tr key={person.id} className="border-t border-gray-200">
                    <td className="py-2 px-4 font-medium">{person.name}</td>
                    <td className="py-2 px-4">{person.role}</td>
                    <td className="py-2 px-4">{person.department}</td>
                    <td className="py-2 px-4 text-right">
                      <button className="text-blue-500 hover:underline">
                        View Details
                      </button>
                      <button className="ml-4 text-red-500 hover:underline">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
