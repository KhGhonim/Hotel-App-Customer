import Facilities from "components/Facilities/Facilities";
import Gallery from "components/Gallery/Gallery";
import HeroSection from "components/HeroSection/HeroSection";
import MiniHeroSection from "components/MiniHeroSection/MiniHeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MiniHeroSection />
      <Facilities />
      <Gallery />
    </div>
  );
}
