import React from "react";
import styles from "./styles.module.css";

export const EventSummary = ({ title }) => {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
};
