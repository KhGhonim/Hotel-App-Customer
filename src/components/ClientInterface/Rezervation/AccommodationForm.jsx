import useAccommodation from "Hooks/useAccommodation";
import { FaSpinner } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function AccommodationForm() {
  const {
    handleFormSubmit,
    addKids,
    removeAdults,
    addAdults,
    Isloading,
    setCheckOutDate,
    setCheckInDate,
    removeKids,
    kids,
    adults,
  } = useAccommodation();
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
