import React from 'react';

import styles from './style.module.scss';

const MessageItem = ({
    message,
}) => (
    <li className={styles['message-item']}>
        {message}
    </li>
);

export default MessageItem;
