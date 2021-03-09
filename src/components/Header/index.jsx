import React from "react";

import styles from "./style.module.scss";

const Header = () => {
    return (
        <header className={styles['header']}>
            <img className={styles['header__logo']} src="img/react.svg" alt="logo"/>
            <h1 className={styles['header__title']}>LINGMA SOCIAL</h1>
        </header>
    )
}

export default Header;