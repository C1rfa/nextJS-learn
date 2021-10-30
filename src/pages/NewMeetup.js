import React from "react";

import {useHistory} from 'react-router-dom';
import {MeetupForm} from './../components/meetupForm/MeetupForm';

export const NewMeetup = (props) => {
  const history = useHistory();

  const addMeetupHandler = data => {
    fetch("https://react-test-7fdce-default-rtdb.firebaseio.com/meetups.json", 
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(
      () => {
        history.replace('/');
      }
    );
  }

  return(
      <section>
        <MeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
  );
};
