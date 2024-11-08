import DahsboardAdmin from "components/Dashboard/Wrappers/DashboardMainPage/DashboardMainPage";

export const metadata = {
  title: "Dashboard",
  description: "Hotel system management software. Designed by Khaled Ghonim",
  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function page() {
  return <DahsboardAdmin />;
}
