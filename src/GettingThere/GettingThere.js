import React from 'react';
import styles from './GettingThere.scss';

export default class GettingThere extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className={styles.sectionHeader}>
                    How do I get there? Where do I stay?
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
            </div>
        )
    }
}
