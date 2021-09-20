import React from "react";

import { NotificationContext } from "./../../store/notification-context";

import MainHeader from "./main-header";
import Notification from "./../ui/notification";

const Layout = ({ children }) => {
  const { notification } = React.useContext(NotificationContext);

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification ? (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Layout;
