"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function DiningForm() {
  const [Date, setDate] = useState(null);
  const [Time, setTime] = useState(null);
  const [People, setPeople] = useState(1);
  const [Isloading, setIsloading] = useState(false);

  const handleFormSubmit = async (eo) => {
    eo.preventDefault();
    if (!Date || !Time || !People) {
      toast.error("Please fill in all fields");
    }

    setIsloading(true);
    try {
      const res = await fetch(`/api/reservation/dining`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          Date,
          Time,
          People,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      }

      setIsloading(false);
      toast.success(data.message);
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="date"
          className="block text-2xl md:text-3xl font-medium text-gray-700"
        >
          Date
        </label>
        <input
          id="date"
          onChange={(eo) => setDate(eo.target.value)}
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
          min="1"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        disabled={Isloading}
        className="w-full text-2xl md:text-3xl bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        {Isloading ? <FaSpinner className="animate-spin" /> : "Book Now"}
      </button>
    </form>
  );
}
