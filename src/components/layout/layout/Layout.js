import React from "react";
import styles from './styles.module.css';

import { MainNavigation } from './../mainNavigation/MainNavigation';


export const Layout = ({children}) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.container}>{children}</main>
    </>
  );
}
