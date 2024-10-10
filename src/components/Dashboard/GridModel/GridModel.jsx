"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";

const services = [
  "wifi",
  "jacuzzi",
  "slippers",
  "microwave",
  "fridge",
  "roll-in shower",
  "dryer",
  "kitchenette",
  "turkish bath",
  "tv",
  "air conditioning",
  "hairdryer",
  "coffe",
  "minibar",
  "oven",
  "washer",
];

export default function GridModel({ setIsModelOpen, IsModelOpen }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    bed_type: "",
    room_type: "",
    room_view: "",
    price_per_night: "",
    room_availability: "",
    room_capacity: "",
    services: [],
    rating: "",
    image: "",
    capacity: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const ref = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // Event handler for clicking outside the SignUp modal
    const HandleModelCloser = (eo) => {
      // Check if the click is not inside the SignUp div
      if (ref.current && !ref.current.contains(eo.target)) {
        // Close the modal
        setIsModelOpen(false);
      }
    };

    // Add the event listener for clicking outside the SignUp modal
    document.addEventListener("mousedown", HandleModelCloser);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", HandleModelCloser);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!avatar || !formData.image) {
      toast.error("Please select an image for the room");
      setIsLoading(false);
      return;
    }

    if (
      !formData.title ||
      !formData.description ||
      !formData.price_per_night ||
      !formData.room_availability ||
      !formData.capacity ||
      !formData.services ||
      !formData.bed_type ||
      !formData.room_type ||
      !formData.room_view ||
      !formData.rating
    ) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price_per_night", formData.price_per_night);
      formDataToSend.append("room_availability", formData.room_availability);
      formDataToSend.append("capacity", formData.capacity);
      formDataToSend.append("services", JSON.stringify(formData.services));
      formDataToSend.append("bed_type", formData.bed_type);
      formDataToSend.append("room_type", formData.room_type);
      formDataToSend.append("room_view", formData.room_view);
      formDataToSend.append("rating", formData.rating);
      formDataToSend.append("image", formData.image);

      // Send the form data
      const res = await fetch(process.env.NEXT_PUBLIC_ADDNEWROOM, {
        method: "POST",
        credentials: "include",
        body: formDataToSend,
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error("Something went wrong while adding a new room!");
        setIsLoading(false);
        return;
      }

      toast.success(data.message);
      setIsModelOpen(false);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsModelOpen(false);
      setIsLoading(false);
    } finally {
      setIsModelOpen(false);
      setIsLoading(false);
      e.target.reset();
      setAvatar(null);
      setFormData({
        title: "",
        description: "",
        bed_type: "",
        room_type: "",
        room_view: "",
        price_per_night: "",
        room_availability: "",
        room_capacity: "",
        services: [],
        rating: "",
        image: "",
        capacity: "",
      });
    }
  };

  return (
    <>
      <Toaster />
      {IsModelOpen && (
        <div
          className={`fixed inset-0 ${
            IsModelOpen ? "z-50" : "z-0"
          } overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50`}
        >
          <div
            ref={ref}
            className="bg-white mt-10 p-6 rounded shadow-lg sm:max-w-xl md:max-w-7xl w-full max-h-[calc(100vh-10px)] overflow-y-auto relative"
          >
            <h2 className="text-lg font-bold mb-4">Add New Room</h2>
            <form onSubmit={handleSubmit} className="grid gap-4 py-2">
              {/* Avatar Upload */}
              <div className="flex justify-center mb-4">
                <div
                  className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() => fileInputRef.current.click()}
                >
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500">Add Image</span>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Title */}
                <div className="flex flex-col">
                  <label htmlFor="title" className="mb-1">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    value={formData.title}
                    placeholder="Enter Room's title"
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Bed Type */}
                <div className="flex flex-col">
                  <label htmlFor="bed_type" className="mb-1">
                    Bed Type
                  </label>
                  <select
                    id="bed_type"
                    name="bed_type"
                    value={formData.bed_type}
                    onChange={(e) =>
                      handleSelectChange("bed_type", e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option disabled value="">
                      Select bed type
                    </option>
                    <option value="single">Single Bed</option>
                    <option value="double">Double Bed </option>
                    <option value="queen">Queen Bed </option>
                    <option value="king">King Bed</option>
                  </select>
                </div>

                {/* Room Type */}
                <div className="flex flex-col">
                  <label htmlFor="room_type" className="mb-1">
                    Room Type
                  </label>
                  <select
                    id="room_type"
                    name="room_type"
                    value={formData.room_type}
                    onChange={(e) =>
                      handleSelectChange("room_type", e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option disabled value="">
                      Select room type
                    </option>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="deluxe">Residence</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>

                {/* Room View */}
                <div className="flex flex-col">
                  <label htmlFor="room_view" className="mb-1">
                    Room View
                  </label>
                  <select
                    id="room_view"
                    name="room_view"
                    value={formData.room_view}
                    onChange={(e) =>
                      handleSelectChange("room_view", e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option disabled value="">
                      Select room view
                    </option>
                    <option value="ocean">Street</option>
                    <option value="city">City</option>
                    <option value="ocean">Courtyard</option>
                    <option value="ocean">Panoramic</option>
                    <option value="ocean">Ocean</option>
                    <option value="garden">Garden</option>
                  </select>
                </div>

                {/* Price per Night */}
                <div className="flex flex-col">
                  <label htmlFor="price_per_night" className="mb-1">
                    Price per Night
                  </label>
                  <input
                    id="price_per_night"
                    name="price_per_night"
                    type="number"
                    value={formData.price_per_night}
                    onChange={handleInputChange}
                    placeholder="Enter price per night"
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Capacity */}
                <div className="flex flex-col">
                  <label htmlFor="capacity" className="mb-1">
                    Capacity
                  </label>
                  <input
                    id="capacity"
                    name="capacity"
                    type="number"
                    placeholder="Enter room capacity of guests"
                    min="1"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Rating */}
                <div className="flex flex-col">
                  <label htmlFor="rating" className="mb-1">
                    Rating
                  </label>
                  <input
                    id="rating"
                    name="rating"
                    type="number"
                    placeholder="Enter room's rating"
                    min="1"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Availability */}
                <div className="flex flex-col">
                  <label htmlFor="room_availability" className="mb-1">
                    Availability
                  </label>
                  <select
                    id="room_availability"
                    name="room_availability"
                    value={formData.room_availability}
                    onChange={(e) =>
                      handleSelectChange("room_availability", e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select availability</option>
                    <option value="available">Available</option>
                    <option value="booked">Booked</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <label htmlFor="description" className="mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter description of the room"
                  maxLength="500"
                  minLength="10"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
                <div className=" text-end">
                  {" "}
                  <span
                    className={`text-xs ${
                      formData.description.length > 499
                        ? "text-red-500"
                        : "text-gray-500"
                    } `}
                  >
                    {500 - formData.description.length} characters left
                  </span>
                </div>
              </div>

              {/* Services */}
              <div className="mt-4">
                <label className="mb-1">Services</label>
                <div className="flex flex-wrap">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="inline-flex items-center mr-4 mb-2"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (e.target.checked) {
                            handleSelectChange("services", [
                              ...formData.services,
                              value,
                            ]);
                          } else {
                            handleSelectChange(
                              "services",
                              formData.services.filter((s) => s !== value)
                            );
                          }
                        }}
                      />
                      <span className="ml-1 text-xs capitalize">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={IsLoading}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                {IsLoading ? (
                  <div className="flex w-full h-full items-center justify-center">
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : (
                  "Add Room"
                )}
              </button>
            </form>
            <button
              onClick={() => setIsModelOpen(false)}
              className="absolute top-5 right-5 text-2xl hover:scale-110 transition-all duration-150 text-red-500"
            >
              <CgClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
