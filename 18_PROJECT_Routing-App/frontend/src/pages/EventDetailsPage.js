// src/pages/EventDetailsPage.js
import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

// --------------------------------------------------
// Note: The name here doesn’t strictly matter in v7,
// but importing it as "loader" is conventional.
export async function Loader({ params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    // Throw a Response so RRD will render your errorElement
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected event.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Happy path: extract JSON
  const event = await response.json();
  return { event };
}
