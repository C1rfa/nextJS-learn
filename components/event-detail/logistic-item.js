import React from "react";
import styles from "./styles.module.css";

import IconWrapper from "./../ui/icon-wrapper";

const LogisticItem = ({ Icon, children }) => {
  return (
    <li className={styles.item}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <span>{children}</span>
    </li>
  );
};

export default LogisticItem;
