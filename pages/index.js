import React from "react";
import { useRouter } from "next/router";

import EventsList from "./../components/events/event-list";
import EventsSearch from "./../components/events/events-search";

import { getAllEvents } from "./../public/dummy-data";

const MainPage = () => {
  const router = useRouter();
  const items = getAllEvents();

  const findEventsHandler = (year, month) => {
    if (year != 0 && month != 0) {
      const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
    }
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={items} />
    </>
  );
};

export default MainPage;
