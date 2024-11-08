import RoomListWrapper from "components/Dashboard/Wrappers/RoomListWrapper/RoomListWrapper";

export const metadata = {
  title: "Room List Page",
  description: "Hotel system management software. Designed by Khaled Ghonim",
  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function page() {
  return <RoomListWrapper />;
}
