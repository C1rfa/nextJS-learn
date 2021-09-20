import path from "path";
import fs from "fs";

class EventDataHandler {
  constructor() {
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.fullPath = path.join("data", "events.json");
    this.events = JSON.parse(fs.readFileSync(this.fullPath));
  }

  getFeaturedEvents() {
    return this.events.filter((event) => event.isFeatured);
  }

  getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = this.events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });

    return filteredEvents;
  }

  getEventById(id) {
    return this.events.find((event) => event.id === id);
  }

  getUniqueYears() {
    let years = this.events.map((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear();
    });

    years = years.sort((item1, item2) => (item1 < item2 ? 1 : -1));
    years = [...new Set(years)];
    return years;
  }
}

export default EventDataHandler;
