import React from 'react';
import styles from './QuickFacts.scss';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Facts
                </div>
                <div className={styles.factSectionMain}>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Ceremony Transportation</div> 
                        <b>Shuttle schedule:</b> TBA
                        <br/>
                        <b>Parking:</b> There's parking behind the venue as well as at the <a href="https://goo.gl/maps/VYh8YyxemrQNY31P9" target="_blank">visitor center</a> down the hill.
                    </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Attire</div> 
                        Semi-formal. Think suit and tie or a dress. But honestly, just look nice and you're all set.
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
