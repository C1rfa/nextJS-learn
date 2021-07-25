import React from "react";

import { getEventById } from "./../../public/dummy-data";

import { EventSummary } from "./../../components/event-detail/EventSummary";
import { EventLogistics } from "./../../components/event-detail/EventLogistics";
import { EventContent } from "./../../components/event-detail/EventContent";

const EventPage = ({ id }) => {
  const event = getEventById(id);

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;

  return { props: { id } };
}

export default EventPage;
