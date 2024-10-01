import DashboardHeader from "components/Dashboard/Header/DashboardHeader";
import "../globals.css";
import SideBar from "components/Dashboard/SideBar/SideBar";
import AuthProvider from "utils/AuthProvider";

export const metadata = {
  title: "Khaled Ghonim Dashboard",
  description: "Web App for Khaled Ghonim's Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100">
      <AuthProvider>
        <DashboardHeader />
        <SideBar />
        {children}
      </AuthProvider>
    </div>
  );
}
