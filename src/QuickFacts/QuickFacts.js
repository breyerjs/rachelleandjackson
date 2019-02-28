import React from 'react';
import styles from './QuickFacts.scss';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Just the Facts
                </div>
                <div className={styles.factSection}>
                    <span className={styles.factTitle}>Date:</span> 
                    <br/>
                    January 1st, 2035
                </div>
                <div className={styles.factSection}>
                    {/* TODO: Google maps links here */}
                    <span className={styles.factTitle}>Ceremony:</span>
                    <br />
                    5:00 pm (please arrive by 4:30)
                    <br/>
                    100 Road Street, City Town, California, 94117.
                </div>
                <div className={styles.factSection}>
                    <span className={styles.factTitle}>Reception:</span> 
                    <br/>
                    5:00 pm
                    <br/>
                    100 Road Street, City Town, California, 94117.
                </div>
                <div className={styles.factSection}>
                    <span className={styles.factTitle}>Day of Wedding Transportation:</span> 
                    <br/>
                    Shuttle Runs from 8am to 9pm, from Place to Other Place
                    <br/>
                    Parking is available at blah blah blah
                </div>
                <div className={styles.factSection}>
                    <span className={styles.factTitle}>Attire:</span> 
                    <br/>
                    Tuxedos all around!
                </div>
            </div> 
        )
    }
}
