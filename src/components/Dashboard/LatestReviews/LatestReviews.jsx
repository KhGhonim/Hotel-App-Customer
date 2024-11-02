"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Slider from "./Slider";

export default function LatestReviews() {
  const [reviews, setReviews] = useState([]);
  const [refreshing, setrefreshing] = useState(false);

  const handleAccept = async (currentIndex) => {
    if (currentIndex === null) {
      toast.error("Please select a review to accept");
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_handleAcceptAPI}?id=${currentIndex}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        return;
      }
      setrefreshing(true);
      toast.success("Review accepted and will be displayed on Hotel website");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setrefreshing(false);
    }
  };

  const handleRefuse = async (currentIndex) => {
    // refuse the review and change it response accordingly into true
    try {
      if (currentIndex === null) {
        toast.error("Please select a review to accept");
        return;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_handleRefuseAPI}?id=${currentIndex}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        return;
      }

      setrefreshing(true);
      toast.success(
        "Review refused and will not be displayed on Hotel website"
      );
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setrefreshing(false);
    }
  };

  useEffect(() => {
    const FetchReviews = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LatestReviews}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error("Error fetching reviews");
        return;
      }

      setReviews(data);
    };

    FetchReviews();
  }, [refreshing]);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="flex justify-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="my-8  w-full">
      <Slider
        handleAccept={handleAccept}
        handleRefuse={handleRefuse}
        reviews={reviews}
      />
    </div>
  );
}
