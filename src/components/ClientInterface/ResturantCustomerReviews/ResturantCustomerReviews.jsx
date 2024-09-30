"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
export default function ResturantCustomerReviews({ restaurantData }) {
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
        {restaurantData.reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="p-3  bg-white w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center w-full h-32 md:h-44 gap-4">
              <Image
                width={50}
                height={50}
                src={review.avatar}
                alt={review.name}
                className="rounded-full shadow-md"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {review.name}
                </h3>
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
            <p className="text-gray-700 leading-relaxed italic">{`"${review.comment}"`}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
