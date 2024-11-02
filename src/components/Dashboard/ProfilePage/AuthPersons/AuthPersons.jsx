"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

export default function AuthPersons() {
  const [UsersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsersData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_GetAllUsers}`);
        const data = await response.json();
        setUsersData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DeleteUser}?id=${id}`, {
      method: "POST",
      credentials: "include",
      cache: "no-store",
    });

    const data = await res.json();
    if (data.success) {
      toast.success("User deleted successfully");
      setUsersData(UsersData.filter((user) => user.id !== id));
    } else {
      toast.error("Error deleting user");
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-white p-8 w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr className="w-full h-full items-center justify-center">
                  <td
                    colSpan={4}
                    className="w-full h-full items-center justify-center py-4"
                  >
                    <FaSpinner className="animate-spin" />
                  </td>
                </tr>
              ) : UsersData.length === 0 ? (
                <tr className="w-full h-full items-center justify-center">
                  <td colSpan={4} className="text-center py-4">
                    No data available
                  </td>
                </tr>
              ) : (
                UsersData.map((person) => (
                  <tr
                    key={person.id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 capitalize font-medium text-xs md:text-sm  lg:text-base">
                      {person.first_name} {person.last_name}
                    </td>
                    <td
                      className={`py-3 px-4 text-xs md:text-sm  lg:text-base capitalize text-center ${
                        person.user_role === "admin"
                          ? "bg-red-500 text-white rounded"
                          : person.user_role === "user"
                          ? "bg-green-500 text-white rounded"
                          : ""
                      }`}
                    >
                      {person.user_role}
                    </td>
                    <td className="py-3 text-xs md:text-sm  lg:text-base px-4">{person.email_address}</td>
                    <td className="py-3 px-4 text-center">
                      <div onClick={() => handleDelete(person.id)} className="text-red-500 flex justify-center items-center cursor-pointer">
                        <IoTrashBinSharp />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
