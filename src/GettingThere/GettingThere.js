import React from 'react';
import styles from './GettingThere.scss';

export default class GettingThere extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Travel and Accommodations
                </div>
                Airport: SFO
                <br/>
                <br/>
                Hotels:
                <br/>
                We're staying in blah blah blah. 
                <br/>
                Other good options are anything near blah blah blah
                <br/>
                <br/>
                Here's some fun narrative about the place.
                <br/>
                <br/>
                Here are some things to do around town.
            </div>
        )
    }
}
