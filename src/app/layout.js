
import AuthProvider from "utils/AuthProvider";
import "./globals.css";
import { Cairo } from 'next/font/google'
import DarkAndLightMode from "components/Dashboard/DarkAndLightMode/DarkAndLightMode";
const cairo = Cairo({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  adjustFontFallback: true,


})

export const metadata = {
  title: "KG Hotel App",
  description: "A hotel booking app built by Khaled Ghonim",
  icons: {
    icon: "/images/KGLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cairo.className}
      >
        <AuthProvider>
          <DarkAndLightMode />
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}
