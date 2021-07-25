import React from "react";

import { getFilteredEvents } from "../../public/dummy-data";
import ResultsTitle from "../../components/results-title/results-title";

import EventList from "./../../components/events/EventList";

const FilteredEventPage = ({ slug }) => {
  const year = +slug[0];
  const month = +slug[1];

  const items = getFilteredEvents({ year: year, month: month });

  if (items.length == 0) {
    return <div className="centered">There nothing to show on that date.</div>;
  } else {
    return (
      <>
        <ResultsTitle date={`${year}/${month}/01`} />
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
