import React from 'react';
import {scroller, Element} from 'react-scroll';

import styles from './Navigation.scss';

const scrollToProps = {
    smooth: true,
}    

export default class Navigation extends React.Component {
    render() {
        return (
            <div className={styles.navMain}>
                <a className={styles.navItem} onClick={() => scroller.scrollTo(this.props.scrollToNames.QUICK_FACTS, scrollToProps)}>Just the Facts</a>
                <a className={styles.navItem} onClick={() => scroller.scrollTo(this.props.scrollToNames.GETTING_THERE, scrollToProps)}>Getting There</a>
                <a className={styles.navItem} onClick={() => scroller.scrollTo(this.props.scrollToNames.ABOUT_US, scrollToProps)}>About Us</a>
            </div>
        )
    }
}
