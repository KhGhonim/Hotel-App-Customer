"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function DiningForm({ setIsFormOpen }) {
  const [ReservationTime, setReservationTime] = useState(null);
  const [Time, setTime] = useState(null);
  const [People, setPeople] = useState(1);
  const [Isloading, setIsloading] = useState(false);
  const { data: session, status } = useSession();

  const handleFormSubmit = async (eo) => {
    eo.preventDefault();
    if (!session?.user?.id) {
      toast.error("Please ensure you are logged in to submit a reservation");
      return;
    }

    if (!ReservationTime || !Time || !People) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsloading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_DINING_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          ReservationTime,
          Time,
          People,
          id: session?.user?.id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error);

        return;
      }

      setIsloading(false);
      setIsFormOpen(false);
      toast.success(data.message);
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
    } finally {
      setIsloading(false);
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="ReservationTime"
          className="block text-2xl md:text-3xl font-medium text-gray-700"
        >
          ReservationTime
        </label>
        <input
          id="ReservationTime"
          onChange={(eo) => setReservationTime(eo.target.value)}
          type="date"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="time"
          className="block text-2xl md:text-3xl font-medium text-gray-700"
        >
          Time
        </label>
        <input
          id="time"
          onChange={(eo) => setTime(eo.target.value)}
          type="time"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label
          htmlFor="people"
          className="block text-2xl md:text-3xl font-medium text-gray-700"
        >
          Number of Persons
        </label>
        <input
          id="people"
          onChange={(eo) => setPeople(Number(eo.target.value))}
          type="number"
          value={People}
          min="1"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        disabled={Isloading}
        className="w-full text-2xl md:text-3xl bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        {Isloading ? (
          <div className="flex justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Book Now"
        )}
      </button>
    </form>
  );
}
