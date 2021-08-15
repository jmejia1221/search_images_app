import React, { FC } from "react";

// CSS
import styles from './Header.module.scss';

interface HeaderProps {
    title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.content}>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;