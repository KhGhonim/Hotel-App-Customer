import Image from "next/image";
import Resturant from '../../../public/images/Hotel Photos/4.jpg'

export default function ResturantHeroSection({restaurantData}) {
  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
      <Image
        width={1200}
        height={400}
        src={Resturant}
        alt={restaurantData.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          {restaurantData.name}
        </h1>
      </div>
    </div>
  );
}
