import React from 'react';

import styles from './Registry.scss';

const scrollToProps = {
    smooth: true,
}    

export default class Registry extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.sectionHeader}>
                    Registry
                </div>
                Our registry is located here at this link.
            </div>
        )
    }
}
