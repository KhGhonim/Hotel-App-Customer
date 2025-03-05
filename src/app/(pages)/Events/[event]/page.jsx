import EventsWrapper from "components/Dashboard/Wrappers/EventsWrapper/EventsWrapper";
import { eventData } from "DB/db";

export async function generateMetadata({ params }) {
  const eventType = params.event;
  const event = eventData[eventType];

  return {
    title: `LuxeStay Hotel - ${event.title || "Event Details"}`,
    description:
      event.description || "Discover the best events at LuxeStay Hotel.",
    icons: {
      icon: "/images/KGLogo.png",
    },
  };
}

function page({ params }) {
  const eventType = params.event;

  return <EventsWrapper event={eventData[eventType]} />;
}

export default page;
