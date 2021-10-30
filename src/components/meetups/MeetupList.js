import React from 'react';
import styles from './styles.module.css';


import { MeetupItem } from './Meetupitem';


export const MeetupList = ({ items }) => {

    const meetupItems = items.map( item => {
        return <MeetupItem key={ item.id } {...item}/>
    });

    return <ul className={styles.list}>{meetupItems }</ul>;
} 