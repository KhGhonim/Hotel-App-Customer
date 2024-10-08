"use client";
import { NotificationData } from "DB/db";
import { useEffect, useRef, useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FcLeave } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { SiHiltonhotelsandresorts } from "react-icons/si";

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [NotificationsAfterReaded, setNotificationsAfterReaded] =
    useState(NotificationData);

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const unreadedNotifications = NotificationsAfterReaded.filter(
    (notification) => notification.unread
  ).length;

  const handleMarkAsRead = () => {
    setNotificationsAfterReaded(
      NotificationsAfterReaded.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={handleMarkAsRead}
        className="relative text-gray-500 hover:text-gray-600 focus:outline-none"
      >
        <FaBell className="h-6 w-6" />
        {unreadedNotifications > 0 && (
          <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadedNotifications}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2  w-44 sm:w-56 md:w-72 lg:w-80 rounded-lg bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2 bg-blue-50 text-sm text-gray-900 font-semibold rounded-t-lg">
              Notifications
            </div>

            {NotificationData.length > 0 ? (
              NotificationData.map((notification) => (
                <div
                  key={notification.id}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors flex items-start gap-3 border-b border-gray-100"
                >
                  <div className="flex-shrink-0 text-blue-500 text-lg">
                    {notification.type === "booking" && (
                      <SiHiltonhotelsandresorts />
                    )}
                    {notification.type === "check-in" && <BiLogIn />}
                    {notification.type === "room-service" && <FaBell />}
                    {notification.type === "payment" && <MdPayment />}
                    {notification.type === "check-out" && <FcLeave />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No new notifications
              </div>
            )}

            <div className="border-t border-gray-100">
              <button
                className="block w-full px-4 py-2 text-left text-sm text-blue-600 font-medium hover:bg-blue-50 transition-colors rounded-b-lg"
                onClick={() => console.log("View all notifications")}
              >
                View all notifications
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
