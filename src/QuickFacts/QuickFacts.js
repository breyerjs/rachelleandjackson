import React from 'react';
import styles from './QuickFacts.scss';
import SectionWithTitle from '../Toolkit/SectionWithTitle';
import SectionHeader from '../Toolkit/SectionHeader';
import FlexParent from '../Toolkit/FlexParent';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <SectionHeader title={"facts"} />

                <SectionWithTitle title={"ceremony transportation"}>
                    <b>Shuttle schedule:</b> TBA
                    <br/>
                    <b>Parking:</b> There's parking behind the venue as well as at the <a href="https://goo.gl/maps/VYh8YyxemrQNY31P9" target="_blank">visitor center</a> down the hill.
                </SectionWithTitle>
            
                <SectionWithTitle title={"attire"}>
                    Semi-formal. Think suit and tie or a dress. But honestly, just look nice and you're all set.
                </SectionWithTitle>

                <SectionWithTitle title={"\"...\""}>
                    There is no cellular service at the venue, meaning rideshares are not an option. Please plan accordingly when considering transportation or mid-wedding entertainment.
                </SectionWithTitle>

            </div> 
        )
    }
}
