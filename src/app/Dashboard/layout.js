"use client";
import DarkAndLightMode from "components/Dashboard/DarkAndLightMode/DarkAndLightMode";
import "../globals.css";
import AuthProvider from "utils/AuthProvider";
import DashboardHeader from "components/Dashboard/Header/DashboardHeader";
import SideBar from "components/Dashboard/SideBar/SideBar";
import { Provider } from "react-redux";
import { store, persistor } from "../Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AdminWrapper from "app/Redux/AdminWrapper";


export default function RootLayout({ children }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100">
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <DarkAndLightMode />
            <DashboardHeader />
            <SideBar />
            <AdminWrapper>{children}</AdminWrapper>
          </PersistGate>
        </Provider>
      </AuthProvider>
    </div>
  );
}
