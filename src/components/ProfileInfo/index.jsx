import React from 'react';

import styles from './style.module.scss';
import Preloader from '../atoms/Preloader';

const ProfileInfo = ({ photos }) => {
    if (!photos) {
        return <Preloader />;
    }

    return (
        <>
            <div className={styles['main-page__images']}>
                <img src="img/main-bg.jpg" alt="" className={styles['main-page__img']} />
            </div>
            <div>
                <img src={photos.large} alt="" />
            </div>
        </>
    );
};

export default ProfileInfo;
