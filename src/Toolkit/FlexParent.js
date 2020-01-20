import React from 'react';
import styles from './FlexParent.scss';

export default class FlexParent extends React.Component {
    render() {
        return (
            <div className={styles.parent}>
                {this.props.children}
            </div>
        )
    }
}
