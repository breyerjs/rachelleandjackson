import React from 'react';
import SectionHeader from '../Toolkit/SectionHeader';

import styles from './Registry.scss';

const scrollToProps = {
    smooth: true,
}    

export default class Registry extends React.Component {
    render() {
        return (
            <div className={styles.registryMain}>
                <SectionHeader title={"registry"} />
                <div className={styles.registryContent}>
                    You can view our registry <a href={"https://www.theknot.com/us/rachelle-sarmiento-and-jackson-breyer-aug-2020/registry"} target={"_blank"}>on The Knot</a>.
                </div>
            </div>
        )
    }
}
