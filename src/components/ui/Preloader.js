import React from "react";
import styles from "./styles.module.css";

export const Preloader = (props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.l_main}>
        <div className={styles.l_square}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.l_square}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.l_square}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.l_square}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
