import AboutUsEcoFriendly from "components/AboutUsEcoFriendly/AboutUsEcoFriendly";
import AboutUsHeroSection from "components/AboutUsHeroSection/AboutUsHeroSection";
import AboutUSHome from "components/AboutUSHome/AboutUSHome";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

export default function page() {
  return (
    <div className="w-full min-h-dvh bg-black">
      <Header />
      <AboutUsHeroSection />
      <AboutUsEcoFriendly />
      <AboutUSHome />
      <Footer />
    </div>
  );
}
