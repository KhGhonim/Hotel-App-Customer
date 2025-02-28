"use client";
import AuthProvider from "utils/AuthProvider";
import "./globals.css";
import { Cairo } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Redux/store";

const cairo = Cairo({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <AuthProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
