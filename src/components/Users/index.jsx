import React from "react";

import styles from "./style.module.scss";

const Users = ({
                   users,
                   follow,
                   unfollow,
                   setUsers
               }) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                followed: true,
                firstName: "Maksim",
                lastName: "Biarozka",
                status: "Hello world",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                followed: false,
                firstName: "Test",
                lastName: "Users",
                status: "Hi bitches",
                location: {city: "Lida", country: "Belarus"}
            },
        ]);
    }

    return (
        <div className={styles["users-items"]}>
            {
                users.map(u => (
                    <div key={u.id} className={styles["users-item"]}>
                        <div className={styles["users-item__follow"]}>
                            <div className={styles["users-item__follow-images"]}>
                                <img src={`/img/users/${u.id}.jpg`} alt=""/>
                            </div>
                            {u.followed ?
                                <button className={styles["users-item__follow-btn"]} onClick={() => {unfollow(u.id)}}>Unsubscribe</button> :
                                <button className={styles["users-item__follow-btn"]} onClick={() => {follow(u.id)}}>Subscribe</button>
                            }
                        </div>
                        <div className={styles["users-item__info"]}>
                            <div className={styles["users-item__info-name"]}>{u.firstName} {u.lastName}</div>
                            <div className={styles["users-item__info-status"]}>{u.status}</div>
                            <div className={styles["users-item__info-location"]}>{u.location.city} {u.location.country}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;