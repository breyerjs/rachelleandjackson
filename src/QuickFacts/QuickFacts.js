import React from 'react';
import styles from './QuickFacts.scss';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Just the Facts
                </div>
                <div className={styles.factSectionMain}>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Date:</div> 
                        Saturday August 22, 2020
                        <br />
                        Time TBA
                    </div>
                    <div className={styles.factSection}>
                        {/* TODO: Google maps links here */}
                        <div className={styles.factTitle}>Venue and Reception:</div>
                        Headlands Center for the Arts
                        <br />
                        944 Simmonds Rd, Sausalito, CA 94965
                    </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Day of Wedding Transportation:</div> 
                        Shuttle schedule TBA
                        <br/>
                        Parking TBA
                    </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Attire:</div> 
                        Semi-formal. Think casual but elegant.
                    </div>
                    <div className={styles.bottomFactSection}>
                        <div className={styles.factTitle}>$#%&:</div> 
                        There is no cellular service at the venue, meaning rideshares are not an option. Please plan accordingly when considering transportation or mid-wedding entertainment.
                    </div>
                </div>
            </div> 
        )
    }
}
