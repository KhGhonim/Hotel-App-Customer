"use client";
import Image from "next/image";
import terace from "../../../../public/images/cay in terace.jpg";
import Amazing from "../../../../public/images/Amazing view.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MiniHeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  return (
    <section className="relative bg-white py-28 px-4 md:px-6">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase">
              LuxeStay HOTEL
            </h2>
            <h1 className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              LuxeStay Hotel
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              LuxeStay Hotel is a family-run boutique guesthouse in the heart of
              Istanbul overlooking Goreme National Park. KG Hotel is completely
              unique. Carved from Istanbul's natural rock and stone, the
              guesthouse is located a short walk from the centre of Arnavutkoy.
              Offering comfortable and cosy accommodation furnished with
              beautiful, locally produced carpets and family antiques. There are
              two individually designed rooms.
            </p>
            <p className="mt-3 text-2xl italic text-gray-700">
              The LuxeStay HOTEL
            </p>
          </div>
          <div className="relative">
            <Image
              src={terace}
              width={600}
              height={300}
              priority={true}
              quality={100}
              alt="Night view of   KG Cave Hotel"
              className="rounded-lg w-full h-96 object-cover shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ y }}
            >
              <Image
                src={Amazing}
                width={600}
                height={300}
                priority={true}
                quality={100}
                alt="Breakfast on the terrace with a scenic view"
                className="absolute hidden lg:block -bottom-20 -left-10 w-96 h-72  object-cover border-4 rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
