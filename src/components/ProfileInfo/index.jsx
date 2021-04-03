import React from 'react';

import styles from './style.module.scss';

const ProfileInfo = () => (
    <>
        <div className={styles['main-page__images']}>
            <img src="img/main-bg.jpg" alt="" className={styles['main-page__img']} />
        </div>
        <div>ava + description</div>
    </>
);

export default ProfileInfo;
