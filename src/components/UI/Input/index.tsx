import React, { FC } from "react";

// CSS
import styles from './Input.module.scss';

interface InputProps {
    type: string,
    placeholder?: string,
    value?: string | number,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string
}

const Input: FC<InputProps> = (
    {   type,
        placeholder= 'Add text',
        value,
        onChange,
        label
    }) => {
    return (
        <span className={styles.content}>
            <input
                aria-label={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
            />
        </span>
    );
};

export default Input;