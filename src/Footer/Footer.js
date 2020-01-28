import React from 'react';

import styles from './Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footerContainer}>
                <img src={'./src/img/tiles smol.jpg'} height={'100%'} width={'100%'} />
            </div>
        )
    }
}
