import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useAvailableRooms = () => {
  const [Isloading, setIsloading] = useState(false);
  const [Data, setData] = useState([]);
  const searchParams = useSearchParams();
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const adults = searchParams.get("adults");
  const kids = searchParams.get("kids");

  useEffect(() => {
    const HandleRezervation = async () => {
      setIsloading(true);

      if (!checkIn || !checkOut || !adults) {
        toast.error("Please fill in all fields");
        setIsloading(false);
        return;
      }
      setIsloading(true);

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_Rezervation_API}?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&kids=${kids}`,
          {
            cache: "no-store",
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
        setData(data);
        setIsloading(false);
      } catch (error) {
        toast.error("Something went wrong, please try again later...");
      } finally {
        setIsloading(false);
      }
    };

    HandleRezervation();
  }, [checkOut, checkIn, adults, kids]);

  return { Isloading, Data, checkOut, checkIn, adults, kids };
}
