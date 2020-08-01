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
                    Date Forthcoming
                    <br />
                    660 Bridgeway, Sausalito, CA 94965
                    <br />
                    Hosted by John and Liz Breyer
                </SectionWithTitle>

                <SectionWithTitle title={"ceremony and reception"}>
                    <a href="https://goo.gl/maps/Q27RgUc4VqkVPvuz9" target="_blank">Headlands Center for the Arts</a>
                    <br />
                    Saturday August 14, 2021
                    <br />
                    944 Simmonds Rd, Sausalito, CA 94965
                    <br />
                    Officiated by Greg DiMattina
                </SectionWithTitle>

                <SectionWithTitle title={"farewell brunch"}>
                    <a href="https://www.google.com/maps/place/The+Spinnaker/@37.8588382,-122.4782071,15z/data=!4m2!3m1!1s0x0:0xa0ec245896bce8cb?sa=X&ved=2ahUKEwiaiv6d1KXnAhUqJTQIHclBBTYQ_BIwFXoECCsQCA" target='_blank'>The Spinnaker</a>
                    <br />
                    Date Forthcoming
                    <br />
                    100 Spinnaker Dr, Sausalito, CA 94965
                    <br />
                    Hosted by Jane and Sam Friedman
                </SectionWithTitle>
            </div> 
        )
    }
}
