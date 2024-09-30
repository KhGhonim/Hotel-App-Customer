import Footer from "components/ClientInterface/Footer/Footer";
import Header from "components/ClientInterface/Header/Header";
import RoomFiltering from "components/ClientInterface/RoomFiltering/RoomFiltering";
import RoomsHeroSection from "components/ClientInterface/RoomsHeroSection/RoomsHeroSection";


export default function page() {
  return (
    <div className="w-full h-full">
      <Header />
      <RoomsHeroSection />
      <RoomFiltering />
      <Footer />
    </div>
  );
}
