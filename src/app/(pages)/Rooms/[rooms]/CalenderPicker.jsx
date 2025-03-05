import useRezervation from "Hooks/useRezervation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function CalenderPicker() {
  const {
    HandleRezervation,
    handleStartDateChange,
    handleEndDateChange,
    adults,
    setAdults,
    kids,
    setKids,
    CheckIn,
    CheckOut,
    Isloading,
  } = useRezervation();

  return (
    <div className="w-full bg-transparent p-6 rounded-lg shadow-lg">
      <Toaster position="top-right" />
      <form onSubmit={HandleRezervation}>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex items-center max-md:justify-between max-md:w-full  gap-5">
            <div className="flex items-center  gap-5">
              <label
                htmlFor="adults"
                className="block text-sm font-medium text-gray-300"
              >
                Adults
              </label>
              <input
                type="number"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                min="1"
                className="border-gray-300 rounded-md text-center w-16"
              />
            </div>
            <div className="flex items-center  gap-5">
              <label
                htmlFor="kids"
                className="block text-sm font-medium text-gray-300"
              >
                Kids
              </label>
              <input
                type="number"
                id="kids"
                value={kids}
                onChange={(e) => setKids(Number(e.target.value))}
                min="0"
                className="border-gray-300 rounded-md text-center w-16"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <DatePicker
              showIcon
              selected={CheckIn}
              onChange={handleStartDateChange}
              placeholderText="Check-In Date"
              className="max-w-xl border-gray-300 rounded-md text-center py-2"
            />
            <DatePicker
              showIcon
              selected={CheckOut}
              onChange={handleEndDateChange}
              placeholderText="Check-Out Date"
              className="max-w-lg border-gray-300 rounded-md text-center py-2"
            />
          </div>
          <button
            disabled={Isloading}
            className="bg-black hover:bg-gray-800 transition-all duration-300 text-white font-bold py-2 px-8 rounded"
          >
            {Isloading ? (
              <div className="flex max-w-2xl h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              "  Book Now"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
