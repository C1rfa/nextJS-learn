import React from "react";

import styles from "./styles.module.css";

export const IconWrapper = ({ children }) => {
  return <span className={styles.icon}>{children}</span>;
};
