import React from "react";
import styles from "./styles.module.css";

import { AddressIcon } from "./../icons/address-icon";
import { DateIcon } from "./../icons/date-icon";
import { LogisticItem } from "./logisticItem";

export const EventLogistics = ({ date, address, image, imageAlt }) => {
  date = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  address = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
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
