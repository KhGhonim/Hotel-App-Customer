import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const usePerPersonReservation = (id) => {
  const [BookingData, setBookingData] = useState([]);
  useEffect(() => {
    const FetchBookingData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PerPersonReservation}?q=${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            cache: "no-store",
          }
        );
        const data = await res.json();
        if (!res.ok) {
          toast.error(data.message);
        }
        setBookingData(data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    if (id) {
      FetchBookingData();
    }
  }, [id]);

  return { BookingData };
}

export default usePerPersonReservation
