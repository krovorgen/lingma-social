import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

const Users = ({
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    unfollow,
    follow,
    onPageChanged,
}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }
    return (
        <>
            <div>
                {pages.map((p) => (
                    <button className={currentPage === p ? styles['users__pagination--current'] : styles['users__pagination']} onClick={() => { onPageChanged(p); }} type="submit">{p}</button>
                ))}
            </div>
            <div className={styles['users-items']}>
                {
                    users.map((u) => (
                        <div key={u.id} className={styles['users-item']}>
                            <div className={styles['users-item__follow']}>
                                <div className={styles['users-item__follow-images']}>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img src={u.photos.small || '/img/users/1.jpg'} alt="" />
                                    </NavLink>
                                </div>
                                {u.followed
                                    ? <button className={styles['users-item__follow-btn']} onClick={() => { unfollow(u.id); }} type="submit">Unsubscribe</button>
                                    : <button className={styles['users-item__follow-btn']} onClick={() => { follow(u.id); }} type="submit">Subscribe</button>}
                            </div>
                            <div className={styles['users-item__info']}>
                                <div className={styles['users-item__info-name']}>
                                    {u.name}
                                </div>
                                <div className={styles['users-item__info-status']}>{u.status}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
export default Users;
