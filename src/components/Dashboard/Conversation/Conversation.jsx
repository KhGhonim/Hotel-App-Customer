"use client";
import { useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { FaMessage } from "react-icons/fa6";

const ConversationData = [
  {
    id: 1,
    type: "worker",
    sender: "Jane Smith",
    avatar: "https://avatar.iran.liara.run/public/100",
    message: "Room 302 needs cleaning ASAP",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "customer",
    sender: "John Doe",
    avatar: "https://avatar.iran.liara.run/public/45",
    message: "Is late check-out available?",
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "worker",
    sender: "Mike Johnson",
    avatar: "https://avatar.iran.liara.run/public/4",
    message: "Maintenance required in Room 205",
    time: "15 minutes ago",
    unread: true,
  },
  {
    id: 4,
    type: "customer",
    sender: "Sarah Williams",
    avatar: "https://avatar.iran.liara.run/public/79",
    message: "Thank you for the great service!",
    time: "30 minutes ago",
    unread: true,
  },
];

export default function Conversation() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(ConversationData);
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState("");

  const unreadCount = messages.filter((message) => message.unread).length;

  const handleMarkAsRead = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, unread: false } : message
      )
    );
  };

  const handleReply = (message) => {
    setSelectedMessage(message);
    setReplyModalOpen(true);
  };

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSendReply = () => {
    if (selectedMessage && replyText.trim()) {
      // Here you would typically send the reply to your backend
      console.log(`Sending reply to ${selectedMessage.sender}: ${replyText}`);

      // Update the message in the list (for demo purposes)
      setMessages(
        messages.map((message) =>
          message.id === selectedMessage.id
            ? {
                ...message,
                message: replyText,
                time: "Just now",
                unread: false,
              }
            : message
        )
      );

      // Close the modal and reset the state
      setReplyModalOpen(false);
      setSelectedMessage(null);
      setReplyText("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-gray-500 hover:text-gray-600"
      >
        <FaMessage className="h-6 w-6" />
        <span className="sr-only">View messages</span>
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2 text-sm text-gray-700">
              <h3 className="font-medium">Messages</h3>
            </div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`px-4 py-3 hover:bg-gray-100 ${
                  message.unread ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex items-start">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={message.avatar}
                    alt={message.sender}
                  />
                  <div className="ml-3 w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {message.sender}
                      </p>
                      {message.type}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      {message.message}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-xs text-gray-500">{message.time}</p>
                      <div className="flex space-x-2">
                        {message.unread && (
                          <button
                            onClick={() => handleMarkAsRead(message.id)}
                            className="text-xs text-blue-600 hover:text-blue-800"
                          >
                            Mark as read
                          </button>
                        )}
                        <button
                          onClick={() => handleReply(message)}
                          className="flex items-center text-xs text-green-600 hover:text-green-800"
                        >
                          <BiSend className="mr-1 h-3 w-3" />
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-100">
              <button
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => console.log("View all messages")}
              >
                View all messages
              </button>
            </div>
          </div>
        </div>
      )}

      {replyModalOpen && selectedMessage && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Reply to {selectedMessage.sender}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Original message: {selectedMessage.message}
                      </p>
                      <textarea
                        className="mt-2 w-full rounded-md border border-gray-300 p-2"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleSendReply}
                >
                  Send Reply
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setReplyModalOpen(false);
                    setSelectedMessage(null);
                    setReplyText("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
