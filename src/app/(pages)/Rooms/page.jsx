import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import RoomFiltering from "components/RoomFiltering/RoomFiltering";
import RoomsHeroSection from "components/RoomsHeroSection/RoomsHeroSection";

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
