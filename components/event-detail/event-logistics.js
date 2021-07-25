import React from "react";
import styles from "./styles.module.css";

import Image from "next/image";

import AddressIcon from "./../icons/address-icon";
import DateIcon from "./../icons/date-icon";

import LogisticItem from "./logistic-item";

const EventLogistics = ({ date, address, image, imageAlt }) => {
  //TODO: This is reapeated in ./../events/event-item.js. Need to hide it in context or reducer later on
  //BLOCK START
  date = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  address = address.replace(", ", "\n");
  //BLOCK END

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={image} alt={imageAlt} width={500} height={500} />
      </div>
      <ul className={styles.list}>
        <LogisticItem Icon={DateIcon}>
          <time>{date}</time>
        </LogisticItem>
        <LogisticItem Icon={AddressIcon}>
          <address>{address}</address>
        </LogisticItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
