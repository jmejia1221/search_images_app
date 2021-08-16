import React, { FC } from "react";

// CSS
import styles from './Spinner.module.scss';

const Spinner: FC = () => {
    return (
        <div className={styles.loader}></div>
    );
};

export default Spinner;