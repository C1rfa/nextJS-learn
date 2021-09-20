const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NOTIFICATION":
      return {
        notification: {
          ...payload,
        },
      };
    case "REMOVE_NOTIFICATION":
      return {
        notification: null,
      };

    default:
      return state;
  }
};

export default reducer;
