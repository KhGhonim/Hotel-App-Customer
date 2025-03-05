import RegisterWrapper from "components/Dashboard/Wrappers/RegisterWrapper/RegisterWrapper";

export const metadata = {
  title: "LuxeStay Hotel - Registration",
  description: "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};
export default function page() {
  return <RegisterWrapper />;
}
