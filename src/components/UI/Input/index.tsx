import React, { FC } from "react";

// CSS
import styles from './Input.module.scss';

interface InputProps {
    type: string,
    placeholder?: string
}

const Input: FC<InputProps> = ({ type, placeholder= 'Add text' }) => {
    return (
        <span className={styles.content}>
            <input
                placeholder={placeholder}
                type={type}
            />
        </span>
    );
};

export default Input;