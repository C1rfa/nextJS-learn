import React from "react";
import styles from "./styles.module.css";

export const Card = ({ children }) => {
  return (
    <div className={styles.card}>
        {children}
    </div>
  );
};
