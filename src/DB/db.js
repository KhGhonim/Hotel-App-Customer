import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdInformationCircle } from "react-icons/io";
import { MdBedroomParent, MdSpaceDashboard } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { CgMenuRound } from "react-icons/cg";
import Kapadokya from "../../public/Activities/321888best-rooftops-in-Cappadocia.webp";
import second from "../../public/Activities/57.jpg";
import SiraGecesi from "../../public/Activities/cappadocia-turkish-night-4N.jpg";
import LocalAmanti from "../../public/Activities/Clay-Pool-Cottage-View-Bed-M-keemala.jpg";
import jeep from "../../public/Activities/jeep-safari-tour-in-cappado.jpeg";
import Darwish from "../../public/Activities/imrs.jpg";
import atv from "../../public/Activities/kapadokya-atv-turu_1.jpg";
import hiking from "../../public/Activities/love-valley-hike-hiking-cappadocia.jpg";
import tbath from "../../public/Activities/turkish-bath-1.webp";
import horsetour from "../../public/Activities/sunrise-horse-tour-cappadocia-dalton-brothers-horse-riding-cappadocia-horse-ranch-turkey-travel-1240x914.jpg";
import { FaBath, FaBell, FaCar, FaWifi } from "react-icons/fa";

export const HeroSectionSliderDB = [
  {
    id: 1,
    title: "In the heart of the city.",
    image: "/images/Hotel Photos/HotelFromOutside.jpg",
  },
  {
    id: 2,
    title: "Welcome To KG HOTEL!",
    image: "/images/Hotel Photos/reception.jpg",
  },
  {
    id: 3,
    title: "Our food is always fresh and delicious.",
    image: "/images/Hotel Photos/1.jpg",
  },
  {
    id: 4,
    title: "Improving the luxury of your stay.",
    image: "/images/Hotel Photos/reception2.jpg",
  },
  {
    id: 5,
    title: "Making Your Stay Memorable.",
    image: "/images/Hotel Photos/Hotel From Outside2.jpg",
  },
  {
    id: 6,
    title: "Enjoying the beauty of our hotel.",
    image: "/images/Hotel Photos/39.jpg",
  },
];

export const Menu = [
  { name: "Home", url: "/" },
  { name: "About", url: "/About" },
  { name: "Rooms", url: "/Rooms" },
  { name: "Resturant", url: "/Resturant" },
  { name: "Tours", url: "/Tours" },
  { name: "Activities", url: "/Activities" },
];

export const AboutUs = [
  { value: "35", label: "Years of Experiencem" },
  { value: "185", label: "Room" },
  { value: "6144", label: "Monthly Guest Average" },
];

