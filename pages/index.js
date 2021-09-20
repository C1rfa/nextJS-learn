import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import EventsList from "./../components/events/event-list";
import EventsSearch from "./../components/events/events-search";
import NewsletterRegistration from "./../components/input/newsletter-registration";

import EventDataHandler from "./../data handlers/event data handlers";

const MainPage = ({ items, months, years }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    if (year != 0 && month != 0) {
      const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
    }
  };

  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot events here. Create your own"
        />
      </Head>
      <NewsletterRegistration />
      <EventsSearch
        onSearch={findEventsHandler}
        months={months}
        years={years}
      />
      <EventsList items={items} />
    </>
  );
};

export async function getStaticProps() {
  const eventHandler = new EventDataHandler();
  const items = eventHandler.getFeaturedEvents();
  const years = eventHandler.getUniqueYears();
  const months = eventHandler.months;

  return { props: { items, months, years }, revalidate: 10 };
}

export default MainPage;
