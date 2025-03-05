import ToursWrapper from "components/Dashboard/Wrappers/ToursWrapper/ToursWrapper";

export const metadata = {
  title: "LuxeStay Hotel - Tours Book",
  description: "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function Page() {
  return (
    <div>
      <ToursWrapper />
    </div>
  );
}
