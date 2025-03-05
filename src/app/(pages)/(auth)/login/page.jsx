import LoginWrapper from "components/Dashboard/Wrappers/LoginWrapper/LoginWrapper";

export const metadata = {
  title: "LuxeStay Hotel - Login",
  description: "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};
export default function page() {
  return <LoginWrapper />;
}
