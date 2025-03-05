import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useDiferentDates = () => {
  const [adults, setAdults] = useState(1);
  const [CheckIn, setCheckIn] = useState("");
  const [CheckOut, setCheckOut] = useState("");
  const [kids, setkids] = useState(0);
  const router = useRouter();

  const HandleRezervation = async (eo) => {
    eo.preventDefault();

    if (!CheckIn || !CheckOut || !adults) {
      toast.error("Please fill in all fields");

      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ACCOMMODATION_API}?checkIn=${CheckIn}&checkOut=${CheckOut}&adults=${adults}&kids=${kids}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        return;
      }

      toast.success("Rooms are available, redirecting to room selection...");
      router.push(
        `/CheckAvailableRoom?checkIn=${CheckIn}&checkOut=${CheckOut}&adults=${adults}&kids=${kids}`
      );
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
    }
  }

  return {

    HandleRezervation,
    adults,
    setAdults,
    kids,
    setkids,
    CheckIn,
    setCheckIn,
    CheckOut,
    setCheckOut,

  };

}

export default useDiferentDates
