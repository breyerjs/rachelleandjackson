import React from 'react';
import {scroller, Element} from 'react-scroll';

import styles from './Navigation.scss';

const scrollToProps = {
    smooth: true,
}    

/**
 * Basically, avoid showing the nav if the user is on a phone. 
 * Gut check heuristic as to whether the screen is big enough.
 * There's no science here. I just picked numbers that seemed big enough.
 */
const screenIsBigEnough = () => {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return x > 500;
}

export default class Navigation extends React.Component {
    render() {
        if (! screenIsBigEnough()){
            return <div></div>
        }
        return (
            <div>
                <a className={styles.navItem} onClick={() => scroller.scrollTo(this.props.scrollToNames.QUICK_FACTS, scrollToProps)}>Facts</a>
                <a className={styles.navItem} onClick={() => scroller.scrollTo(this.props.scrollToNames.GETTING_THERE, scrollToProps)}>Journey</a>
                <a className={styles.navItem} onClick={() => scroller.scrollTo(this.props.scrollToNames.REGISTRY, scrollToProps)}>Registry</a>
                <a className={styles.navItem} onClick={() => scroller.scrollTo(this.props.scrollToNames.ABOUT_US, scrollToProps)}>History</a>
            </div>
        )
    }
}
