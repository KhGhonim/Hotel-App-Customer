import ProfileWrapper from "components/Dashboard/Wrappers/ProfileWrapper/ProfileWrapper";

export const metadata = {
  title: "LuxeStay Hotel - Profile Details",
  description: "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function page() {
  return (
    <div>
      <ProfileWrapper />
    </div>
  );
}
