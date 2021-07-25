import React from "react";
import searchStyles from "./searchStyles.module.css";

import Button from "./../ui/button.js";

import { getUniqueYears, getMonths } from "./../../public/dummy-data";

const EventsSearch = ({ onSearch }) => {
  const yearRef = React.useRef();
  const monthRef = React.useRef();

  const years = getUniqueYears().map((item, ind) => {
    return (
      <option key={ind} value={item}>
        {item}
      </option>
    );
  });

  const months = getMonths().map((item, ind) => {
    return (
      <option key={ind} value={ind + 1}>
        {item}
      </option>
    );
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const year = yearRef.current.value;
    const month = monthRef.current.value;

    onSearch(year, month);
  };

  return (
    <form className={searchStyles.form} onSubmit={onSubmitHandler}>
      <div className={searchStyles.controls}>
        <div className={searchStyles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="0"></option>
            {years}
          </select>
        </div>
        <div className={searchStyles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="0"></option>
            {months}
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
};

export default EventsSearch;
