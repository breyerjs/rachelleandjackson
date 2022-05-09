import React from 'react';
import styles from './Program.scss';
import SectionWithTitle from '../Toolkit/SectionWithTitle';
import SectionHeader from '../Toolkit/SectionHeader';

export default class Program extends React.Component {
    render() {
        return (
            <div>
                <SectionHeader title={"program"} />
                
                <SectionWithTitle title={"welcome dinner"}>
                    <a href="https://www.google.com/maps/place/Barrel+House+Tavern/@37.855213,-122.478827,15z/data=!4m2!3m1!1s0x0:0x4c410f3ca71bcd9e?sa=X&ved=2ahUKEwiWwIzwtpDnAhXJtp4KHWEpCXwQ_BIwHXoECBkQCA
                    " target="_blank">Barrel House Tavern</a>
                    <br />
                    Friday, June 10, 2022
                    <br />
                    7 to 10 pm
                    <br />
                    660 Bridgeway, Sausalito, CA 94965
                    <br />
                    Hosted by Liz and John Breyer
                </SectionWithTitle>

                <SectionWithTitle title={"ceremony and reception"}>
                    <a href="https://goo.gl/maps/Q27RgUc4VqkVPvuz9" target="_blank">Headlands Center for the Arts</a>
                    <br />
                    Saturday, June 11, 2022
                    <br />
                    3 to 10 pm
                    <br />
                    944 Simmonds Rd, Sausalito, CA 94965
                    <br />
                    Ceremony begins at 3:30 pm
                    <br />
                    Cocktail hour begins at 4:00 pm
                    <br />
                    Reception begins at 5:00 pm
                    <br />
                    Officiated by Greg DiMattina
                </SectionWithTitle>

                <SectionWithTitle title={"farewell brunch"}>
                    <a href="https://goo.gl/maps/SsQtL4drtwnyYggc7" target='_blank'>Ondine at the Trident</a>
                    <br />
                    Sunday, June 12, 2022
                    <br />
                    9 to 11 am
                    <br />
                    558 Bridgeway, Sausalito, CA 94965                    
                    <br />
                    Hosted by Jane and Sam Friedman
                </SectionWithTitle>
            </div> 
        )
    }
}
