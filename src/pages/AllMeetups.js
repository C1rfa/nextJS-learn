import React from 'react';

import { MeetupList } from './../components/meetups/MeetupList';
import { Preloader } from './../components/ui/Preloader';

export const AllMeetups = props => {

  const [meetups, setMeetups] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getMeetup();
  }, []);

  const getMeetup = () => {
    fetch("https://react-test-7fdce-default-rtdb.firebaseio.com/meetups.json", {})
    .then( data => data.json())
    .then( data => {
      for (let key in data) {
        data[key].id = key;
        meetups.push(data[key]);
      }
      setMeetups(meetups);
      setIsLoading(false);
    });
  };

  return <>{isLoading ? <Preloader /> : <MeetupList items={meetups} />}</>;
};