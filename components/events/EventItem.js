import React from "react";

import styles from "./styles.module.css";

import { Button } from "./../ui/button";
import { IconWrapper } from "./../ui/IconWrapper";

import { DateIcon } from "./../icons/date-icon";
import { AddressIcon } from "./../icons/address-icon";
import { ArrowRightIcon } from "./../icons/arrow-right-icon";

const EventItem = ({ id, title, date, location, image }) => {
  date = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  location = location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={"./" + image} alt={title} />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore event</span>
            <IconWrapper>
              <ArrowRightIcon />
            </IconWrapper>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
