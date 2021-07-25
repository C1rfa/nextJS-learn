//TODO: THIS PAGE IS EXACT COPY OF ./../index.js
//In need of rework

import React from "react";

import EventList from "./../../components/events/event-list";

import { getAllEvents } from "./../../public/dummy-data";

const EventsPage = () => {
  const items = getAllEvents();

  return <EventList items={items} />;
};

export default EventsPage;
