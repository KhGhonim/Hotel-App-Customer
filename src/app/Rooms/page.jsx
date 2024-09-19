import RoomFiltering from "components/RoomFiltering/RoomFiltering";
import RoomsHeroSection from "components/RoomsHeroSection/RoomsHeroSection";

export default function page() {
  return (
    <div className="w-full h-full">
      <RoomsHeroSection />
      <RoomFiltering />
    </div>
  );
}