export const rooms = [
  {
    id: 101,
    title: "Standard Single Room",
    description:
      "A cozy single room with comfortable bedding and basic amenities.",
    image: "/images/Rooms/Standard Single Room, istanbul, Courtyard View.jpg",
    bedType: "Single Bed",
    roomType: "Room",
    roomView: "Courtyard View",
    services: ["wifi", "tv", "coffee"],
    rating: 4,
    pricePerNight: 120,
  },
  {
    id: 102,
    title: "Standard Double or Twin Room",
    description:
      "A spacious room with either a double or twin bed, perfect for couples or friends.",
    image:
      "/images/Rooms/Standard Double or Twin Room, istanbul, City View.jpg",
    bedType: "Double or Twin Bed",
    roomType: "Room",
    roomView: "Garden View",
    services: ["wifi", "tv", "coffee", "air conditioning"],
    rating: 4,
    pricePerNight: 150,
  },
  {
    id: 103,
    title: "Triple Room",
    description:
      "A triple room with three beds, ideal for families or groups of friends.",
    image: "/images/Rooms/Triple Room, istanbul, Garden View.jpg",
    bedType: "Three Beds",
    roomType: "Room",
    roomView: "City View",
    services: ["wifi", "tv", "coffee", "air conditioning"],
    rating: 4,
    pricePerNight: 180,
  },
  {
    id: 104,
    title: "Economy Double Room",
    description: "A budget-friendly double room with basic amenities.",
    image: "/images/Rooms/Economy Double Room, istanbul, Street View.jpeg",
    bedType: "Double Bed",
    roomType: "Room",
    roomView: "Street View",
    services: ["wifi", "tv", "air conditioning"],
    rating: 3,
    pricePerNight: 100,
  },
  {
    id: 105,
    title: "Deluxe Double Room",
    description:
      "A luxurious double room with premium amenities and elegant decor.",
    image: "/images/Rooms/Deluxe Double Room, istanbul, City View.jpg",
    bedType: "Double Bed",
    roomType: "Room",
    roomView: "City View",
    services: ["wifi", "tv", "minibar", "coffee"],
    rating: 5,
    pricePerNight: 200,
  },
  {
    id: 106,
    title: "Deluxe Double Room with Turkish Bath",
    description:
      "An upscale double room featuring a private Turkish bath for ultimate relaxation.",
    image:
      "/images/Rooms/Deluxe Double Room with Turkish Bath, istanbul, City View.jpg",
    bedType: "Double Bed",
    roomType: "Room",
    roomView: "City View",
    services: ["wifi", "tv", "turkish bath", "minibar"],
    rating: 5,
    pricePerNight: 250,
  },
  {
    id: 107,
    title: "Connecting Family Room",
    description:
      "A spacious room that connects to another room, ideal for families.",
    image: "/images/Rooms/Connecting Family Room, istanbul, Garden View.webp",
    bedType: "Two Double Beds",
    roomType: "Family Room",
    roomView: "Garden View",
    services: ["wifi", "tv", "coffee", "air conditioning"],
    rating: 4,
    pricePerNight: 220,
  },
  {
    id: 108,
    title: "Suite Room with Bosphorus View",
    description: "A luxurious suite with stunning views of the Bosphorus.",
    image:
      "/images/Rooms/Suite Room with Bosphorus View, istanbul, Bosphorus View.jpg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "Bosphorus View",
    services: ["wifi", "tv", "minibar", "oven"],
    rating: 5,
    pricePerNight: 300,
  },
  {
    id: 109,
    title: "Disabled Room",
    description: "A room designed to accommodate guests with disabilities.",
    image: "/images/Rooms/Disabled Room, istanbul,Street View.jpg",
    bedType: "Single Bed",
    roomType: "Accessible Room",
    roomView: "Street View",
    services: ["wifi", "tv", "hairdryer"],
    rating: 4,
    pricePerNight: 110,
  },
  {
    id: 110,
    title: "Junior Suite",
    description:
      "A spacious room with a separate washer, perfect for longer stays.",
    image: "/images/Rooms/Junior Suite, istanbul,City View.jpg",
    bedType: "Queen Bed",
    roomType: "Suite",
    roomView: "City View",
    services: ["wifi", "tv", "minibar", "washer"],
    rating: 4,
    pricePerNight: 230,
  },
  {
    id: 111,
    title: "Studio Apartment",
    description:
      "A self-contained room with a kitchenette and bathroom, ideal for independent travelers.",
    image: "/images/Rooms/Studio Apartment, istanbul,City View.jpg",
    bedType: "Double Bed",
    roomType: "Studio",
    roomView: "City View",
    services: ["wifi", "tv", "kitchenette"],
    rating: 3,
    pricePerNight: 160,
  },
  {
    id: 112,
    title: "Penthouse Suite",
    description:
      "A luxurious top-floor suite with panoramic views and exclusive amenities.",
    image: "/images/Rooms/Penthouse Suite istanbul,City View.jpeg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "Panoramic View",
    services: ["wifi", "tv", "minibar", "oven"],
    rating: 5,
    pricePerNight: 400,
  },
  {
    id: 113,
    title: "Honeymoon Suite",
    description:
      "A romantic suite designed for couples, often with special features like a Jacuzzi or private oven.",
    image: "/images/Rooms/Honeymoon Suite istanbul Garden View.jpg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "Garden View",
    services: ["wifi", "tv", "hairdryer", "oven"],
    rating: 5,
    pricePerNight: 280,
  },
  {
    id: 114,
    title: "Executive Suite",
    description:
      "A spacious and elegant suite with premium amenities, perfect for business travelers.",
    image: "/images/Rooms/Executive Suite istanbul Garden View.jpg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "City View",
    services: ["wifi", "tv", "minibar", "coffee"],
    rating: 4,
    pricePerNight: 270,
  },
  {
    id: 115,
    title: "Family Suite",
    description:
      "A large suite with multiple bedrooms and washers, ideal for families with children.",
    image: "/images/Rooms/Family Suite istanbul Garden View.jpg",
    bedType: "Multiple Beds",
    roomType: "Suite",
    roomView: "Garden View",
    services: ["wifi", "tv", "washer", "coffee"],
    rating: 4,
    pricePerNight: 250,
  },
];

export const HomeGallery = [
  {
    photo: "/images/Hotel Photos/Screenshot_1.png",
  },
  {
    photo: "/images/Hotel Photos/Screenshot_2.png",
  },
  {
    photo: "/images/Hotel Photos/Screenshot_3.png",
  },
  {
    photo: "/images/Hotel Photos/Screenshot_4.png",
  },
  {
    photo: "/images/Hotel Photos/Screenshot_5.png",
  },
  {
    photo: "/images/Hotel Photos/yemek3.jpg",
  },
];

