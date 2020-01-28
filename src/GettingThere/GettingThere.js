import React from 'react';
import styles from './GettingThere.scss';
import SectionWithTitle from '../Toolkit/SectionWithTitle';
import SectionHeader from '../Toolkit/SectionHeader';

export default class GettingThere extends React.Component {
    render() {
        return (
            <div>
                <SectionHeader title={"travel"} />

                <SectionWithTitle title={"airports"}>
                    San Francisco International Airport (SFO)
                    <br/>
                    Oakland International Airport (OAK)
                </SectionWithTitle>

                <SectionWithTitle title={"places to stay"}>
                    Suggested Hotels: TBA 
                    <br />
                    (including a future room block)
                    <br/><br />
                    Areas to Stay: Sausalito, Presidio, Mill Valley, Tiburon
                    <br />
                    <a href="https://photos.google.com/share/AF1QipOnBpZ2dpq32pDTYb-eNY74EB85PcH8GMLRZZKLMIQij8UcbY4FcPTF2dT_a4wqyQ/photo/AF1QipMepHiItqO9RiFgQeIIqhbaxvvN1gFyGMVvPtYO?key=dkREZllpaWp6Tkdqc2cweElVTmNBem1WakxtRHh3" target="_blank">(Here's a map Rachelle drew)</a>
                </SectionWithTitle>

                <SectionWithTitle title={"weather"}>
                    Yes, this wedding is in California. But it gets chilly as the fog rolls in! We'd suggest you bring layers.
                </SectionWithTitle>

                <SectionWithTitle title={"need suggestions?"}>
                    <a href="https://www.yelp.com/collection/ObkpXubOQAqMAnu4gJrSzQ" target="_blank">Restaurants</a>
                    <br />
                    <a href="https://www.yelp.com/collection/rK7LzLK3L5VgzyfqfDixdA" target="_blank">Things to do</a>
                    <br />
                    <a href="https://www.yelp.com/collection/052eNjwpCzvL3-1gM_btuQ" target="_blank">Bars</a>
                </SectionWithTitle>

                <SectionWithTitle title={"venue history"}>
                    The <a href="https://www.google.com/search?q=headlands+center+for+the+arts&sxsrf=ACYBGNTTkB7PEkQXgZFGPvmXjgCTNZTn0Q:1569173000466&source=lnms&tbm=isch&sa=X&ved=0ahUKEwinsKL6-OTkAhWJrJ4KHdh8A-sQ_AUIFCgD&biw=1440&bih=821" target="_blank">Headlands Center for the Arts</a> is a repurposed US Army building that was active from 1913 to 1950. Situated on the Pacific Ocean, it helped defend the San Francisco Bay. The building was decommissioned in 1972 and became the Headlands Center for the Arts in 1982. Just a few years later, in 2019, Rachelle and Jackson visited the site and remarked that it would be a good spot to get married.
                    <br /><br />
                    The venue is located in the Marin Headlands and sits just across the Golden Gate Bridge from San Francisco. Down the street is Rodeo Beach, where you'll find great spots for hiking and picnicking. 
                </SectionWithTitle>

            </div>
        )
    }
}
