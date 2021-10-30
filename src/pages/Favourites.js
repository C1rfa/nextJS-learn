import React from 'react';

import { MeetupList } from "./../components/meetups/MeetupList";

import { FavouritesContext } from './../store/favourites-context';
import { Centered } from './../components/ui/Centered';


export const Favourites = props => {

    const { favourites, totalFavourites } = React.useContext(FavouritesContext);

    return(
        <>
        {totalFavourites !== 0 ? <MeetupList items={favourites}/> : <Centered>There is nothing. Add some meetups</Centered>}
        </>
    );
}