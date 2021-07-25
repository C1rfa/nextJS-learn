import React from "react";
import styles from "./styles.module.css";

import Image from "next/image";

import Button from "./../ui/button";
import IconWrapper from "./../ui/icon-wrapper";

import DateIcon from "./../icons/date-icon";
import AddressIcon from "./../icons/address-icon";
import ArrowRightIcon from "./../icons/arrow-right-icon";

const EventItem = ({ id, title, date, location, image }) => {
  //TODO: This is reapeated in ./../event-detail/event-logistics.js. Need to hide it in context or reducer later on
  //BLOCK START
  date = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  location = location.replace(", ", "\n");
  //BLOCK END

  return (
    <li className={styles.item}>
      <Image src={image} alt={title} width={500} height={500} />
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
