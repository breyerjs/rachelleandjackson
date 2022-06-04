import React from 'react';
import styles from './QuickFacts.scss';
import SectionWithTitle from '../Toolkit/SectionWithTitle';
import SectionHeader from '../Toolkit/SectionHeader';

export default class QuickFacts extends React.Component {
    render() {
        return (
            <div>
                <SectionHeader title={"ceremony specifics"} />

                <SectionWithTitle title={"vaccinations required"}>
                    Please note that the venue requires full vaccination against Covid-19 for all guests. This includes booster shots. If you're unable to be vaccinated, just let Jackson or Rachelle know.
                </SectionWithTitle> 

                <SectionWithTitle title={"transportation"}>
                    <b> Shuttle Schedule:</b> 
                    <ul>
                        <li>Pickup begins: 2:00 pm</li>
                        <li>Ceremony begins: 3:30 pm</li>
                        <li>Return begins: 8:00 pm and 10:00 pm</li>
                        <li>Route (reversed for return trips):</li>
                            <ul>
                                <li><a href="https://goo.gl/maps/1d4samSnnSvBZuGT7" target="_blank">Travelodge Mill Valley</a></li>
                                <li><a href="https://goo.gl/maps/Hooo7N9w3V12q3c19" target="_blank">Holiday Inn Express Mill Valley</a></li>
                                <li><a href="https://goo.gl/maps/uwTMhPuGSuTozmMM6" target="_blank">Sausalito Ferry Landing</a></li>
                                <li><a href="https://goo.gl/maps/XfzRvE7zm2Qu1eMZ6" target="_blank">Headlands Center for the Arts</a></li>
                            </ul>
                    </ul>
                    <b>Parking:</b> There's parking behind the venue as well as at the <a href="https://goo.gl/maps/VYh8YyxemrQNY31P9" target="_blank">visitor center</a> down the hill.
                    <br/><br/>
                    <b>Rideshares:</b> There is no cell service at the venue. So while You can take a rideshare to the wedding, you may not be able to secure a return. Consider taking the shuttle on your return trip. 
                </SectionWithTitle>
                
                <SectionWithTitle title={"attire"}>
                    Semi-formal. Think suit and tie or a dress. But honestly, just look nice and you're all set.
                </SectionWithTitle>

            </div> 
        )
    }
}
