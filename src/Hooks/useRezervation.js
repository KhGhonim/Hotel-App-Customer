import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useRezervation = () => {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const router = useRouter();
  const [CheckIn, setCheckIn] = useState(null);
  const [CheckOut, setCheckOut] = useState(null);
  const [Isloading, setIsloading] = useState(false);

  const handleStartDateChange = (date) => {
    setCheckIn(date);
  };

  const handleEndDateChange = (date) => {
    setCheckOut(date);
  };

  const HandleRezervation = async (eo) => {
    eo.preventDefault();
    setIsloading(true);

    if (!CheckIn || !CheckOut || !adults) {
      toast.error("Please fill in all fields");
      setIsloading(false);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_Rezervation_API
        }?checkIn=${CheckIn.toISOString().slice(
          0,
          10
        )}&checkOut=${CheckOut.toISOString().slice(
          0,
          10
        )}&adults=${adults}&kids=${kids}`,
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
        setIsloading(false);

        return;
      }
      setIsloading(false);

      toast.success("Rooms are available, redirecting to room selection...");
      router.push(
        `/CheckAvailableRoom?checkIn=${CheckIn.toISOString().slice(
          0,
          10
        )}&checkOut=${CheckOut.toISOString().slice(
          0,
          10
        )}&adults=${adults}&kids=${kids}`
      );
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
    } finally {
      setIsloading(false);
    }
  };

  return {

    HandleRezervation,
    handleStartDateChange,
    handleEndDateChange,
    adults,
    setAdults,
    kids,
    setKids,
    CheckIn,
    setCheckIn,
    CheckOut,
    setCheckOut,
    Isloading,
    setIsloading,
  };

}

export default useRezervation
