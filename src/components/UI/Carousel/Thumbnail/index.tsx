import React, { FC } from "react";

// CSS
import styles from './Thumbnail.module.scss';

const Thumbnail: FC = () => {
    return (
        <div className={styles.content}>
            60 x 60
        </div>
    );
}

export default Thumbnail;
