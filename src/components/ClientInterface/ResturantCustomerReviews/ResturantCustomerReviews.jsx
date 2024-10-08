"use client";
import Image from "next/image";
import { FaSpinner, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function ResturantCustomerReviews() {
  const [Reviews, setReviews] = useState(null);

  useEffect(() => {
    const FetchApprovedReviews = async () => {
      const res = await fetch(`/api/reservation/reviews/ApprovedReviews`, {
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

    FetchApprovedReviews();
  }, []);

  if (!Reviews) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  if (Reviews.length === 0) {
    return (
      <div className="flex justify-center">
        <p>No reviews yet</p>
      </div>
    );
  }

  return (
    <section className="pb-12 p-4 container mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Customer Reviews
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        className="grid md:grid-cols-4 gap-5 mySwiper"
      >
        {Reviews.filter((review) => review.responded === true).map(
          (review, index) => {
            const NewDate = new Date(review.created_at).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );
            return (
              <SwiperSlide
                key={index}
                className="p-3  bg-white w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center w-full h-28  gap-4">
                  <Image
                    width={50}
                    height={50}
                    src={review.avatar}
                    alt={review.author}
                    className="rounded-full shadow-md w-12 h-12 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {review.user_firstname} {review.user_lastname}
                    </h3>
                    <p className="text-gray-600 text-xs">{NewDate}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          className={`w-5 h-5 ${
                            starIndex < Math.floor(review.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">{`"${review.content}"`}</p>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
}
