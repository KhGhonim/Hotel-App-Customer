"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function ProfileImageAndDropMenu() {
  const { data: session, status } = useSession();
  const [IsPhotoClicked, setIsPhotoClicked] = useState(false);

  return (
    <>
      {/* Profile image */}
      <button className="h-10 w-10 overflow-hidden rounded-full">
        <Image
          width={100}
          height={100}
          quality={100}
          src={session?.user?.ProfileImg}
          alt="User profile"
          className="h-full w-full object-cover"
          onClick={() => setIsPhotoClicked(!IsPhotoClicked)}
        />
      </button>

      {/* Profile dropdown */}
      <div
        className={`${
          IsPhotoClicked ? "block" : "hidden"
        } absolute top-full !z-50 right-0 mt-2 w-64 bg-white shadow-lg rounded-xl p-4 text-slate-700 text-center transition-transform transform ease-out duration-300`}
      >
        {status === "authenticated" && (
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Welcome, {session?.user?.Firstname} {session?.user?.Lastname}
            </p>
            <p className="text-sm text-gray-600 mb-4">{session?.user?.Email}</p>

            <button
              className="mt-4 !z-50 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition-colors"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}