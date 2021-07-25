import React from "react";
import styles from "./styles.module.css";

import Link from "next/link";

const MainHeader = () => {
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

export default MainHeader;
