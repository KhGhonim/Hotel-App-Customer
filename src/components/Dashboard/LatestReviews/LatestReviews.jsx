"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Slider from "./Slider";

export default function LatestReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const FetchReviews = async () => {
      const res = await fetch(`/api/reservation/reviews`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        return;
      }

      setReviews(data);
    };

    FetchReviews();
  }, []);


  if (!reviews || reviews.length === 0) {
    return (
      <div className="flex justify-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="my-8  w-full">
      <Slider reviews={reviews} />
    </div>
  );
}
