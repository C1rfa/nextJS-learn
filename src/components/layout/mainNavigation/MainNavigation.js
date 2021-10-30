import React from "react";

import { FavouritesContext } from "./../../../store/favourites-context";

import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const MainNavigation = (props) => {
  const { totalFavourites } = React.useContext(FavouritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <ul>
        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            exact
            to="/"
          >
            All Meetups
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to="/addMeetup"
          >
            Add New Meetup
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to="/favourites"
          >
            Favourites
            <span className={styles.badge}>{totalFavourites}</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
