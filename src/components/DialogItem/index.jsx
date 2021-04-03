import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

const DialogItem = ({
    name,
    id,
}) => (
    <li className={styles['dialog-item']}>
        <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
);

export default DialogItem;
