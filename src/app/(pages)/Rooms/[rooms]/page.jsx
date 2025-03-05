import MultiPageWrapper from "components/Dashboard/Wrappers/MultiPageWrapper/MultiPageWrapper";

export async function generateMetadata({ params }) {
  const roomId = params.rooms;
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}${process.env.NEXT_PUBLIC_oneRoom_API}?q=${roomId}`,

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
    return {
      title: `LuxeStay Hotel - ${data.title || "Room Details"}`,
      description:
        data.description || "Explore the best rooms at LuxeStay Hotel.",
      icons: {
        icon: "/images/KGLogo.png",
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "LuxeStay Hotel - Room Details",
      description: "Know more about our rooms. Designed by Khaled Ghonim",
    };
  }
}
export default function page() {
  return (
    <>
      <MultiPageWrapper />
    </>
  );
}
