import React from 'react';

import ProfileInfo from '../ProfileInfo';
import MyPostsContainer from '../MyPostsContainer';

import styles from './style.module.scss';

const Profile = ({ photos }) => (
    <div className={styles['main-page']}>
        <ProfileInfo photos={photos} />
        <MyPostsContainer />
    </div>
);

export default Profile;
