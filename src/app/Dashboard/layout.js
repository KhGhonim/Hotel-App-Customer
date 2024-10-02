import "../globals.css";
import AuthProvider from "utils/AuthProvider";

export const metadata = {
  title: "Hotel Admin Dashboard",
  description: "Web App for Khaled Ghonim's Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100">
      <AuthProvider>
        {children}
      </AuthProvider>
    </div>
  );
}
