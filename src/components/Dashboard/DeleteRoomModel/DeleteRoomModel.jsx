"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteRoomModel({
  setIsDeleteModalOpen,
  UpdateDetils,
  DeleteModalOpen,
}) {
  const [IsLoading, setIsLoading] = useState(false);
  const onDelete = async () => {
    setIsLoading(true);
    // Implement your delete logic here
    const res = await fetch(`/api/DeleteRoom?id=${UpdateDetils?.id}`, {
      method: "POST",
      credentials: "include",
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) {
      toast.error(data.error);
    } else {
      toast.success("Room deleted successfully");
      setIsDeleteModalOpen(false);
      window.location.reload();
    }
    setIsDeleteModalOpen(false);
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        DeleteModalOpen ? "block" : "hidden"
      }`}
    >
      <form
        onSubmit={onDelete}
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6"
      >
        <h2 className="text-lg font-semibold mb-4">Delete Room</h2>
        <p>
          Are you sure you want to delete the room title "
          {UpdateDetils?.room_details?.title}"? This action cannot be undone.
        </p>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => {
              setIsDeleteModalOpen(false);
            }}
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={IsLoading}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
