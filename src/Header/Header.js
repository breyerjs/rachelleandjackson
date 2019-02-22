import React from 'react';
import styles from './Header.scss';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={styles.header}>
                Rachelle and Jackson's Wedding
            </div>
        )
    }
}
