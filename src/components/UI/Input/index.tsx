import React, { FC } from "react";

// CSS
import styles from './Input.module.scss';

interface InputProps {
    type: string,
    placeholder?: string,
    value?: string | number,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = (
    {   type,
        placeholder= 'Add text',
        value,
        onChange
    }) => {
    return (
        <span className={styles.content}>
            <input
                onChange={onChange}
                placeholder={placeholder}
                type={type}
            />
        </span>
    );
};

export default Input;