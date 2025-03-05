import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useAccommodation = () => {
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_Rezervation_API}?checkIn=${CheckInDate}&checkOut=${CheckOutDate}&adults=${adults}&kids=${kids}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        setIsloading(false);
        return;
      }
      setIsloading(false);
      toast.success("Rooms are available, redirecting to room selection...");
      router.push(
        `/CheckAvailableRoom?checkIn=${CheckInDate}&checkOut=${CheckOutDate}&adults=${adults}&kids=${kids}`
      );
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
    } finally {
      setIsloading(false);
    }
  };

  return {
    handleFormSubmit,
    addKids, removeAdults, addAdults, Isloading, setCheckOutDate, setCheckInDate, removeKids,
    kids,
    adults,

  };
};

export default useAccommodation;