import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useRezervationConfirmation = (roomID, price, kids, adults, checkIn, checkOut) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [RoomData, setRoomData] = useState([]);
  const [SpecialRequest, setSpecialRequest] = useState(null);
  const { data: session, status } = useSession();


  useEffect(() => {
    if (!checkIn || !checkOut || !adults || !kids || !price || !roomID) {
      toast.error("Please return and try again with all fields filled in");
      return;
    }
    try {
      const fetchData = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_oneRoom_API}?q=${roomID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();

        setRoomData(data);
        if (!response.ok) {
          toast.error(data.error);
          return;
        }
      };

      fetchData();
    } catch (error) {
      console.log("Error fetching room data: " + error);
    }
  }, [roomID]);


  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  const numberOfDays = timeDifference / (1000 * 60 * 60 * 24);
  const totalPrice = numberOfDays * price;

  const handleConfirmAndPay = async () => {
    if (!session?.user?.id) {
      toast.error("Please ensure you are logged in to submit a reservation");
      return;
    }
    if (!checkIn || !checkOut || !adults || !kids || !roomID) {
      toast.error("Please return and try again with all fields filled in");
      return;
    }

    const formattedAdults = parseInt(adults, 10);
    const formattedKids = parseInt(kids, 10);
    const formattedRoomID = parseInt(roomID, 10);

    // Handle payment logic here
    const InsertBooking = await fetch(
      process.env.NEXT_PUBLIC_InsertBooking_API,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          checkIn,
          checkOut,
          adults: formattedAdults,
          kids: formattedKids,
          roomID: formattedRoomID,
          SpecialRequest,
          id: session?.user?.id,
        }),
      }
    );
    const data = await InsertBooking.json();
    if (!InsertBooking.ok) {
      toast.error(data.error);
      return;
    }

    toast.success("Payment successful");
    setIsConfirmed(true);
  };

  useEffect(() => {
    if (isConfirmed) {
      const Sent = async (params) => {
        const Sendemail = await fetch(process.env.NEXT_PUBLIC_Sendemail_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            checkIn,
            checkOut,
            adults,
            kids,
            totalPrice,
            roomID,
            email: session?.user?.Email,
          }),
        });
        if (!Sendemail.ok) {
          toast.error("Error sending email");
          return;
        }

        toast.success("Email sent successfully, check your inbox");
      };

      Sent();
    }
  }, [isConfirmed]);



  return {
    isConfirmed,
    setIsConfirmed,
    RoomData,
    handleConfirmAndPay,
    SpecialRequest,
    setSpecialRequest,
    checkIn,
    checkOut,
    adults,
    kids,
    price,
    roomID,
    totalPrice,
    session,
    numberOfDays
  };
}

export default useRezervationConfirmation
