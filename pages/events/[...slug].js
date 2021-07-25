import React from "react";

import ResultsTitle from "../../components/results-title/results-title";
import EventList from "./../../components/events/event-list";

import { getFilteredEvents } from "../../public/dummy-data";

const FilteredEventPage = ({ slug }) => {
  const year = +slug[0];
  const month = +slug[1];
  const items = getFilteredEvents({ year: year, month: month });

  //TODO: add error component with message string
  if (items.length == 0) {
    return <div>Events not found.</div>;
  } else {
    return (
      <>
        <ResultsTitle date={`${year}/${month}`} />
        <EventList items={items} />
      </>
    );
  }
};

export async function getServerSideProps({ params }) {
  const slug = params.slug;

  return { props: { slug } };
}

export default FilteredEventPage;
