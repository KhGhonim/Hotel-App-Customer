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
export default function GridUpdateModal({
  IsUpdateModalOpen,
  setIsUpdateModalOpen,
  UpdateDetils,
  setRoomDataGrid,
}) {
  const [formDataa, setformDataa] = useState({
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
  });
  const [IsLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    if (IsUpdateModalOpen && UpdateDetils) {
      setformDataa({
        title: UpdateDetils.room_details.title || "",
        description: UpdateDetils.description || "",
        bed_type: UpdateDetils.bed_type || "",
        room_type: UpdateDetils.room_type || "",
        room_view: UpdateDetils.room_details.room_view || "",
        price_per_night: UpdateDetils.price_per_night || "",
        room_availability: UpdateDetils.room_availability
          ? "available"
          : "booked",
        room_capacity: UpdateDetils.room_capacity || "",
        services: UpdateDetils.services || [],
        rating: UpdateDetils.rating || "",
        image: UpdateDetils.room_details.image || "",
      });
    }
  }, [IsUpdateModalOpen, UpdateDetils]);

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setformDataa((prev) => ({ ...prev, image: file }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformDataa((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setformDataa((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (eo) => {
    eo.preventDefault();
    setIsLoading(true);

    if (!formDataa.title || formDataa.title === "") {
      toast.error("Title is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.description || formDataa.description === "") {
      toast.error("Description is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.price_per_night || formDataa.price_per_night === "") {
      toast.error("Price per night is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.room_capacity || formDataa.room_capacity === "") {
      toast.error("Room capacity is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.room_type || formDataa.room_type === "") {
      toast.error("Room type is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.bed_type || formDataa.bed_type === "") {
      toast.error("Bed type is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.room_view || formDataa.room_view === "") {
      toast.error("Room view is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.room_availability || formDataa.room_availability === "") {
      toast.error("Room availability is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.rating || formDataa.rating === "") {
      toast.error("Rating is required");
      setIsLoading(false);
      return;
    }

    if (!formDataa.room_capacity || formDataa.room_capacity === "") {
      toast.error("Capacity is required");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", formDataa.title);
      formData.append("description", formDataa.description);
      formData.append("bed_type", formDataa.bed_type);
      formData.append("room_type", formDataa.room_type);
      formData.append("room_view", formDataa.room_view);
      formData.append("price_per_night", formDataa.price_per_night);
      formData.append("room_availability", formDataa.room_availability);
      formData.append("room_capacity", formDataa.room_capacity);
      formData.append("services", JSON.stringify(formDataa.services));
      formData.append("rating", formDataa.rating);
      formData.append("image", formDataa.image);
      formData.append("capacity", formDataa.room_capacity);
      formData.append("id", UpdateDetils.id);

      const response = await fetch("/api/UpdateRoom", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error);
      }

      if (response.ok) {
        toast.success(data.message);
        setIsUpdateModalOpen(false);
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    } finally {
      setIsUpdateModalOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      {IsUpdateModalOpen && (
        <div
          className={`fixed inset-0 ${
            IsUpdateModalOpen ? "z-50" : "z-0"
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
                  {formDataa.image ? (
                    <img
                      src={avatar || formDataa.image}
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
                    value={formDataa.title}
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
                    value={formDataa.bed_type}
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
                    value={formDataa.room_type}
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
                    value={formDataa.room_view}
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
                    value={formDataa.price_per_night}
                    onChange={handleInputChange}
                    placeholder="Enter price per night"
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Capacity */}
                <div className="flex flex-col">
                  <label htmlFor="room_capacity" className="mb-1">
                    Capacity
                  </label>
                  <input
                    id="room_capacity"
                    name="room_capacity"
                    type="number"
                    placeholder="Enter room capacity of guests"
                    min="1"
                    value={formDataa.room_capacity}
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
                    value={formDataa.rating}
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
                    value={
                      formDataa.room_availability === "available"
                        ? "available"
                        : "booked"
                    }
                    onChange={(e) =>
                      handleSelectChange("room_availability", e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option disabled value="">
                      Select availability
                    </option>
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
                  value={formDataa.description}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
                <div className=" text-end">
                  {" "}
                  <span
                    className={`text-xs ${
                      formDataa.description.length > 499
                        ? "text-red-500"
                        : "text-gray-500"
                    } `}
                  >
                    {500 - formDataa.description.length} characters left
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
                        checked={formDataa.services.includes(service)}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (e.target.checked) {
                            handleSelectChange("services", [
                              ...formDataa.services,
                              value,
                            ]);
                          } else {
                            handleSelectChange(
                              "services",
                              formDataa.services.filter((s) => s !== value)
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
              onClick={() => setIsUpdateModalOpen(false)}
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
