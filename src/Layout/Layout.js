import React from 'react';

import styles from './Layout.scss';
import Header from '../Header/Header';
import QuickFacts from '../QuickFacts/QuickFacts';
import GettingThere from '../GettingThere/GettingThere';
import AboutUs from '../AboutUs/AboutUs';

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div>
                <Header />
                <QuickFacts />
                <GettingThere />
                <AboutUs />
            </div>
        )
    }
}
