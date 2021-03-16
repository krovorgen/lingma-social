import React from "react";
import styles from "./style.module.scss";

const NavBar = () => {
    return (
        <nav className={styles['menu']}>
            <ul className={styles["menu__list"]}>
                <li className={styles["menu__list-item"]}>
                    <a href="/profile" className={styles['menu__list-link']}>Profile</a>
                </li>
                <li className={styles["menu__list-item"]}>
                    <a href="/dialogs" className={styles['menu__list-link']}>Messages</a>
                </li>
                <li className={styles["menu__list-item"]}>
                    <a href="/news" className={styles['menu__list-link']}>News</a>
                </li>
                <li className={styles["menu__list-item"]}>
                    <a href="/music" className={styles['menu__list-link']}>Music</a>
                </li>
                <li className={styles["menu__list-item"]}>
                    <a href="/settings" className={styles['menu__list-link']}>Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;