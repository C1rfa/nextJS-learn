export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_FAVOURITES":
      return {
          ...state,
          favourites: payload.favourites,
          totalFavourites: payload.totalFavourites,
      };
    default:
      return state;
  }
};
