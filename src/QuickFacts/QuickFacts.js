import React from 'react';
import styles from './QuickFacts.scss';
import SectionWithTitle from '../Toolkit/SectionWithTitle';
import SectionHeader from '../Toolkit/SectionHeader';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <SectionHeader title={"specifics"} />

                <SectionWithTitle title={"ceremony transportation"}>
                    <b>Shuttle schedule:</b> TBA
                    <br/>
                    <b>Parking:</b> There's parking behind the venue as well as at the <a href="https://goo.gl/maps/VYh8YyxemrQNY31P9" target="_blank">visitor center</a> down the hill.
                </SectionWithTitle>
            
                <SectionWithTitle title={"attire"}>
                    Semi-formal. Think suit and tie or a dress. But honestly, just look nice and you're all set.
                </SectionWithTitle>

                <SectionWithTitle title={"rideshares"}>
                    There is no cell service at the venue, so please consider <a href="https://www.uber.com/us/en/ride/how-it-works/scheduled-rides/" target='_blank'>scheduling your rideshare ahead of time</a> if needed.
                </SectionWithTitle>

            </div> 
        )
    }
}
