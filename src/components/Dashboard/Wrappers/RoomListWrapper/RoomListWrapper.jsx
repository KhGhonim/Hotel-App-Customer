"use client";
import DeleteRoomModel from "components/Dashboard/DeleteRoomModel/DeleteRoomModel";
import SharingGrid from "components/Dashboard/Grid/SharingGrid";
import GridModel from "components/Dashboard/GridModel/GridModel";
import GridUpdateModal from "components/Dashboard/GridUpdateModal/GridUpdateModal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function RoomListWrapper() {
  // @ts-ignore
  const { IsSideBarOpened } = useSelector((state) => state.Users);
  const [RoomDataGrid, setRoomDataGrid] = useState([]);
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const [IsUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [UpdateDetils, setUpdateDetils] = useState([]);
  const [Col1] = useState("Room_Details");
  const [Col2] = useState("bed_type");
  const [Col3] = useState("Facilities");
  const [Col4] = useState("Rate");
  const [Col5] = useState("room_availability");
  const [Col6] = useState("Actions");
  const [DeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const FetchRoomDataGrid = async (params) => {
      const res = await fetch(process.env.NEXT_PUBLIC_RoomDataGrid, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        return;
      }

      setRoomDataGrid(data);
    };

    FetchRoomDataGrid();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-slate-100 h-dvh w-full relative">
      <div className="absolute right-0 top-28">
        <button
          onClick={() => setIsModelOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 lg:py-2 lg:px-4 rounded flex items-center transition-all duration-300 "
        >
          Add a Room{" "}
          <span>
            <BiPlus />
          </span>
        </button>
      </div>

      <div
        className={` transition-all duration-300 h-full bg-gray-100 flex flex-1 flex-col pt-16  ${
          IsSideBarOpened ? "pl-44" : "pl-14 lg:pl-0 "
        } container mx-auto`}
      >
        <h1 className="text-2xl font-bold mb-4">Room List</h1>
        <p className="text-gray-600 my-1">
          Here you can view the list of all rooms in your hotel.
        </p>

        <SharingGrid
          Col1={Col1}
          Col2={Col2}
          Col3={Col3}
          Col4={Col4}
          Col5={Col5}
          Col6={Col6}
          RoomDataGrid={RoomDataGrid}
          setUpdateDetils={setUpdateDetils}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      </div>
      <GridModel IsModelOpen={IsModelOpen} setIsModelOpen={setIsModelOpen} />
      <GridUpdateModal
        UpdateDetils={UpdateDetils}
        IsUpdateModalOpen={IsUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        setRoomDataGrid={setRoomDataGrid}
      />
      <DeleteRoomModel
        DeleteModalOpen={DeleteModalOpen}
        UpdateDetils={UpdateDetils}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
      />
    </div>
  );
}
