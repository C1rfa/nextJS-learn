import React from "react";

import { getAllEvents } from "../../public/dummy-data";
import EventList from "./../../components/events/EventList";

const EventsPage = () => {
  const items = getAllEvents();

  return <EventList items={items} />;
};

export default EventsPage;
