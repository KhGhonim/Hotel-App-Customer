"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { HeroSectionSliderDB } from "DB/db";
import { motion } from "framer-motion";
import { useState } from "react";

const SliderTitle = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeIn",
      stiffness: 100,
      damping: 10,
      duration: 1,
    },
  },
};

export default function HeroSectionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 5500,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper w-full !h-dvh relative"
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {HeroSectionSliderDB.map((slider, index) => {
          return (
            <SwiperSlide className="relative" key={index}>
              <img src={slider.image} className="w-full h-dvh object-cover" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.8)_100%)]"></div>
              <motion.div
                variants={SliderTitle}
                key={currentSlide}
                initial="hidden"
                animate="visible"
                className="absolute transform top-1/3 left-0  w-full z-20 h-dvh p-10 "
              >
                <h1 className="text-white text-2xl md:text-3xl lg:text-5xl max-w-4xl font-cairo font-[700] capitalize">
                  {slider.title}
                </h1>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
