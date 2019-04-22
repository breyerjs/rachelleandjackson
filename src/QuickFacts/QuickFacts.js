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
                    Saturday August 22, 2020
                </div>
                <div className={styles.factSection}>
                    {/* TODO: Google maps links here */}
                    <span className={styles.factTitle}>Ceremony:</span>
                    <br />
                    Time TBA
                    <br/>
                    Headlands Center for the Arts
                    <br />
                    944 Simmonds Rd, Sausalito, CA 94965
                </div>
                <div className={styles.factSection}>
                    <span className={styles.factTitle}>Reception:</span> 
                    <br/>
                    Headlands Center for the Arts
                    <br />
                    944 Simmonds Rd, Sausalito, CA 94965
                </div>
                <div className={styles.factSection}>
                    <span className={styles.factTitle}>Day of Wedding Transportation:</span> 
                    <br/>
                    Shuttle schedule TBA
                    <br/>
                    Parking TBA
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
