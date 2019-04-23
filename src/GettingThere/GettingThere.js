import React from 'react';
import styles from './GettingThere.scss';

export default class GettingThere extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Travel and Accommodations
                </div>
                <div className={styles.travelSection}>
                    <span className={styles.travelTitle}>Nearby Airports:</span> 
                    <br/>
                    San Francisco International Airport (SFO)
                    <br/>
                    Oakland International Airport (OAK)
                </div>
                <div className={styles.travelSection}>
                    <span className={styles.travelTitle}>Hotels:</span>
                    <br/>
                    We're staying in blah blah blah. 
                    <br/>
                    Other good options are anything near blah blah blah
                </div>
                <div className={styles.travelSection}>
                    <span className={styles.travelTitle}>About the Place:</span>
                    <br/>
                    The Headlands Center for the Arts is a ____
                </div>
                <div className={styles.travelSection}>
                    <span className={styles.travelTitle}>Enjoying the Visit:</span>
                    <br/>
                    <a href="https://www.yelp.com/collection/rK7LzLK3L5VgzyfqfDixdA" target="_blank">Click here for some things to do around town.</a>
                    <br/>
                    <a href="https://www.yelp.com/collection/ObkpXubOQAqMAnu4gJrSzQ" target="_blank">Click here for some must-hit restaurants, bars, and food.</a>
                </div>
                <div className={styles.travelSection}>
                    <span className={styles.travelTitle}>Some Notes on Weather:</span>
                    <br/>
                    Yes, this wedding is in California. And yes, it's in the summer. But it might be chilly, especially as the sun sets! We'd suggest you plan on bringing layers.
                </div>
            </div>
        )
    }
}
