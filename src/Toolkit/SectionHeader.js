import React from 'react';
import styles from './SectionHeader.scss';

export default class SectionHeader extends React.Component {
    render() {
        return (
            <div className={styles.headerStyles}>
                {this.props.title}
            </div>
        )
    }
}
