import React from "react";
import Head from "next/head";

import EventSummary from "./../../components/event-detail/event-summary";
import EventLogistics from "./../../components/event-detail/event-logistics";
import EventContent from "./../../components/event-detail/event-content";
import Comments from "./../../components/input/comments";

import EventDataHandler from "./../../data handlers/event data handlers";

const EventPage = ({ event }) => {
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const handler = new EventDataHandler();
  const event = handler.getEventById(id);

  return {
    props: { event },
  };
}

export async function getStaticPaths() {
  const handler = new EventDataHandler();
  const paths = handler.events.map((item) => {
    return { params: { id: item.id } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default EventPage;
