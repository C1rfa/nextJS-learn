import React from "react";
import Head from "next/head";
import "./../styles/globals.css";

import Layout from "./../components/layout/layout";
import ContextProvider from "./../store/notification-context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
};

export default MyApp;
