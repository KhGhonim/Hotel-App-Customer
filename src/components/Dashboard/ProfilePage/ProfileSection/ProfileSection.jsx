"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaSpinner } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import UserPlaceHolder from "../../../../../public/PlaceHolder.jpg";

export default function ProfileSection() {
  const { data: session, status } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [Form, setForm] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    role: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [avatartoBE, setavatartoBE] = useState(null);
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setavatartoBE(file);
    }
  };

  const handleSave = async (eo) => {
    eo.preventDefault();

    setIsEditing(false);
    setIsLoading(true);

    if (!avatar || !avatartoBE) {
      toast.error("Please select an avatar");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("FirstName", Form.FirstName);
    formData.append("LastName", Form.LastName);
    formData.append("email", Form.email);
    formData.append("role", Form.role);
    formData.append("ProfileImg", avatartoBE);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_UpdateUser}?id=${session?.user?.id}`,
        {
          method: "POST",
          credentials: "include",
          cache: "no-store",
          body: formData,
        }
      );

      if (!res.ok) {
        toast.error("Error updating profile");
        setIsLoading(false);
        return;
      }

      toast.success("Profile updated successfully");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleEdit = (eo) => {
    setForm({ ...Form, [eo.target.name]: eo.target.value });
  };
  return (
    <>
      {/* Profile Section */}
      <div className=" w-full bg-white  p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-gray-700">
          User Profile
        </h2>

        <div className="flex items-center space-x-6 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 shadow-md">
            {isEditing ? (
              <div className="w-full h-full relative">
                <Image
                  src={avatar || session?.user?.ProfileImg || UserPlaceHolder}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleAvatarChange}
                />
                {!avatar && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <FaEdit className="text-white text-2xl" />
                  </div>
                )}
              </div>
            ) : (
              <Image
                src={session?.user?.ProfileImg || UserPlaceHolder}
                alt="Profile"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
              {session?.user?.Firstname} {session?.user?.Lastname}
            </h3>
            <p className="text-sm capitalize text-gray-500">
              {session?.user?.Role}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {isEditing ? (
            <form onSubmit={handleSave}>
              <div className="flex flex-col relative">
                <div>
                  <MdClose
                    className="absolute -top-5 text-2xl text-gray-600 cursor-pointer right-0"
                    onClick={() => setIsEditing(false)}
                  />
                </div>
                <select
                  name="role"
                  onChange={handleEdit}
                  defaultValue={Form.role || session?.user?.Role}
                  className="border capitalize border-gray-300 rounded-lg p-2 mt-2 outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option className="capitalize" value="admin">
                    admin
                  </option>
                  <option className="capitalize" value="user">
                    user
                  </option>
                  <option className="capitalize" value="guest">
                    guest
                  </option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  className="text-sm font-medium text-gray-600"
                  htmlFor="First Name"
                >
                  First Name
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 mt-2 outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  defaultValue={Form.FirstName || session?.user?.Firstname}
                  onChange={handleEdit}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-sm font-medium text-gray-600"
                  htmlFor="Last Name"
                >
                  Last Name"
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 mt-2 outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  id="LastName"
                  name="LastName"
                  defaultValue={Form.LastName || session?.user?.Lastname}
                  onChange={handleEdit}
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
                  className="border border-gray-300 rounded-lg p-3 mt-2  outline-none focus:ring-2 focus:ring-blue-400"
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={Form.email || session?.user?.Email}
                  onChange={handleEdit}
                />
              </div>
              <button
                type="submit"
                disabled={IsLoading}
                className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all"
              >
                {IsLoading ? (
                  <div className="flex w-full h-full items-center justify-center">
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </form>
          ) : (
            <>
              <div className="space-y-1">
                <span className="text-sm font-medium text-gray-600">Email</span>
                <p className=" text-gray-800">{session?.user?.Email}</p>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-gray-600">
                  Department
                </span>
                <p className="capitalize text-gray-800">
                  {session?.user?.Role}
                </p>
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
    </>
  );
}
