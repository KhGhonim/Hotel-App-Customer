"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaSpinner, FaStar } from "react-icons/fa";
import UserPlaceHolder from "../../../../public/PlaceHolder.jpg";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function ResturantReviewSubmission() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!session) {
      toast.error("Please ensure you are logged in to submit a review");
      setIsLoading(false);
      return;
    }
    if (!rating || !review) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }
    // Handle form submission here
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SUBMIT_REVIEW}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          rating,
          review,
          id: session?.user?.id,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error("Error submitting review");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      toast.success("Review submitted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error submitting review");
      setIsLoading(false);
    } finally {
      setRating(0);
      setReview("");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full  p-6 grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center place-items-center bg-gray-50">
      <Toaster position="top-right" />
      <div className="w-full h-96 max-w-4xl  bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Restaurant Review</h2>
        <div className="flex items-center mb-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="h-12 w-12 mr-4 rounded-full overflow-hidden bg-gray-200">
              <Image
                width={100}
                height={100}
                src={session?.user?.ProfileImg || UserPlaceHolder}
                alt="User"
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-xs font-bold text-start text-gray-500">
              {session?.user?.Firstname} {session?.user?.Lastname}
            </h1>
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full p-1 ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
                aria-label={`Rate ${star} stars out of 5`}
              >
                <FaStar className="h-7 w-7" />
              </button>
            ))}
          </div>
        </div>
        <form onSubmit={handleReviewSubmit} className="mb-4">
          <textarea
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
            minLength={5}
            maxLength={500}
          />
          <div className="flex justify-end mb-4">
            <p className="text-xs text-gray-500">{review.length}/500</p>
          </div>
          {review.length > 499 && (
            <p className="text-red-500 text-xs">
              Review must be less than 500 characters
            </p>
          )}

          <button
            type="submit"
            disabled={IsLoading}
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600"
          >
            {IsLoading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              "Submit Review"
            )}
          </button>
        </form>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.4704933444532!2d28.978412721832072!3d41.00759709235088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bc45ca8d25%3A0xa5d669769ae3977d!2sFour%20Seasons%20Hotel%20Istanbul%20At%20Sultanahmet!5e0!3m2!1sen!2str!4v1730283348680!5m2!1sen!2str"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
