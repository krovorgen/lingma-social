import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./style.module.scss";

const NavBar = () => {
    return (
        <nav className={styles['menu']}>
            <ul className={styles["menu__list"]}>
                <li className={styles["menu__list-item"]}>
                    <NavLink to="/profile" activeClassName={styles['menu__list-link--active']} className={styles['menu__list-link']}>Profile</NavLink>
                </li>
                <li className={styles["menu__list-item"]}>
                    <NavLink to="/dialogs" activeClassName={styles['menu__list-link--active']} className={styles['menu__list-link']}>Messages</NavLink>
                </li>
                <li className={styles["menu__list-item"]}>
                    <NavLink to="/news" activeClassName={styles['menu__list-link--active']} className={styles['menu__list-link']}>News</NavLink>
                </li>
                <li className={styles["menu__list-item"]}>
                    <NavLink to="/music" activeClassName={styles['menu__list-link--active']} className={styles['menu__list-link']}>Music</NavLink>
                </li>
                <li className={styles["menu__list-item"]}>
                    <NavLink to="/settings" activeClassName={styles['menu__list-link--active']} className={styles['menu__list-link']}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;