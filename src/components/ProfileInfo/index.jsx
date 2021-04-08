import React from 'react';

import styles from './style.module.scss';
import Preloader from '../atoms/Preloader';

const ProfileInfo = ({
    aboutMe,
    contacts,
    fullName,
    lookingForAJOB,
    lookingForAJOBDescription,
    photos,
    userId,
}) => {
    if (!photos) {
        return <Preloader />;
    }
    return (
        <>
            <div className={styles['main-page__images']}>
                <img src="img/main-bg.jpg" alt="" className={styles['main-page__img']} />
            </div>
            <div>
                <ul>
                    <li>
                        {aboutMe}
                    </li>
                    <li>
                        {contacts.vk}
                    </li>
                    <li>
                        {fullName}
                    </li>
                    <li>
                        {lookingForAJOB}
                    </li>
                    <li>
                        {lookingForAJOBDescription}
                    </li>
                    <li>
                        {userId}
                    </li>
                </ul>
                <img src={photos.large} alt="" />
            </div>
        </>
    );
};

export default ProfileInfo;
