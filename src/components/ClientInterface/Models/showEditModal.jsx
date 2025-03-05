"use client"
import Image from 'next/image'
import { useRef } from 'react';

function EditModel({closeModal}) {
  const ref = useRef(null);

  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white z-50  p-6 rounded-md shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form>
        <div className="mb-4 flex justify-center">
          <Image
            src="/placeholder.svg"
            alt="Profile picture"
            width={90}
            height={90}
            className="rounded-full border-4 border-gray-200 shadow-lg w-32 h-32 object-cover cursor-pointer"
            onClick={() => ref.current.click()}
          />
          <input
            ref={ref}
            id="file-upload"
            name="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EditModel