"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { BiCheck } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import "swiper/css";
import "swiper/css/effect-cards";
import toast from "react-hot-toast";
import { useState } from "react";
export default function Slider({ reviews }) {
  const [localReviews, setLocalReviews] = useState(reviews);

  // Function to update reviews after an action (optimistic UI)
  const updateReviews = (id, action) => {
    const updatedReviews = localReviews.map((review) =>
      review.user_id === id ? { ...review, responded: action } : review
    );
    setLocalReviews(updatedReviews);
  };

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

      updateReviews(currentIndex, true);

      toast.success("Review accepted and will be displayed on Hotel website");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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

      updateReviews(currentIndex, false);

      toast.success(
        "Review refused and will not be displayed on Hotel website"
      );
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-96 max-w-2xl relative"
      >
        {localReviews
          .filter((review) => review.responded === null)
          .map((review, i) => {
            const date = new Date(review.created_at);
            const formattedDate = date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <SwiperSlide key={i}>
                <div className="p-8 md:p-16 m-4 md:m-10 h-72 md:h-80 bg-gray-100 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
                  {/* Review Content */}
                  <p className="text-sm md:text-base text-gray-800 mb-4 md:mb-6 leading-relaxed">
                    "{review?.content}"
                  </p>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                      {/* Author and Avatar */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Image
                            width={48}
                            height={48}
                            src={review?.avatar}
                            alt={review?.content}
                            quality={100}
                            className="rounded-full border-2 border-gray-700 w-10 h-10 md:w-12 md:h-12 shadow-md"
                          />
                        </div>
                        <div>
                          <p className="text-base md:text-lg font-semibold text-gray-800">
                            {review?.user_firstname} {review?.user_lastname}
                          </p>
                          <p className="text-xs md:text-sm text-gray-500">
                            {formattedDate}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center space-x-1 mt-4 md:mt-0">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 md:h-5 w-4 md:w-5 ${
                              index < review?.rating
                                ? "text-yellow-500"
                                : "text-gray-600"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.675h4.911c.969 0 1.371 1.24.588 1.81l-3.974 2.89 1.518 4.675c.3.921-.755 1.688-1.54 1.115l-3.974-2.89-3.975 2.89c-.784.573-1.839-.194-1.54-1.115l1.518-4.675-3.974-2.89c-.783-.57-.38-1.81.588-1.81h4.911L9.049 2.927z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end space-x-2">
                      {/* Accept Button */}
                      <button
                        className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-medium shadow-lg hover:from-green-500 hover:to-green-700 transition-all ease-in-out duration-500"
                        onClick={() => {
                          handleAccept(review.user_id);
                        }}
                      >
                        <BiCheck className="inline-block h-4 w-4 md:h-5 md:w-5 mr-1" />
                        Accept
                      </button>

                      {/* Refuse Button */}
                      <button
                        className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white font-medium shadow-lg hover:from-red-500 hover:to-red-700 transition-all ease-in-out duration-500"
                        onClick={() => {
                          handleRefuse(review.user_id);
                        }}
                      >
                        <CgClose className="inline-block h-4 w-4 md:h-5 md:w-5 mr-1" />
                        Refuse
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
