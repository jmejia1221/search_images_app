import React, { FC } from "react";

// CSS
import styles from './Thumbnail.module.scss';

type imageType = {
    alt: string,
    src_small: string,
    src_regular: string
}

interface ThumbnailProps {
    image: imageType,
    modalHandler: any
}

const Thumbnail: FC<ThumbnailProps> = ({ image, modalHandler }) => {
    return (
        <div onClick={() => modalHandler(image)} className={styles.content}>
            <span className={styles.shadowImage}>Open Image</span>
            <img
                alt={image.alt}
                className={styles.image}
                src={image.src_small} />
        </div>
    );
}

export default Thumbnail;
