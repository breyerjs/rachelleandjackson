import React from 'react';

import styles from './Layout.scss';
import {scroller, Element} from 'react-scroll';


import Header from '../Header/Header';
import QuickFacts from '../QuickFacts/QuickFacts';
import GettingThere from '../GettingThere/GettingThere';
import AboutUs from '../AboutUs/AboutUs';
import Navigation from '../Navigation/Navigation';

const withScroller = (elementName, componentToWrap) => {
    return (
        <Element name={elementName}>{componentToWrap}</Element>
    )
}

const scrollToNames = {
    QUICK_FACTS: 'quickFacts',
    GETTING_THERE: 'gettingThere',
    ABOUT_US: 'aboutUs',
    REGISTRY: 'registry',
}

export default class Layout extends React.Component {
    render() {
        const quickFacts = withScroller(scrollToNames.QUICK_FACTS, <QuickFacts />);
        const gettingThere = withScroller(scrollToNames.GETTING_THERE, <GettingThere />);
        const aboutUs = withScroller(scrollToNames.ABOUT_US, <AboutUs />);
        return (
            <div>
                <Header />
                <Navigation scrollToNames={scrollToNames} />
                {quickFacts}
                {gettingThere}
                {aboutUs}
            </div>
        )
    }
}
