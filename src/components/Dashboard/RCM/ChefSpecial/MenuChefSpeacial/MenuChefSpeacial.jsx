import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { FaSpinner, FaTrash } from "react-icons/fa";

export default function MenuChefSpeacial({
  Col1,
  Col2,
  Col3,
  Col4,
  Col6,
  ResturantMenuChefSpeacialGrid,
}) {
  const columns = [
    { field: "id", headerName: "ID", width: 60, editable: false },
    {
      field: Col1,
      headerName: "Image",
      editable: false,
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: ({ row: { image } }) => {
        return (
          <div className="flex items-center justify-center gap-6">
            {/* Image */}
            <img
              src={image}
              alt={image}
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
        );
      },
    },
    {
      field: Col2,
      headerName: "Name",
      width: 200,
      editable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: Col3,
      headerName: "Description",
      width: 450,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { description } }) => (
        <div className="flex gap-2  items-center h-full">
          <p>{description}</p>
        </div>
      ),
    },
    {
      field: Col4,
      headerName: "Price",
      type: "number",
      width: 100,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { price } }) => (
        <span
          className={`text-white text-sm ${`bg-${
            price > 3 ? "green-500" : price <= 1 ? "red-500" : "gray-500"
          } px-2 py-1 rounded`}`}
        >
          {price}
        </span>
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
              // setIsUpdateModalOpen(true);
              // setUpdateDetils(params.row);
            }}
            className="p-2 bg-blue-500 rounded hover:bg-blue-600 text-white transition-all"
          >
            <BiEdit className="h-5 w-5" />
          </button>
          <button
            onClick={() => {}}
            className="p-2 bg-red-500 rounded hover:bg-red-600 text-white transition-all"
          >
            <FaTrash className="h-5 w-5" />
          </button>
        </div>
      ),
    },
  ];

  if (
    !ResturantMenuChefSpeacialGrid ||
    ResturantMenuChefSpeacialGrid.length === 0
  ) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  return (
    <div className={`w-full h-4/5 mt-6 transition-all duration-300`}>
      <DataGrid
        rows={ResturantMenuChefSpeacialGrid}
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
