import React from 'react';
import styles from './Program.scss';
import SectionWithTitle from '../Toolkit/SectionWithTitle';
import SectionHeader from '../Toolkit/SectionHeader';
import FlexParent from '../Toolkit/FlexParent';

export default class Program extends React.Component {
    render() {
        return (
            <div>
                <SectionHeader title={"program"} />
                
                <FlexParent>

                    <SectionWithTitle title={"welcome dinner"}>
                        Friday, August 21, 2020
                        <br />Time TBA
                        <br /><br />
                        <a href="https://www.google.com/maps/place/Barrel+House+Tavern/@37.855213,-122.478827,15z/data=!4m2!3m1!1s0x0:0x4c410f3ca71bcd9e?sa=X&ved=2ahUKEwiWwIzwtpDnAhXJtp4KHWEpCXwQ_BIwHXoECBkQCA
                        ">Barrel House Tavern</a>
                        <br />
                        660 Bridgeway, Sausalito, CA 94965
                    </SectionWithTitle>

                    <SectionWithTitle title={"ceremony"}>
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
                    </SectionWithTitle>

                    <SectionWithTitle title={"farewell brunch"}>
                        TBA                        
                    </SectionWithTitle>

                </FlexParent>
            </div> 
        )
    }
}
