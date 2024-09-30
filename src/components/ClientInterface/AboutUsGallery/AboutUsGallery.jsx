"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { rooms } from "DB/db";
import Image from "next/image";

export default function AboutUsGallery() {
  return (
    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {rooms.map((room, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              alt={room.title}
              width={600}
              height={400}
              src={room.photo}
              className="object-cover rounded cursor-pointer"
            />
            <p className="text-center">{room.title}</p>
            <p className="text-center">{room.description}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </>
  )
}
