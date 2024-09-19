import Image from "next/image";
import Amazing from "../../../public/images/Amazing view.jpg";

export default function RoomsHeroSection() {
  return (
    <section className="relative h-[100vh] md:h-[80vh] bg-gray-900 text-white">
      <Image
        width={1920}
        height={1080}
        quality={100}
        src={Amazing}
        alt="Luxury Suite"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Luxurious Accommodations
        </h1>
        <p className="text-xl md:text-2xl font-semibold  max-w-2xl">
          Experience unparalleled comfort and style in our meticulously designed
          rooms and suites.
        </p>
      </div>
    </section>
  );
}
