import Image from "next/image";
import HotelEntrance from "../../../../public/images/Entrance-scaled.jpg.webp";

export default function AboutUsHeroSection() {
  return (
    <section className="w-full h-full md:h-dvh flex flex-col gap-10 px-4 md:px-0 lg:flex-row pt-32 pb-5 md:py-32 md:pr-32  bg-gray-900">
      <div className="w-full  lg:p-32 flex flex-col justify-center">
        <h2 className="text-sm text-white mb-4"> Welcome To </h2>
        <h1 className="text-4xl lg:text-6xl text-white font-light mb-6">
          KG Cave Hotel
          <br />
          Green Building
        </h1>
        <p className="text-white mb-6 max-w-2xl">
          KG Cave Hotel combines luxury living experiences with city life,
          Located on the{" "}
          <span className="font-bold text-green-800"> European Side</span>, in
          the heart of <span className="font-bold text-red-500">Taksim</span>{" "}
          Square.
        </p>
        <p className="text-white mb-6 max-w-2xl">
          KG Cave Hotel offers unlimited possibilities and inspiring is a living
          space in itself with its experiences. Many numerous food and beverage
          venues, wellness and spa experiences, meeting areas, an
          environmentally friendly building and on the 48th floor - a step into
          the sky KG Cave Hotel is flawless with its Skyview Observation Terrace
          offers a living space.
        </p>
        <button className="bg-black rounded-lg text-white hover:bg-gray-800 px-6 py-3 transition-all duration-500 w-fit">
          Discover Our Eco-Friendly Building
        </button>
      </div>
      <div className="w-full bg-gray-100  relative rounded-3xl ">
        <Image
          width={1920}
          height={1080}
          quality={100}
          src={HotelEntrance}
          alt="KG Cave Hotel Entrance"
          className=" w-full  h-full  object-center rounded-3xl  object-cover"
        />
      </div>
    </section>
  );
}
