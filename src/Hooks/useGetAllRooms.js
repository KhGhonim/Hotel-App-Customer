import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useGetAllRooms = (params) => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_oneRoom_API}?q=${params}`,
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
      setData(data);
    };

    if (params) {
      fetchData();
    }
  }, [params]);

  return { Data };
}

export default useGetAllRooms
