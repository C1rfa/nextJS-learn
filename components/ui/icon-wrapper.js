import React from "react";
import styles from "./styles.module.css";

const IconWrapper = ({ children }) => {
  return <span className={styles.icon}>{children}</span>;
};

export default IconWrapper;
