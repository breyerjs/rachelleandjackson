import React from 'react';
import styles from './AboutUs.scss';

export default class AboutUs extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className={styles.sectionHeader}>
                    About Us
                </div>
                We've been dating for a long time....mmmkay?
            </div>
        )
    }
}
