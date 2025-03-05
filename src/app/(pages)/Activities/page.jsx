import ActivitiesWrapper from "components/Dashboard/Wrappers/ActivitiesWrapper/ActivitiesWrapper";

export const metadata = {
  title: "LuxeStay Hotel - Activity",
  description: "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};
export default function page() {
  return <ActivitiesWrapper />;
}
