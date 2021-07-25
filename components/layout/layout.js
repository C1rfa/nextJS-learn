import React from "react";

import { MainHeader } from "./main-header.js";

export const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {/* FOOTER */}
    </>
  );
};
