import React from 'react';

import styles from './Layout.scss';
import {scroller, Element} from 'react-scroll';


import Header from '../Header/Header';
import QuickFacts from '../QuickFacts/QuickFacts';
import GettingThere from '../GettingThere/GettingThere';
import AboutUs from '../AboutUs/AboutUs';
import Navigation from '../Navigation/Navigation';
import Registry from '../Registry/Registry';
import Footer from '../Footer/Footer';
import PhotoGallery from '../PhotoGallery/PhotoGallery';


const withScroller = (elementName, componentToWrap) => {
    return (
        <Element name={elementName}>{componentToWrap}</Element>
    )
}

const scrollToNames = {
    QUICK_FACTS: 'quickFacts',
    GETTING_THERE: 'gettingThere',
    REGISTRY: 'registry',
    ABOUT_US: 'aboutUs',
}

const quickFacts = withScroller(scrollToNames.QUICK_FACTS, <QuickFacts />);
const gettingThere = withScroller(scrollToNames.GETTING_THERE, <GettingThere />);
const aboutUs = withScroller(scrollToNames.ABOUT_US, <AboutUs />);
const registry = withScroller(scrollToNames.REGISTRY, <Registry />);

export default class Layout extends React.Component {
    render() {
        return (
            <div className={styles.layoutContainer}>
                <Header />
                <Navigation scrollToNames={scrollToNames} />
                {quickFacts}
                {gettingThere}
                {registry}
                {aboutUs}
                <Footer />
                <PhotoGallery />
            </div>
        )
    }
}
