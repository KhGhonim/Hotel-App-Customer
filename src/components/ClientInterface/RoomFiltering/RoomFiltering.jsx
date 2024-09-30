"use client";
import { useEffect, useState } from "react";
import FinalProducts from "./FinalProducts";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import RoomsCard from "../RoomsCard/RoomsCard";

export default function RoomFiltering() {
  const [bedType, setBedType] = useState("all");
  const [roomType, setRoomType] = useState("all");
  const [roomView, setRoomView] = useState("all");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const GetAllRoomsData = async () => {
      const res = await fetch(`http://localhost:3000/api/reservation/rooms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      }

      setRooms(data);
    };

    GetAllRoomsData();
  }, []);

  function CardFiltiring() {
    let AllData = rooms;
    AllData = rooms?.filter((room) => {
      return (
        (bedType === "all" || room.bed_type === bedType) &&
        (roomType === "all" || room.room_type === roomType) &&
        (roomView === "all" || room.room_view === roomView)
      );
    });

    return AllData.map(
      ({
        id,
        title,
        image,
        description,
        bed_type,
        room_type,
        room_view,
        services,
        rating,
        price_per_night,
      }) => (
        <RoomsCard
          key={Math.floor(Math.random() * 1000)}
          title={title}
          image={image}
          description={description}
          bedType={bed_type}
          roomType={room_type}
          roomView={room_view}
          services={services}
          rating={rating}
          pricePerNight={price_per_night}
          id={id}
        />
      )
    );
  }
  const data = CardFiltiring();
  return (
    <section className="py-16  bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Bed Type */}
          <div>
            <select
              value={bedType}
              onChange={(e) => setBedType(e.target.value)}
              className="w-[180px] px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Bed Types</option>
              <option value="King Bed">King Bed</option>
              <option value="Twin Bed">Twin Bed</option>
            </select>
          </div>

          {/* Room Type */}
          <div>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-[180px] px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Room Types</option>
              <option value="Residence">Residence</option>
              <option value="Room">Room</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Room View */}
          <div>
            <select
              value={roomView}
              onChange={(e) => setRoomView(e.target.value)}
              className="w-[180px] px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Views</option>
              <option value="City View">City View</option>
              <option value="Square View">Square View</option>
              <option value="Sea View">Sea View</option>
            </select>
          </div>
        </div>
      </div>

      {/* Rooms */}

      {!data ? (
        <p className="text-3xl font-bold text-center">
          No Room Found! Please Try Again With Different Teypes.
        </p>
      ) : data.length > 0 ? (
        <FinalProducts result={data} />
      ) : (
        <div className="flex justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      )}
    </section>
  );
}
