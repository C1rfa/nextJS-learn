import React from 'react';

import { reducer } from './favourites-reducer';

const initialState = {
  favourites: [],
  totalFavourites: 0,
};

export const FavouritesContext = React.createContext();

export const FavouritesContextProvider = ({children}) => {
    const [context, dispatch] = React.useReducer(reducer, initialState);

    context.addFavouriteHandler = item => {
        context.favourites.push(item);
        dispatch({
          type: "UPDATE_FAVOURITES",
          payload: {
            favourites: context.favourites,
            totalFavourites: context.favourites.length,
          },
        });
    }

    context.removeFavouriteHandler = id => {
        dispatch({
          type: "UPDATE_FAVOURITES",
          payload: {
            favourites: context.favourites.filter((item) => item.id !== id),
            totalFavourites: context.favourites.length - 1,
          },
        });
    };

    context.itemIsFavourite = id => {
        return context.favourites.some( item => item.id === id);
    }

    return( 
        <FavouritesContext.Provider value={context}>
            {children}
        </FavouritesContext.Provider> 
    );
}