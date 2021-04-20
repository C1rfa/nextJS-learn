import React from "react";

import EventItem from "./EventItem";

import styles from "./styles.module.css";

import { getAllEvents } from "./../../public/dummy-data";

const EventList = ({ items }) => {
  items = getAllEvents();
  items = items.map((item) => <EventItem key={item.id} {...item} />);

  return <ul className={styles.list}>{items}</ul>;
};

export default EventList;
