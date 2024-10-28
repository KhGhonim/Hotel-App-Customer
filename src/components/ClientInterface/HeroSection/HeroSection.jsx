"use client";
import HeroSectionSlider from "./HeroSectionSlider/HeroSectionSlider";
import { CiClock2, CiCloud } from "react-icons/ci";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Rezervation from "../Rezervation/Rezervation";
import toast from "react-hot-toast";

export default function HeroSection() {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(false);
  const [test, settest] = useState(null);

  useEffect(() => {
    const SearchTool = async () => {
      setloading(true);
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_WEATHER_API);
        const data = await res.json();
        setdata(data);
        setloading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    SearchTool();
  }, []);

  useEffect(() => {
    const testdb = async () => {
      const res = await fetch("/api/testdb");
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      }
      toast.success(data.message);

      settest(data.time);
    };

    testdb();
  }, []);
  return (
    <div className="w-full h-dvh relative font-cairo">
      <div className="hidden md:block absolute z-10 top-1/4 space-y-10 right-10 text-white font-cairo font-[500]">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-5 text-2xl lg:text-5xl">
            <CiClock2 />
            <span>{moment().format("HH:mm")}</span>
          </div>
          <p className="text-3xl font-[300]">{moment().format("DD-MM-YYYY")}</p>{" "}
        </div>

        <div className="text-white font-cairo font-[300]   text-2xl lg:text-5xl flex flex-col items-center justify-center">
          <CiCloud />
          <p className="leading-loose text-lg lg:text-3xl">
            {loading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              (((data?.main?.temp - 32) * 5) / 9).toFixed(0)
            )}
            °C
          </p>
          <p className=" font-[500] tracking-widest text-lg lg:text-3xl">
            Istanbul
          </p>
        </div>
      </div>

      <HeroSectionSlider />
      <Rezervation />
    </div>
  );
}
