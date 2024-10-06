import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function AccommodationForm({ setIsFormOpen }) {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [CheckInDate, setCheckInDate] = useState(null);
  const [CheckOutDate, setCheckOutDate] = useState(null);
  const [Isloading, setIsloading] = useState(false);
  const router = useRouter();
  const addAdults = (eo) => {
    eo.preventDefault();
    setAdults(adults + 1);
  };
  const removeAdults = (eo) => {
    eo.preventDefault();
    if (adults > 1) {
      setAdults(adults - 1);
    }

    if (adults < 0) {
      setAdults(1);
    }
  };
  const addKids = (eo) => {
    eo.preventDefault();
    setKids(kids + 1);
  };
  const removeKids = (eo) => {
    eo.preventDefault();
    if (kids > 0) {
      setKids(kids - 1);
    }

    if (kids < 0) {
      setKids(0);
    }
  };

  const handleFormSubmit = async (eo) => {
    eo.preventDefault();

    if (!CheckInDate || !CheckOutDate || !adults) {
      toast.error("Please fill in all fields");

      return;
    }

    setIsloading(true);
    try {
      const res = await fetch(
        `/api/reservation/CheckAvailableRoom?checkIn=${CheckInDate}&checkOut=${CheckOutDate}&adults=${adults}&kids=${kids}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        setIsloading(false);

        return;
      }
      setIsloading(false);

      toast.success("Rooms are available, redirecting to room selection...");
      setIsFormOpen(false);
      router.push(
        `/CheckAvailableRoom?checkIn=${CheckInDate}&checkOut=${CheckOutDate}&adults=${adults}&kids=${kids}`
      );
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
    } finally {
      setIsloading(false);

      
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-10">
      <div>
        <label
          htmlFor="dates"
          className="block text-xl md:text-3xl font-medium text-gray-700"
        >
          Check In
        </label>
        <input
          onChange={(eo) => setCheckInDate(eo.target.value)}
          id="dates"
          type="date"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg md:text-2xl"
        />
      </div>
      <div>
        <label
          htmlFor="dates"
          className="block text-xl md:text-3xl font-medium text-gray-700"
        >
          Check Out
        </label>
        <input
          onChange={(eo) => setCheckOutDate(eo.target.value)}
          id="dates"
          type="date"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg md:text-2xl"
        />
      </div>
      <div className="flex flex-row justify-around items-center py-5">
        <div className="flex items-center justify-between gap-2 border px-2 md:px-16 py-2 rounded-md bg-black text-white">
          <p className="block text-xl md:text-3xl font-bold text-white">
            Adult:
          </p>

          <div className="flex items-center gap-3">
            <button onClick={addAdults}>
              <FaPlus />
            </button>
            <span className="text-2xl">{adults}</span>
            <button onClick={removeAdults}>
              <FaMinus />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2  border px-2 md:px-16 py-2 rounded-md bg-black text-white">
          <p className="block text-xl md:text-3xl font-bold text-white">
            Kids:
          </p>

          <div className="flex items-center gap-3">
            <button onClick={addKids}>
              <FaPlus />
            </button>
            <span className="text-2xl">{kids}</span>
            <button onClick={removeKids}>
              <FaMinus />
            </button>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="code"
          className="block text-xl md:text-3xl font-medium text-gray-700"
        >
          Enter Code
        </label>
        <input
          id="code"
          placeholder="Enter code"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg md:text-2xl"
        />
      </div>
      <button
        type="submit"
        disabled={Isloading}
        className="w-full bg-blue-500 text-white py-2 text-2xl md:text-4xl px-4 rounded-md"
      >
        {Isloading ? (
          <div className="flex items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Reserve"
        )}
      </button>
    </form>
  );
}
