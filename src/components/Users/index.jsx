import React from 'react';
import * as axios from 'axios';

import styles from './style.module.scss';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div className={styles['users-items']}>
                {
                    this.props.users.map((u) => (
                        <div key={u.id} className={styles['users-item']}>
                            <div className={styles['users-item__follow']}>
                                <div className={styles['users-item__follow-images']}>
                                    <img src={u.photos.small || '/img/users/1.jpg'} alt="" />
                                </div>
                                {u.followed
                                    ? <button className={styles['users-item__follow-btn']} onClick={() => { this.props.unfollow(u.id); }} type="submit">Unsubscribe</button>
                                    : <button className={styles['users-item__follow-btn']} onClick={() => { this.props.follow(u.id); }} type="submit">Subscribe</button>}
                            </div>
                            <div className={styles['users-item__info']}>
                                <div className={styles['users-item__info-name']}>
                                    {u.name}
                                </div>
                                <div className={styles['users-item__info-status']}>{u.status}</div>
                                <div className={styles['users-item__info-location']}>
                                    {/* {u.location.city} */}
                                    {/* {' '} */}
                                    {/* {u.location.country} */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Users;
