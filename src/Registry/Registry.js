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
                You can view our registry <a href={"https://registry.theknot.com/rachelle-sarmiento-jackson-breyer-august-2020-ca/31819814"} target={"_blank"}>on the Knot</a>.
            </div>
        )
    }
}
