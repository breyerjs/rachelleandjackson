import React from 'react';
import Header from '../Header/Header';
import styles from './AboutPage.scss';

const AboutPage = () => {
    return(
        <div>
            <Header subheader={"is a software engineer"} />
            <p>I am a <span className={styles.coloredUnderline}>full-stack</span> developer on the <span className={styles.coloredUnderline}>Search Experience</span> team at <span className={styles.coloredUnderline}>Yelp</span> .</p>

            <p><span className={styles.coloredUnderline}>"Full-stack"</span> means that I write all sorts of code—frontend, backend, user-facing features, infrastructure, and so forth. Each day I get to tackle new challenges.</p>

            <p><span className={styles.coloredUnderline}>"Search Experience"</span> means that I'm responsible for what a user experiences when they search on Yelp.</p>

            <p>You probably know what <span className={styles.coloredUnderline}>Yelp</span> means. But, even if you do, feel free to <a href="http://www.yelp.com" target="_blank">take a look</a>.</p>

            <div className={styles.separator} />

            <p>Quick facts:</p>
            
            <p>Here are my <a href="https://github.com/breyerjs" target="_blank">Github</a> and <a href="https://www.linkedin.com/in/breyerjs" target="_blank">Linkedin</a> profiles. Here's <a href="https://github.com/breyerjs/jacksonbreyer/tree/master/src" target="_blank">the repo</a> for this site.</p>
            
            <p>Here are some languages and frameworks I've used:<br />C#, CSS, Django, Ember, HTML, Java, JavaScript, Postgres, Python, React, SQL</p>

            <p>Here are some topics I have experience with:<br />Databases, Full-Stack Web Development, Machine Learning, Natural Language Processing</p>
        </div>
    );
};
export default AboutPage;