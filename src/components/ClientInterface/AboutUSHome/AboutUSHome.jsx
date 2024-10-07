"use client";
import { AboutUs } from "DB/db";
import Image from "next/image";
import Cityscape from "../../../../public/images/Cityscape with river.jpg";
import CountUp, { useCountUp } from "react-countup";
import Link from "next/link";

export default function AboutUSHome() {
  useCountUp({
    ref: "counter",
    end: 100,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });
  return (
    <section className="relative h-screen w-full  overflow-hidden">
      <Image
        src={Cityscape}
        alt="Cityscape with river"
        width={1920}
        height={1080}
        quality={100}
        priority={true}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 space-y-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-5xl">
          Catch Your Dream Holiday With Our Experience
        </h1>
        <div className="flex flex-wrap justify-center gap-10 mb-8">
          {AboutUs.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400">
                <CountUp end={stat.value} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
        <Link
          href="/#rezervation"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2  px-6 rounded transition-all duration-300"
        >
          Make A Reservation
        </Link>
      </div>
    </section>
  );
}
