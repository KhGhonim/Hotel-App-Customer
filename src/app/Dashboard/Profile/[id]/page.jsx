import ProfileWrapper from "../ProfileWrapper";

export const metadata = {
  title: "Profile Page",
  description: "Hotel system management software. Designed by Khaled Ghonim",
  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function page() {
  
  return <ProfileWrapper />;
}
