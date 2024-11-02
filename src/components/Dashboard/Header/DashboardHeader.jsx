import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import ProfileImageAndDropMenu from "./ProfileImageAndDropMenu";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import NotificationBell from "components/Dashboard/Notification/NotificationBell";
import Conversation from "../Conversation/Conversation";
import { useDispatch, useSelector } from "react-redux";
import { DashboardOpened } from "app/lib/DashboardSlice";

export default function DashboardHeader({}) {
  // @ts-ignore
  const { IsSideBarOpened } = useSelector((state) => state.Users)
  const dispatch = useDispatch();


  return (
    <header
      className={`fixed z-40 w-full flex h-20 items-center justify-between transition-all duration-300  bg-white ${
        IsSideBarOpened ? "pl-60 pr-10" : "pr-5 md:pr-10 pl-20"
      }`}
    >
      {IsSideBarOpened ? (
        <button
          onClick={() => dispatch(DashboardOpened())}
          className="hidden lg:block text-gray-500 focus:outline-none hover:scale-110 transition-all duration-150 "
        >
          <MdKeyboardDoubleArrowRight className="h-6 w-6 text-red-500" />
        </button>
      ) : (
        <button
          onClick={() => dispatch(DashboardOpened())}
          className="hidden lg:block text-gray-500 focus:outline-none hover:scale-105 transition-all duration-150"
        >
          <MdKeyboardDoubleArrowLeft className="h-6 w-6 text-red-500" />
        </button>
      )}

      {/* Menu button */}
      <button
        onClick={() =>  dispatch(DashboardOpened())}
        className="text-gray-500 focus:outline-none lg:hidden"
      >
        <CiMenuBurger className="h-6 w-6" />
      </button>

      {/* Search bar */}
      <div className="relative flex items-center mx-3">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full md:w-96 pl-10 pr-4 py-3 rounded-lg  bg-gray-100 outline-none"
        />
      </div>

      {/* Right section buttons 'Bell' and 'Message' and profile image */}
      <div className="flex items-center space-x-4 relative">
        {/* Bell button */}
        <NotificationBell />

        {/* Message button */}
        <Conversation />

        {/* Profile image */}
        <ProfileImageAndDropMenu />
      </div>
    </header>
  );
}
