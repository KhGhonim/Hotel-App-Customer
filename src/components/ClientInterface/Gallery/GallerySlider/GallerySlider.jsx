"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { HomeGallery } from "DB/db";
import { Autoplay } from "swiper/modules";

export default function GallerySlider() {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {HomeGallery.map((photo, i) => {
          return (
            <SwiperSlide key={i} className="cursor-pointer">
              <Image
                alt={`${i}`}
                width={600}
                height={400}
                src={photo.photo}
                priority={true}
                quality={100}
                className="object-cover rounded cursor-pointer"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
