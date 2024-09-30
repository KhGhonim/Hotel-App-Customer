import AboutUsEcoFriendly from "components/ClientInterface/AboutUsEcoFriendly/AboutUsEcoFriendly";
import AboutUsHeroSection from "components/ClientInterface/AboutUsHeroSection/AboutUsHeroSection";
import AboutUSHome from "components/ClientInterface/AboutUSHome/AboutUSHome";
import Footer from "components/ClientInterface/Footer/Footer";
import Header from "components/ClientInterface/Header/Header";


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
