import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FaSpinner } from "react-icons/fa";

export default function ReviewsGrid({
  ReviewsGrid,
  Col1,
  Col2,
  Col3,
  Col4,
  Col5,
}) {
  const columns = [
    { field: "user_id", headerName: "ID", width: 60, editable: false },
    {
      field: Col1,
      headerName: "Title and Photo",
      editable: false,
      headerAlign: "center",
      align: "center",
      width: 250,
      renderCell: ({ row: { review_details } }) => {
        return (
          <div className="flex items-center gap-6">
            {/* Image */}
            <img
              src={review_details?.image}
              alt={review_details?.title}
              className="w-10 h-10 object-cover rounded-full"
            />

            {/* Title and Room View */}
            <div className="flex flex-row gap-1">
              <h3 className="font-semibold text-gray-800 text-xs">
                {review_details?.title}
              </h3>
              <h3 className="font-semibold text-gray-800 text-xs">
                {review_details?.Soyadi}
              </h3>
            </div>
          </div>
        );
      },
    },
    {
      field: Col2,
      headerName: "Description",
      width: 450,
      editable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: Col3,
      headerName: "Created At",
      width: 150,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { created_at } }) => (
        <span className="text-xs text-gray-600 transition-all duration-300 px-2 py-1 capitalize bg-gray-200 rounded text-center hover:bg-gray-300">
          {created_at.slice(0, 10)}
        </span>
      ),
    },
    {
      field: Col4,
      headerName: "Rate",
      type: "number",
      width: 100,
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
      headerName: "Response from Manager",
      width: 200,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { responded } }) => (
        <div className="flex justify-center items-center h-full">
          <span
            className={`text-sm ${
              responded === true
                ? "text-white bg-green-500"
                : responded === null
                ? "text-white bg-slate-500"
                : "text-white bg-red-500"
            } rounded-lg p-2`}
          >
            {responded === true
              ? "Approved"
              : responded === null
              ? "Pending"
              : "Rejected"}
          </span>
        </div>
      ),
    },
    // {
    //   field: Col6,
    //   headerName: Col6,
    //   width: 150,
    //   editable: false,
    //   headerAlign: "center",
    //   align: "center",
    //   renderCell: (params) => (
    //     <div className="flex gap-3 justify-center items-center h-full">
    //       <button
    //         onClick={() => {
    //           setIsUpdateModalOpen(true);
    //           setUpdateDetils(params.row);
    //         }}
    //         className="p-2 bg-blue-500 rounded hover:bg-blue-600 text-white transition-all"
    //       >
    //         <BiEdit className="h-5 w-5" />
    //       </button>
    //       <button
    //         onClick={() => {
    //           setIsDeleteModalOpen(true);
    //           setUpdateDetils(params.row);
    //         }}
    //         className="p-2 bg-red-500 rounded hover:bg-red-600 text-white transition-all"
    //       >
    //         <FaTrash className="h-5 w-5" />
    //       </button>
    //     </div>
    //   ),
    // },
  ];

  if (!ReviewsGrid || ReviewsGrid.length === 0) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  return (
    <div className={`w-full h-4/5 mt-6 transition-all duration-300`}>
      <DataGrid
        rows={ReviewsGrid}
        getRowId={(row) => row?.user_id}
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
