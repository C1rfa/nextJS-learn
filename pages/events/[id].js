import React from "react";

import EventSummary from "./../../components/event-detail/event-summary";
import EventLogistics from "./../../components/event-detail/event-logistics";
import EventContent from "./../../components/event-detail/event-content";

import { getEventById } from "./../../public/dummy-data";

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
