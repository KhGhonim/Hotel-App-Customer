
import margherita from "../../../../public/images/Food/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg";
import Tiramsu from "../../../../public/images/Food/AdobeStock_273554640.jpeg";
import carbonara from "../../../../public/images/Food/carbonara-horizontal-square640-v2.jpg";
import Milanese from "../../../../public/images/Food/ec84d216-5260-4f13-be4c-bac44340caf1.jpg";
import burger from "../../../../public/images/Food/burger-with-melted-cheese.jpg";
import pizza from "../../../../public/images/Food/deep-dish-pizza-chicago.jpg";
import fish from "../../../../public/images/Food/fish-and-chips.jpeg";
import img from "../../../../public/images/Food/img-6.jpg";
import Untitleddesign from "../../../../public/images/Food/Untitleddesign-11.webp";
import Photography from "../../../../public/images/Food/6-Amazing-Food-Photography-Tricks-You-Need-To-Know-Pancakes.jpg";
import Footer from "components/ClientInterface/Footer/Footer";
import Header from "components/ClientInterface/Header/Header";
import ResturantChefSpeacial from "components/ClientInterface/ResturantChefSpeacial/ResturantChefSpeacial";
import ResturantCustomerReviews from "components/ClientInterface/ResturantCustomerReviews/ResturantCustomerReviews";
import ResturantGallery from "components/ClientInterface/ResturantGallery/ResturantGallery";
import ResturantHeroSection from "components/ClientInterface/ResturantHeroSection/ResturantHeroSection";
import ResturantMenuHighlights from "components/ClientInterface/ResturantMenuHighlights/ResturantMenuHighlights";

const restaurantData = {
  name: "KG Cave Hotel",
  description:
    "Experience the flavors of Türkiye in the heart of the city. Our passionate chefs create authentic dishes using the finest ingredients.",
  menuHighlights: [
    {
      name: "Margherita Pizza",
      price: "$14",
      description: "Classic tomato, mozzarella, and basil",
      image: margherita,
    },
    {
      name: "Spaghetti Carbonara",
      price: "$16",
      description: "Creamy sauce with pancetta and pecorino",
      image: carbonara,
    },
    {
      name: "Tiramisu",
      price: "$8",
      description: "Traditional coffee-flavored Italian dessert",
      image: Tiramsu,
    },
  ],
  gallery: [
    burger,
    pizza,
    fish,
    img,
    Untitleddesign,
    Photography,
  ],
  chefSpecial: {
    name: "Osso Buco alla Milanese",
    description:
      "Tender veal shanks braised with vegetables, white wine and broth. Served with saffron risotto.",
    price: "$28",
    image: Milanese,
  },
  reviews: [
    {
      name: "Alice Johnson",
      rating: 5,
      comment:
        "Absolutely delicious! The atmosphere is charming and the service is impeccable.",
      avatar: "https://avatar.iran.liara.run/public/82",
    },
    {
      name: "Mark Thompson",
      rating: 4,
      comment: "Great food and ambiance. The pasta dishes are a must-try!",
      avatar: "https://avatar.iran.liara.run/public/41",
    },
    {
      name: "Sarah Lee",
      rating: 5,
      comment: "The tiramisu is to die for! Will definitely be coming back.",
      avatar: "https://avatar.iran.liara.run/public/27",
    },
    {
      name: "Ahmed Lutfy",
      rating: 5,
      comment:
        "I love this place! The food is delicious and the service is top-notch.",
      avatar: "https://avatar.iran.liara.run/public/12",
    },
    {
      name: "Emily Chen",
      rating: 5,
      comment: "What a great experience! It was just perfect. I'll be back!",
      avatar: "https://avatar.iran.liara.run/public/93",
    },
  ],
};

export default function page() {
  return (
    <div className=" bg-gray-300 w-full h-full">
      <div>
        <Header />
        <ResturantHeroSection restaurantData={restaurantData} />
        <ResturantMenuHighlights restaurantData={restaurantData} />
        <ResturantChefSpeacial restaurantData={restaurantData} />
        <ResturantGallery restaurantData={restaurantData} />
        <ResturantCustomerReviews restaurantData={restaurantData} />
        <Footer />
      </div>
    </div>
  );
}
