import React from 'react';
import styles from './QuickFacts.scss';

export default class QuickFacts extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Just The Facts
                </div>
                Date: TBD
                <br/>
                <br/>
                {/* TODO: Google maps links here */}
                Ceremony:
                <br/>
                5:00pm (please arrive by 4:30)
                <br/>
                100 Road Street, City Town, California, 94117.
                <br/>
                <br/>
                Reception
                <br/>
                5:00pm
                <br/>
                100 Road Street, City Town, California, 94117.
                <br/>
                <br/>
                Day of Wedding Shuttle:
                <br/>
                Runs from 8am to 9pm, from Place to Other Place
                <br/>
                <br/>
                Attire: Tuxedos all around!
            </div>
        )
    }
}
