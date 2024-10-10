"use client";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { FaSpinner, FaTrash } from "react-icons/fa";

export default function SharingGrid({
  RoomDataGrid,
  Col1,
  Col2,
  Col3,
  Col4,
  Col5,
  Col6,
  setIsUpdateModalOpen,
  setUpdateDetils,
  setIsDeleteModalOpen
}) {
  const columns = [
    { field: "id", headerName: "ID", width: 60, editable: false },
    {
      field: Col1,
      headerName: "Room Details",
      editable: false,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row: { room_details } }) => {
        return (
          <div className="flex items-center gap-6">
            {/* Image */}
            <img
              src={room_details?.image}
              alt={room_details?.title}
              className="w-20 h-20 object-cover rounded-lg"
            />

            {/* Title and Room View */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-gray-800 text-xs">
                {room_details?.title}
              </h3>
            </div>
          </div>
        );
      },
    },
    {
      field: Col2,
      headerName: Col2,
      width: 100,
      editable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: Col3,
      headerName: Col3,
      width: 450,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { services } }) => (
        <div className="flex gap-2  items-center h-full">
          {services?.map((service, i) => (
            <span
              key={i}
              className="text-xs text-gray-600 transition-all duration-300 px-2 py-1 capitalize bg-gray-200 rounded text-center hover:bg-gray-300"
            >
              {service}
            </span>
          ))}
        </div>
      ),
    },
    {
      field: Col4,
      headerName: Col4,
      type: "number",
      width: 50,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { rating } }) => (
        <span
          className={`text-white text-sm ${`bg-${
            rating > 3 ? "green-500" : rating <= 1 ? "red-500" : "gray-500"
          } px-2 py-1 rounded`}`}
        >
          {rating}
        </span>
      ),
    },
    {
      field: Col5,
      headerName: Col5,
      width: 100,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { room_availability } }) => (
        <div className="flex justify-center items-center h-full">
          <span
            className={`text-sm ${
              room_availability === true
                ? "text-white bg-green-500"
                : "text-white bg-red-500"
            } rounded-lg p-2`}
          >
            {room_availability ? "Available" : "Booked"}
          </span>
        </div>
      ),
    },
    {
      field: Col6,
      headerName: Col6,
      width: 150,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex gap-3 justify-center items-center h-full">
          <button
            onClick={() => {
              setIsUpdateModalOpen(true);
              setUpdateDetils(params.row);
            }}
            className="p-2 bg-blue-500 rounded hover:bg-blue-600 text-white transition-all"
          >
            <BiEdit className="h-5 w-5" />
          </button>
          <button
          onClick={() => {
            setIsDeleteModalOpen(true);
            setUpdateDetils(params.row);
          }
          }
            className="p-2 bg-red-500 rounded hover:bg-red-600 text-white transition-all"
          >
            <FaTrash className="h-5 w-5" />
          </button>
        </div>
      ),
    },
  ];

  if (!RoomDataGrid || RoomDataGrid.length === 0) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  return (
    <div className={`w-full h-4/5 mt-6 transition-all duration-300`}>
      <DataGrid
        rows={RoomDataGrid}
        // @ts-ignore
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        className="shadow-lg rounded-lg border border-gray-200 bg-white"
      />
    </div>
  );
}
