"use client";
import useDiferentDates from "Hooks/useDiferentDates";

export default function DiferentDates() {
  const {
    HandleRezervation,
    adults,
    setAdults,
    kids,
    setkids,
    CheckIn,
    setCheckIn,
    CheckOut,
    setCheckOut,
  } = useDiferentDates();
  return (
    <form
      onSubmit={HandleRezervation}
      className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1"
      id="ModifySearch"
    >
      <h2 className="text-lg md:text-2xl font-extrabold text-gray-800 mb-6 text-center">
        Consider a Different Date?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col">
          <label
            htmlFor="newCheckIn"
            className="text-sm md:text-lg font-semibold text-gray-600 mb-2"
          >
            New Check-in Date
          </label>
          <input
            type="date"
            id="newCheckIn"
            value={CheckIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="newCheckOut"
            className="text-sm md:text-lg font-semibold text-gray-600 mb-2"
          >
            New Check-out Date
          </label>
          <input
            type="date"
            id="newCheckOut"
            value={CheckOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="adults"
            className="text-sm md:text-lg font-semibold text-gray-600 mb-2"
          >
            Number of Adults
          </label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            min="1"
            className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="kids"
            className="text-sm md:text-lg font-semibold text-gray-600 mb-2"
          >
            Number of Kids
          </label>
          <input
            type="number"
            id="kids"
            value={kids}
            onChange={(e) => setkids(Number(e.target.value))}
            className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none shadow-sm"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-sm md:text-lg md:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 transition-all duration-500 ease-in-out"
      >
        Search New Dates
      </button>
    </form>
  );
}
