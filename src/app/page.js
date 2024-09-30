import AboutUSHome from "components/ClientInterface/AboutUSHome/AboutUSHome";
import Facilities from "components/ClientInterface/Facilities/Facilities";
import Footer from "components/ClientInterface/Footer/Footer";
import Gallery from "components/ClientInterface/Gallery/Gallery";
import Header from "components/ClientInterface/Header/Header";
import HeroSection from "components/ClientInterface/HeroSection/HeroSection";
import MiniHeroSection from "components/ClientInterface/MiniHeroSection/MiniHeroSection";


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