export const DashboardMenu = [
  {
    icon: <MdSpaceDashboard className="h-6 w-6" />,
    label: "Dashboard",
    link: "/Dashboard",
  },
  {
    icon: <MdBedroomParent className="h-6 w-6" />,
    link: "RoomList",
    label: "Rooms",
    subItems: [
      { Name: "All Rooms", link: "/Dashboard/RoomList?q=AllRooms" },
      { Name: "Available", link: "/Dashboard/RoomList?q=Available" },
      { Name: "Booked", link: "/Dashboard/RoomList?q=Booked" },
    ],
  },
  {
    icon: <IoMdInformationCircle className="h-6 w-6" />,
    link: "Info",
    label: "Info",
    subItems: [
      { Name: "Hotel Info", link: "/Dashboard/HotelInfo" },
      { Name: "FAQs", link: "/Dashboard/FAQs" },
      { Name: "Policies", link: "/Dashboard/Policies" },
    ],
  },
  {
    icon: <BiSolidUserDetail className="h-6 w-6" />,
    link: "Analytics",
    label: "Analytics",
    subItems: [
      { Name: "Analytics", link: "/Dashboard/Analytics?q=Revenue" },
      { Name: "Occupancy", link: "/Dashboard/Analytics?q=Occupancy" },
    ],
  },
  {
    icon: <GrUserWorker className="h-6 w-6" />,
    label: "Reviews",
    subItems: [
      { Name: "All Reviews", link: "/Dashboard/Reviews?q=AllReviews" },
      { Name: "Approved", link: "/Dashboard/Reviews?q=ApprovedReviews" },
      { Name: "Pending", link: "/Dashboard/Reviews?q=PendingReviews" },
    ],
  },
  {
    icon: <CgMenuRound className="h-6 w-6" />,
    label: "More",
    subItems: [
      { Name: "About Us", link: "/Dashboard/AboutUs" },
      { Name: "Contact Us", link: "/Dashboard/ContactUs" },
    ],
  },
];
export const activities = [
  {
    title: "Balloon Tour",
    description:
      "Experience breathtaking views of Cappadocia's unique landscape from high above.",

    image: Kapadokya,
  },
  {
    title: "ATV Tour",
    description:
      "Explore the rugged terrain of Cappadocia on an exciting ATV adventure.",

    image: atv,
  },
  {
    title: "Horse Tour",
    description: "Discover the beauty of Cappadocia's valleys on horseback.",

    image: horsetour,
  },
  {
    title: "Dervish Representation",
    description: "Witness the mesmerizing Sufi whirling dervish ceremony.",

    image: Darwish,
  },
  {
    title: "Cappadocia Tour",
    description:
      "Explore the highlights of Cappadocia with our comprehensive guided tour.",

    image: second,
  },
  {
    title: "Jeep Safari Tours / Off-Road",
    description:
      "Embark on an thrilling off-road adventure through Cappadocia's diverse landscapes.",

    image: jeep,
  },
  {
    title: "Cappadocia Walking Tours",
    description:
      "Take a leisurely stroll through picturesque valleys and ancient cave dwellings.",
    image: hiking,
  },
  {
    title: "Turkish Bath",
    description:
      "Relax and rejuvenate with a traditional Turkish hammam experience.",

    image: tbath,
  },
  {
    title: "Turkish Night",
    description:
      "Enjoy an evening of traditional Turkish music, dance, and cuisine.",

    image: SiraGecesi,
  },
  {
    title: "Local Amenities",
    description:
      "Discover nearby restaurants, shops, and attractions in Cappadocia.",

    image: LocalAmanti,
  },
];

export const amenities = [
  {
    icon: <FaCar />,
    title: "Car Parking Area",
    description: "Free car parking is available for our customers.",
  },
  {
    icon: <FaWifi />,
    title: "Free Internet",
    description: "Free Wi-Fi is available for our customers.",
  },
  {
    icon: <FaBath />,
    title: "Turkish Bath",
    description:
      "Enjoy purification and relaxation with a historical experience in a traditional Turkish bath.",
  },
  {
    icon: <FaBell />,
    title: "24/7 Room Service",
    description:
      "We serve delicious meals and snacks to your room at any time.",
  },
];

export const ConversationData = [
  {
    id: 1,
    type: "worker",
    sender: "Jane Smith",
    avatar: "https://avatar.iran.liara.run/public/100",
    message: "Room 302 needs cleaning ASAP",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "customer",
    sender: "John Doe",
    avatar: "https://avatar.iran.liara.run/public/45",
    message: "Is late check-out available?",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "worker",
    sender: "Mike Johnson",
    avatar: "https://avatar.iran.liara.run/public/4",
    message: "Maintenance required in Room 205",
    time: "15 minutes ago",
    unread: true,
  },
  {
    id: 4,
    type: "customer",
    sender: "Sarah Williams",
    avatar: "https://avatar.iran.liara.run/public/79",
    message: "Thank you for the great service!",
    time: "30 minutes ago",
    unread: true,
  },
];

export const NotificationData = [
  {
    id: 1,
    type: "booking",
    message: "New booking: Room 301 for John Doe",
    time: "5 minutes ago",

    unread: true,
  },
  {
    id: 2,
    type: "check-in",
    message: "Guest check-in: Room 205",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "room-service",
    message: "Room service request: Room 412",
    time: "15 minutes ago",
    unread: true,
  },
  {
    id: 4,
    type: "payment",
    message: "Payment received: $500 for Room 118",
    time: "30 minutes ago",
    unread: true,
  },
  {
    id: 5,
    type: "check-out",
    message: "Guest check-out: Room 548",
    time: "2 minutes ago",
    unread: true,
  },
];
