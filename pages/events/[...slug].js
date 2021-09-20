import React from "react";
import Head from "next/head";

import ResultsTitle from "../../components/results-title/results-title";
import EventList from "./../../components/events/event-list";

import EventDataHandler from "./../../data handlers/event data handlers";

const FilteredEventPage = ({ items, year, month }) => {
  return (
    <>
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content={`Events for ${year} ${month}`} />
      </Head>
      <ResultsTitle date={`${year}/${month}`} />
      <EventList items={items} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const handler = new EventDataHandler();
  const slug = params.slug;
  const year = +slug[0];
  const month = +slug[1];

  const items = handler.getFilteredEvents({ year: year, month: month });

  if (items.length == 0) {
    return { notFound: true };
  }

  return { props: { items, year, month } };
}

export default FilteredEventPage;
