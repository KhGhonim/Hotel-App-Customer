import CheckAvailableRoomsWrapper from "components/Dashboard/Wrappers/CheckAvailableRoomsWrapper/CheckAvailableRoomsWrapper";

export const metadata = {
  title: "LuxeStay Hotel - Available Rooms",
  description: "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function page() {
  return <CheckAvailableRoomsWrapper />;
}
