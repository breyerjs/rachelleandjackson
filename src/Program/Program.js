import React from 'react';
import styles from './Program.scss';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Program
                </div>
                <div className={styles.factSectionMain}>
                <div className={styles.factSection}>
                    <div className={styles.factTitle}>Welcome Dinner</div>
                    Friday, August 21, 2020
                    <br />Time TBA
                    <br /><br />
                    <a href="https://www.google.com/maps/place/Barrel+House+Tavern/@37.855213,-122.478827,15z/data=!4m2!3m1!1s0x0:0x4c410f3ca71bcd9e?sa=X&ved=2ahUKEwiWwIzwtpDnAhXJtp4KHWEpCXwQ_BIwHXoECBkQCA
                    ">Barrel House Tavern</a>
                    <br />
                    660 Bridgeway, Sausalito, CA 94965
                </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Ceremony</div> 
                        Saturday, August 22, 2020
                        <br />
                        Time TBA
                        <br />
                        Reception to follow
                        <br /><br />
                        <a href="https://goo.gl/maps/Q27RgUc4VqkVPvuz9" target="_blank">Headlands Center for the Arts</a>
                        <br />
                        944 Simmonds Rd, Sausalito, CA 94965
                        <br />
                    </div>
                    <div className={styles.factSection}>
                        <div className={styles.factTitle}>Farewell Brunch</div>
                        TBA
                    </div>
                    <div className={styles.factSection}>                     
                        
                    </div>
                </div>
            </div> 
        )
    }
}
