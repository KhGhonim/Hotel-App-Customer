"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

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
  const { IsSideBarOpened } = useSelector((state) => state.Users);
  const { data: session, status } = useSession();
  console.log(session);
  const handleInputChange = (e) => {};

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated profile to your backend
  };
  return (
    <div
      className={`container mx-auto  ${
        IsSideBarOpened ? " pl-20 lg:pl-36 pt-24" : "pl-20  lg:p-6  !pt-24"
      }  transition-all duration-300  w-full h-full md:h-dvh`}
    >
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800">
        Dashboard Profile
      </h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Profile Section */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            User Profile
          </h2>
          <p className="text-gray-500 mb-6">
            Manage and update your profile information.
          </p>

          <div className="flex items-center space-x-6 mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 shadow-md">
              <Image
                width={96}
                height={96}
                src={session?.user?.ProfileImg}
                alt={session?.user?.Firstname}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {session?.user?.Firstname} {session?.user?.Lastname}
              </h3>
              <p className="text-sm text-gray-500">{session?.user?.Role}</p>
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
                    className="border border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="name"
                    name="name"
                    value={session?.user?.Firstname}
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
                    className="border border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-blue-400"
                    type="email"
                    id="email"
                    name="email"
                    value={session?.user?.Email}
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
                    className="border border-gray-300 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="department"
                    name="department"
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all"
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
                  <p className="text-gray-800">{session?.user?.Email}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-gray-600">
                    Department
                  </span>
                  <p className="text-gray-800">{session?.user?.Role}</p>
                </div>

                <button
                  className="mt-6 w-full flex items-center justify-center bg-blue-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit className="mr-2" />
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>

        {/* Authorized Persons Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Authorized Persons
          </h2>
          <p className="text-gray-500 mb-6">
            Review all authorized personnel and their roles.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {authorizedPersons.map((person) => (
                  <tr
                    key={person.id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 font-medium">{person.name}</td>
                    <td className="py-3 px-4">{person.role}</td>
                    <td className="py-3 px-4">{person.department}</td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-red-500 hover:underline">
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
