import Facilities from "components/ClientInterface/Facilities/Facilities";
import Footer from "components/ClientInterface/Footer/Footer";
import Gallery from "components/ClientInterface/Gallery/Gallery";
import GuestExperiences from "components/ClientInterface/GuestExperiences/GuestExperiences";
import Header from "components/ClientInterface/Header/Header";
import HeroSection from "components/ClientInterface/HeroSection/HeroSection";
import MiniHeroSection from "components/ClientInterface/MiniHeroSection/MiniHeroSection";
import SpecialEventsCelebrations from "components/ClientInterface/SpecialEventsCelebrations/SpecialEventsCelebrations";

export const metadata = {
  title: "LuxeStay Hotel",
  description:
    "Experience the flavors of Turkiye in the heart of the city. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MiniHeroSection />
      <Facilities />
      <Gallery />
      <GuestExperiences />
      <SpecialEventsCelebrations />
      <Footer />
    </div>
  );
}
