import React from 'react';
import styles from './styles.module.css';

import { FavouritesContext } from './../../store/favourites-context';

import { Card } from '../ui/Card';



export const MeetupItem = ({ id, image, title, address, description }) => {

    const {
      itemIsFavourite,
      removeFavouriteHandler,
      addFavouriteHandler,
    } = React.useContext(FavouritesContext);

    const toggleFavouriteStatusHandler = () => {
        if(itemIsFavourite(id)) {
            removeFavouriteHandler(id);
        } else {
            addFavouriteHandler({ id, image, title, address, description });
        }
    }

    return (
      <Card>
        <li>
          <div className={styles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </div>
          <div className={styles.actions}>
            <button onClick={toggleFavouriteStatusHandler}>
              {itemIsFavourite(id) ? 'Remove from Favourites' : 'Add to Favourites' }
            </button>
          </div>
        </li>
      </Card>
    );
} 