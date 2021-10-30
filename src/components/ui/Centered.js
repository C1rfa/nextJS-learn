import React from "react";
import styles from "./styles.module.css";

export const Centered = ({ children }) => {
  return <div className={styles.center}>{children}</div>;
};
