import React from "react";
import styles from "./styles.module.css";

export const EventContent = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};
