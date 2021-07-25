import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">View All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
