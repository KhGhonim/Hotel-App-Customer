import ContentAboutUsWrapper from "components/Dashboard/Wrappers/ContentAboutUsWrapper/ContentAboutUsWrapper";
export const metadata = {
  title: "About Us RCM Page",
  description: "Hotel system management software. Designed by Khaled Ghonim",
  icons: {
    icon: "/images/KGLogo.png",
  },
};
export default function page() {
  return <ContentAboutUsWrapper />;
}
