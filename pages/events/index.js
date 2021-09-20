//TODO: THIS PAGE IS EXACT COPY OF ./../index.js
//In need of rework

import React from "react";

import EventList from "./../../components/events/event-list";

import EventDataHandler from "./../../data handlers/event data handlers";

const EventsPage = ({ items }) => {
  return <EventList items={items} />;
};

export async function getStaticProps() {
  const handler = new EventDataHandler();
  const items = handler.events;

  return {
    props: { items },
  };
}

export default EventsPage;
