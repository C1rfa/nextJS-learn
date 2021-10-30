import React from 'react';
import styles from './styles.module.css';

import { Card } from './../ui/Card';
import { Centered } from "./../ui/Centered";


export const MeetupForm = ({ onAddMeetup }) => {

    const titleRef = React.useRef();
    const imageRef = React.useRef();
    const addressRef = React.useRef();
    const descriptionRef = React.useRef();
    


    const submitHandler = e => {
        e.preventDefault();

        const data = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            address: addressRef.current.value,
            description: descriptionRef.current.value,
        }

        onAddMeetup(data);
    }

    return (
      <Centered>
        <Card>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
              <label htmlFor="title">Meetup Title</label>
              <input type="text" required id="title" ref={titleRef} />
            </div>
            <div className={styles.control}>
              <label htmlFor="image">Meetup Image</label>
              <input type="url" required id="image" ref={imageRef} />
            </div>
            <div className={styles.control}>
              <label htmlFor="address">Address</label>
              <input type="text" required id="address" ref={addressRef} />
            </div>
            <div className={styles.control}>
              <label htmlFor="description">Description</label>
              <textarea required id="description" rows="5" ref={descriptionRef} />
            </div>
            <div className={styles.actions}>
              <button>Add Meetup</button>
            </div>
          </form>
        </Card>
      </Centered>
    );
}