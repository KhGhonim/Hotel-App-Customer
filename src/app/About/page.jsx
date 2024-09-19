import AboutUsEcoFriendly from "components/AboutUsEcoFriendly/AboutUsEcoFriendly";
import AboutUsHeroSection from "components/AboutUsHeroSection/AboutUsHeroSection";


export default function page() {
  return (
    <div className="w-full min-h-dvh bg-black">
      <AboutUsHeroSection />
      <AboutUsEcoFriendly />
    </div>
  );
}
