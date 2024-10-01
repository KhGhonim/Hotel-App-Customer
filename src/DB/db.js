export const HeroSectionSliderDB = [
  {
    id: 1,
    title: "In the heart of the city.",
    image: "/images/Hotel Photos/HotelFromOutside.jpg"

  },
  {
    id: 2,
    title: "Welcome To KG HOTEL!",
    image: "/images/Hotel Photos/reception.jpg"

  },
  {
    id: 3,
    title: "Our food is always fresh and delicious.",
    image: "/images/Hotel Photos/1.jpg"

  },
  {
    id: 4,
    title: "Improving the luxury of your stay.",
    image: "/images/Hotel Photos/reception2.jpg"

  },
  {
    id: 5,
    title: "Making Your Stay Memorable.",
    image: "/images/Hotel Photos/Hotel From Outside2.jpg"

  },
  {
    id: 6,
    title: "Enjoying the beauty of our hotel.",
    image: "/images/Hotel Photos/39.jpg"

  },
]

export const Menu = [
  { name: "Home", url: "/" },
  { name: "About", url: "/About" },
  { name: "Rooms", url: "/Rooms" },
  { name: "Resturant", url: "/Resturant" },

];


export const AboutUs = [
  { value: '35+', label: 'Years of Experiencem' },
  { value: '185', label: 'Room' },
  { value: '6144', label: 'Monthly Guest Average' },
]

export const rooms = [
  {
    id: 101,
    title: "Standard Single Room",
    description: "A cozy single room with comfortable bedding and basic amenities.",
    image: "/images/Rooms/Standard Single Room, istanbul, Courtyard View.jpg",
    bedType: "Single Bed",
    roomType: "Room",
    roomView: "Courtyard View",
    services: ["wifi", "tv", "coffee"],
    rating: 4, 
    pricePerNight: 120 
  },
  {
    id: 102,
    title: "Standard Double or Twin Room",
    description: "A spacious room with either a double or twin bed, perfect for couples or friends.",
    image: "/images/Rooms/Standard Double or Twin Room, istanbul, City View.jpg",
    bedType: "Double or Twin Bed",
    roomType: "Room",
    roomView: "Garden View",
    services: ["wifi", "tv", "coffee", "air conditioning"],
    rating: 4,
    pricePerNight: 150
  },
  {
    id: 103,
    title: "Triple Room",
    description: "A triple room with three beds, ideal for families or groups of friends.",
    image: "/images/Rooms/Triple Room, istanbul, Garden View.jpg",
    bedType: "Three Beds",
    roomType: "Room",
    roomView: "City View",
    services: ["wifi", "tv", "coffee", "air conditioning"],
    rating: 4,
    pricePerNight: 180
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
    pricePerNight: 100
  },
  {
    id: 105,
    title: "Deluxe Double Room",
    description: "A luxurious double room with premium amenities and elegant decor.",
    image: "/images/Rooms/Deluxe Double Room, istanbul, City View.jpg",
    bedType: "Double Bed",
    roomType: "Room",
    roomView: "City View",
    services: ["wifi", "tv", "minibar", "coffee"],
    rating: 5,
    pricePerNight: 200
  },
  {
    id: 106,
    title: "Deluxe Double Room with Turkish Bath",
    description: "An upscale double room featuring a private Turkish bath for ultimate relaxation.",
    image: "/images/Rooms/Deluxe Double Room with Turkish Bath, istanbul, City View.jpg",
    bedType: "Double Bed",
    roomType: "Room",
    roomView: "City View",
    services: ["wifi", "tv", "turkish bath", "minibar"],
    rating: 5,
    pricePerNight: 250
  },
  {
    id: 107,
    title: "Connecting Family Room",
    description: "A spacious room that connects to another room, ideal for families.",
    image: "/images/Rooms/Connecting Family Room, istanbul, Garden View.webp",
    bedType: "Two Double Beds",
    roomType: "Family Room",
    roomView: "Garden View",
    services: ["wifi", "tv", "coffee", "air conditioning"],
    rating: 4,
    pricePerNight: 220
  },
  {
    id: 108,
    title: "Suite Room with Bosphorus View",
    description: "A luxurious suite with stunning views of the Bosphorus.",
    image: "/images/Rooms/Suite Room with Bosphorus View, istanbul, Bosphorus View.jpg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "Bosphorus View",
    services: ["wifi", "tv", "minibar", "oven"],
    rating: 5,
    pricePerNight: 300
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
    pricePerNight: 110
  },
  {
    id: 110,
    title: "Junior Suite",
    description: "A spacious room with a separate washer, perfect for longer stays.",
    image: "/images/Rooms/Junior Suite, istanbul,City View.jpg",
    bedType: "Queen Bed",
    roomType: "Suite",
    roomView: "City View",
    services: ["wifi", "tv", "minibar", "washer"],
    rating: 4,
    pricePerNight: 230
  },
  {
    id: 111,
    title: "Studio Apartment",
    description: "A self-contained room with a kitchenette and bathroom, ideal for independent travelers.",
    image: "/images/Rooms/Studio Apartment, istanbul,City View.jpg",
    bedType: "Double Bed",
    roomType: "Studio",
    roomView: "City View",
    services: ["wifi", "tv", "kitchenette"],
    rating: 3,
    pricePerNight: 160
  },
  {
    id: 112,
    title: "Penthouse Suite",
    description: "A luxurious top-floor suite with panoramic views and exclusive amenities.",
    image: "/images/Rooms/Penthouse Suite istanbul,City View.jpeg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "Panoramic View",
    services: ["wifi", "tv", "minibar", "oven"],
    rating: 5,
    pricePerNight: 400
  },
  {
    id: 113,
    title: "Honeymoon Suite",
    description: "A romantic suite designed for couples, often with special features like a Jacuzzi or private oven.",
    image: "/images/Rooms/Honeymoon Suite istanbul Garden View.jpg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "Garden View",
    services: ["wifi", "tv", "hairdryer", "oven"],
    rating: 5,
    pricePerNight: 280
  },
  {
    id: 114,
    title: "Executive Suite",
    description: "A spacious and elegant suite with premium amenities, perfect for business travelers.",
    image: "/images/Rooms/Executive Suite istanbul Garden View.jpg",
    bedType: "King Bed",
    roomType: "Suite",
    roomView: "City View",
    services: ["wifi", "tv", "minibar", "coffee"],
    rating: 4,
    pricePerNight: 270
  },
  {
    id: 115,
    title: "Family Suite",
    description: "A large suite with multiple bedrooms and washers, ideal for families with children.",
    image: "/images/Rooms/Family Suite istanbul Garden View.jpg",
    bedType: "Multiple Beds",
    roomType: "Suite",
    roomView: "Garden View",
    services: ["wifi", "tv", "washer", "coffee"],
    rating: 4,
    pricePerNight: 250
  }
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
]