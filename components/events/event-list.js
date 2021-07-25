import React from "react";
import styles from "./styles.module.css";

import EventItem from "./event-item";

const EventList = ({ items }) => {
  items = items.map((item) => <EventItem key={item.id} {...item} />);

  return <ul className={styles.list}>{items}</ul>;
};

export default EventList;
