import React from "react";

function DeleteModal({closeModal}) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Delete Profile</h2>
        <p className="mb-6">
          Are you sure you want to delete this profile? This action cannot be
          undone.
        </p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
