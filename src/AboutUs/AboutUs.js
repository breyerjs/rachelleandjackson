import React from 'react';
import styles from './AboutUs.scss';
import SectionHeader from '../Toolkit/SectionHeader';


export default class AboutUs extends React.Component {
    render() {
        return (
            <div className={styles.aboutContainer}>
                <SectionHeader title={"story"} />

                <div className={styles.storyBody}>
                    <p>
                        Rachelle and Jackson met as sparring partners in JMU's Taekwondo club.  Afterwards, they spoke at a party and eventually went out for dinner. They ate at Cally's, a mediocre American restaurant which is no longer in business. Fortunately, the conversation eclipsed the food and they began dating.
                    </p>
                    <p>
                        The next year, Rachelle transferred to UVA, an inferior university to the southeast of JMU. And so the pair began the first of many stretches long-distance-dating. They alternated weekends driving over the Blue Ridge Mountains to visit.
                    </p>
                    <p>
                        After Jackson graduated, he moved to DC for work. Their situation was largely unchanged, except that now the drives were slightly longer.
                    </p>
                    <p>
                        Rachelle's graduation also brought her to the DC area for work, so finally the two reunited. They moved into a small, lovely apartment in Old Town Alexandria.
                    </p>
                    <p>
                        Just a year later, Jackson was accepted to graduate school at Brandeis University, outside of Boston. Rachelle's preferred climate skews warmer, and so the two were back to long-distance-dating.
                    </p>
                    <p>
                        They made it work. The visits trended more monthly than weekly, but they set up other ways of keeping in touch. They would often leave their phone calls open all night, speaking intermittently as if they were still living together. 
                    </p>
                    <p>
                        They chatted constantly on Slack, producing enough data that Jackson was able to tap into his studies and programmatically analyze their writing styles. He conclusively showed that when Rachelle typed "haha", it tended to include three or more "ha"s. By contrast, his own were almost uniformly two "ha"s. Rachelle did not find this as entertaining as Jackson. 
                    </p>
                    <p>
                        During his summer break, Jackson took an internship in San Francisco. Midway through, Rachelle came to visit and they went hiking in Yosemite. They were awestruck by the park's towering granite cliffs and rugged beauty. After Jackson finished graduate school, it was that memory that spurred them to go live in San Francisco. 
                    </p>
                    <p>
                        San Francisco suited them well. They both thrived professionally and enjoyed the city's character. Over several years they grew into their careers and their hobbies. They got a cat, Penny.
                    </p>
                    <p>
                        Nearly nine years after they began dating, the two took another trip to Yosemite. In a meadow underneath Half-Dome, Glacier Point, and Yosemite Falls, <a href="https://photos.app.goo.gl/vdcZvrT6NKJ8ZgdM6" target="_blank">Jackson finally proposed.</a> 
                    </p>
                    <p>
                        And she said yes.
                    </p>
                </div>
            </div>
        )
    }
}
