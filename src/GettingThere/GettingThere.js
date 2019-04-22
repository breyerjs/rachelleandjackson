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
                    Here are some things to do around town.
                    <br/>
                    Here are some must-hit restaurants.
                </div>
            </div>
        )
    }
}
