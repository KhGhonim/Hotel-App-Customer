"use client";

import { useState } from "react";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";

export default function page() {
  const [rooms, setRooms] = useState([
    {
      id: "1",
      name: "#12341225 Deluxe A-91234",
      image: "/placeholder.svg",
      bedType: "Double Bed",
      floor: "Floor A-1",
      facilities: [
        "AC",
        "Shower",
        "Double Bed",
        "Towel",
        "Bathup",
        "Coffee Set",
        "LED TV",
        "Wifi",
      ],
      rate: 145,
      status: "ACTIVE",
    },
    {
      id: "2",
      name: "#12341226 Deluxe A-91235",
      image: "/placeholder.svg",
      bedType: "Double Bed",
      floor: "Floor A-1",
      facilities: [
        "AC",
        "Shower",
        "Double Bed",
        "Towel",
        "Bathup",
        "Coffee Set",
        "LED TV",
        "Wifi",
      ],
      rate: 145,
      status: "BOOKED",
    },
    // Add more room data as needed
  ]);

  const [filter, setFilter] = useState("ALL");
  const [sort, setSort] = useState("NEWEST");

  const filteredRooms = rooms.filter((room) => {
    if (filter === "ALL") return true;
    return room.status === filter;
  });

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sort === "NEWEST") {
      return b.id.localeCompare(a.id);
    } else {
      return a.id.localeCompare(b.id);
    }
  });

  const handleAddRoom = () => {
    // Implement add room functionality
    console.log("Add new room");
  };

  const handleDeleteRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const handleEditRoom = (id) => {
    // Implement edit room functionality
    console.log("Edit room", id);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <button
            className={`rounded-md px-4 py-2 ${
              filter === "ALL"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("ALL")}
          >
            All Rooms
          </button>
          <button
            className={`rounded-md px-4 py-2 ${
              filter === "ACTIVE"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("ACTIVE")}
          >
            Active
          </button>
          <button
            className={`rounded-md px-4 py-2 ${
              filter === "BOOKED"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("BOOKED")}
          >
            Booked
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center space-x-2 rounded-md bg-green-600 px-4 py-2 text-white"
            onClick={handleAddRoom}
          >
            <BiPlus className="h-5 w-5" />
            <span>New Room</span>
          </button>
          <div className="relative">
            <button className="flex items-center space-x-2 rounded-md border border-gray-300 px-4 py-2">
              <span>{sort === "NEWEST" ? "Newest" : "Oldest"}</span>
              <FaArrowDown className="h-5 w-5" />
            </button>
            <ul className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg">
              <li>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => setSort("NEWEST")}
                >
                  Newest
                </button>
              </li>
              <li>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => setSort("OLDEST")}
                >
                  Oldest
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="px-4 py-2">Room Name</th>
              <th className="px-4 py-2">Room Image</th>
              <th className="px-4 py-2">Bed Type</th>
              <th className="px-4 py-2">Room Floor</th>
              <th className="px-4 py-2">Facilities</th>
              <th className="px-4 py-2">Rate</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedRooms.map((room) => (
              <tr key={room.id} className="border-b">
                <td className="px-4 py-2">{room.name}</td>
                <td className="px-4 py-2">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-16 w-24 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-2">{room.bedType}</td>
                <td className="px-4 py-2">{room.floor}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-1">
                    {room.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-200 px-2 py-1 text-xs"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">Price ${room.rate} /night</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      room.status === "ACTIVE"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <button className="text-gray-500 hover:text-gray-700">
                      <MdMoreVert className="h-5 w-5" />
                    </button>
                    <ul className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg">
                      <li>
                        <button
                          className="flex w-full items-center px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => handleEditRoom(room.id)}
                        >
                          <BiEdit className="mr-2 h-4 w-4" />
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="flex w-full items-center px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                          onClick={() => handleDeleteRoom(room.id)}
                        >
                          <BiTrash className="mr-2 h-4 w-4" />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
