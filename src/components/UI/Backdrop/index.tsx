import React, { FC } from 'react';

// CSS
import styles from './Backdrop.module.scss';

interface BackdropProps {
    show: boolean,
    closeHandler?: (event: React.MouseEvent<HTMLInputElement>) => void
}

const Backdrop: FC<BackdropProps> = ({ closeHandler, show}) => {
    return (
        show ? <div onClick={closeHandler} className={styles.Backdrop}></div> : null
    );
};

export default Backdrop;