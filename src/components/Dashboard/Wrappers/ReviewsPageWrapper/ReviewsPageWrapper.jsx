"use client";
import ReviewsGrid from "components/Dashboard/ReviewsGrid/ReviewsGrid";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function ReviewsPageWrapper() {
  // @ts-ignore
  const { IsSideBarOpened } = useSelector((state) => state.Users);
  const [ReviewDataGrid, setReviewDataGrid] = useState([]);
  const [Col1] = useState("review_Details");
  const [Col2] = useState("content");
  const [Col3] = useState("created_at");
  const [Col4] = useState("rating");
  const [Col5] = useState("responded");
  useEffect(() => {
    const FetchReviewDataGrid = async (params) => {
      const res = await fetch(process.env.NEXT_PUBLIC_ReviewGrid, {
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

      setReviewDataGrid(data);
    };

    FetchReviewDataGrid();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-slate-100 h-dvh w-full relative">
      <div
        className={` transition-all duration-300 h-full bg-gray-100 flex flex-1 flex-col pt-16  ${
          IsSideBarOpened ? "pl-44" : "pl-14 lg:pl-0 "
        } container mx-auto`}
      >
        <h1 className="text-2xl font-bold mb-4">Room List</h1>
        <p className="text-gray-600 my-1">
          Here you can view the list of all rooms in your hotel.
        </p>

        <ReviewsGrid
          Col1={Col1}
          Col2={Col2}
          Col3={Col3}
          Col4={Col4}
          Col5={Col5}
          ReviewsGrid={ReviewDataGrid}
        />
      </div>
    </div>
  );
}
