import AboutUSHome from "components/AboutUSHome/AboutUSHome";
import Facilities from "components/Facilities/Facilities";
import Footer from "components/Footer/Footer";
import Gallery from "components/Gallery/Gallery";
import Header from "components/Header/Header";
import HeroSection from "components/HeroSection/HeroSection";
import MiniHeroSection from "components/MiniHeroSection/MiniHeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MiniHeroSection />
      <Facilities />
      <Gallery />
      <AboutUSHome />
      <Footer />
    </div>
  );
}
