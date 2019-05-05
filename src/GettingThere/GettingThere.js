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
                    <span className={styles.travelTitle}>About the Venue:</span>
                    <br />
                    The Headlands Center for the Arts is a repurposed US Army building that was active from 1913 to 1950. Close to the Pacific Ocean, it helped protect the San Francisco Bay from outside ships. The bulding was decommissioned in 1972 and became the Headlands Center for the Arts in 1982. Just a few years later, in 2019, Rachelle and Jackson visited the site and noted that it would be a good spot to get married.
                    <br /><br />
                    The venue is located in the Marin Headlands National Park, just across the Golden Gate Bridge from San Francisco. Just down the street is Rodeo Beach, where you'll find great spots for hiking and picnicking. 
                </div>
                <div className={styles.travelSection}>
                    <span className={styles.travelTitle}>Enjoying the Visit:</span>
                    <br/>
                    Feel free to peruse our lists of <a href="https://www.yelp.com/collection/rK7LzLK3L5VgzyfqfDixdA" target="_blank">things to do around the area.</a> or <a href="https://www.yelp.com/collection/ObkpXubOQAqMAnu4gJrSzQ" target="_blank">must-hit restaurants, bars, and food.</a>
                </div>
                <div className={styles.travelSection}>
                    <span className={styles.travelTitle}>A Note on Weather:</span>
                    <br/>
                    Yes, this wedding is in California. And yes, it's in the summer. But please note that it gets chilly, especially as the sun sets! We'd suggest you plan on bringing layers.
                </div>
            </div>
        )
    }
}
