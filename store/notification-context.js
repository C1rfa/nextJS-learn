import React from "react";
import reducer from "./reducer";

export const NotificationContext = React.createContext();

const initialState = {
  notification: null,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = React.useReducer(reducer, initialState);

  value.showNotification = ({ title, message, status }) => {
    dispatch({ type: "SET_NOTIFICATION", payload: { title, message, status } });
  };

  value.hideNotification = () => {
    dispatch({
      type: "REMOVE_NOTIFICATION",
      payload: null,
    });
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default ContextProvider;
