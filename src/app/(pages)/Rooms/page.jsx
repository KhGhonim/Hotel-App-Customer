import Footer from "components/ClientInterface/Footer/Footer";
import Header from "components/ClientInterface/Header/Header";
import RoomFiltering from "components/ClientInterface/RoomFiltering/RoomFiltering";
import RoomsHeroSection from "components/ClientInterface/RoomsHeroSection/RoomsHeroSection";

export const metadata = {
  title: "KG Cave Hotel",
  description:
    "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};

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
