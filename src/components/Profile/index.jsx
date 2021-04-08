import React from 'react';

import ProfileInfo from '../ProfileInfo';
import MyPostsContainer from '../MyPostsContainer';

import styles from './style.module.scss';

const Profile = ({
    aboutMe,
    contacts,
    fullName,
    lookingForAJOB,
    lookingForAJOBDescription,
    photos,
    userId,
}) => (
    <div className={styles['main-page']}>
        <ProfileInfo
            aboutMe={aboutMe}
            contacts={contacts}
            fullName={fullName}
            lookingForAJOB={lookingForAJOB}
            lookingForAJOBDescription={lookingForAJOBDescription}
            photos={photos}
            userId={userId}
        />
        <MyPostsContainer />
    </div>
);

export default Profile;
