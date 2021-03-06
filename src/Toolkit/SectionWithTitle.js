import React from 'react';
import styles from './SectionWithTitle.scss';

export default class SectionWithTitle extends React.Component {
    render() {
        return (
            <div className={styles.section}>
                <div className={styles.title}>{this.props.title}</div>
                {this.props.children}
            </div>
        )
    }
}
