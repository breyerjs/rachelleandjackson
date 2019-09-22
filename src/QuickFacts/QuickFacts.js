import React from 'react';
import styles from './QuickFacts.scss';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    + Facts
                </div>
                <div className={styles.factSectionMain}>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Date</div> 
                        Saturday August 22, 2020
                        <br />
                        Time TBA
                    </div>
                    <div className={styles.factSection}>
                        {/* TODO: Google maps links here */}
                        <div className={styles.factTitle}>Location</div>
                        <a href="https://goo.gl/maps/Q27RgUc4VqkVPvuz9" target="_blank">Headlands Center for the Arts</a>
                        <br />
                        944 Simmonds Rd, Sausalito, CA 94965
                        <br />
                    </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Transportation</div> 
                        <b>Shuttle schedule:</b> TBA
                        <br/>
                        <b>Parking:</b> There's parking behind the venue as well as at the <a href="https://goo.gl/maps/VYh8YyxemrQNY31P9" target="_blank">visitor center</a> down the hill.
                    </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Attire</div> 
                        Semi-formal. Think casual but elegant, but just make sure to look nice and you're all set.
                    </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>"..."</div> 
                        There is no cellular service at the venue, meaning rideshares are not an option. Please plan accordingly when considering transportation or mid-wedding entertainment.
                    </div>
                </div>
            </div> 
        )
    }
}
