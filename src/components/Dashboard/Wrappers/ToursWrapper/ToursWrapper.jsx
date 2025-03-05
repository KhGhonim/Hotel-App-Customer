import FrontCover from "../../../../../public/TourBook/1.png";
import Image2 from "../../../../../public/TourBook/3.png";
import Image1 from "../../../../../public/TourBook/2.png";
import Image3 from "../../../../../public/TourBook/4.png";
import Image4 from "../../../../../public/TourBook/5.png";
import Image5 from "../../../../../public/TourBook/6.png";
import Image6 from "../../../../../public/TourBook/7.png";
import Image7 from "../../../../../public/TourBook/8.png";
import Image8 from "../../../../../public/TourBook/9.png";
import Image9 from "../../../../../public/TourBook/10.png";
import Image10 from "../../../../../public/TourBook/11.png";
import Image11 from "../../../../../public/TourBook/12.png";
import Image12 from "../../../../../public/TourBook/13.png";
import LastPage from "../../../../../public/TourBook/15.png";
import Bg from "../../../../../public/TourBook/backGroundImgURL.jpg";
import Image from "next/image";
import PhotoBook from "app/(pages)/Tours/PhotoBook";
import Header from "components/ClientInterface/Header/Header";
import Footer from "components/ClientInterface/Footer/Footer";

const images = [
  FrontCover,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  LastPage,
];

function ToursWrapper() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with next/image fill */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Header */}
      <Header />

      {/* Centered PhotoBook */}
      <div className="flex justify-center items-center w-full h-full  pt-20">
        <PhotoBook images={images} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ToursWrapper;
