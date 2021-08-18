import React, { FC } from "react";

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

// CSS
import styles from './Button.module.scss';

interface ButtonProps {
    iconName?: IconProp,
    onlyIcon?: boolean,
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({
    iconName,
    onlyIcon = false,
    children,
    onClick,
    }) => {
    return (
        <button
            className={styles.content}
            onClick={onClick}>
            { iconName ? (
                <FontAwesomeIcon icon={iconName} />
            ) : null}
            { onlyIcon ? <span>{children}</span> : null }
        </button>
    )
}

export default Button;