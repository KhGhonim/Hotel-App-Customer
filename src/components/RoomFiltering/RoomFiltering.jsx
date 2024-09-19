"use client";
import RoomsCard from "components/RoomsCard/RoomsCard";
import { rooms } from "DB/db";
import { useState } from "react";
import FinalProducts from "./FinalProducts";

export default function RoomFiltering() {
  const [bedType, setBedType] = useState("all");
  const [roomType, setRoomType] = useState("all");
  const [roomView, setRoomView] = useState("all");

  function CardFiltiring() {
    let AllData = rooms;
    AllData = rooms.filter((room) => {
      return (
        (bedType === "all" || room.bedType === bedType) &&
        (roomType === "all" || room.roomType === roomType) &&
        (roomView === "all" || room.roomView === roomView)
      );
    });

    return AllData.map(
      ({
        id,
        title,
        image,
        description,
        bedType,
        roomType,
        roomView,
        services,
        rating,
        pricePerNight,
      }) => (
        <RoomsCard
          key={Math.floor(Math.random() * 1000)}
          title={title}
          image={image}
          description={description}
          bedType={bedType}
          roomType={roomType}
          roomView={roomView}
          services={services}
          rating={rating}
          pricePerNight={pricePerNight}
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

      {data.length > 0 ? (
        <FinalProducts result={data} />
      ) : (
        <p className="text-3xl font-bold text-center">
          No Room Found! Please Try Again With Different Teypes.
        </p>
      )}
    </section>
  );
}
