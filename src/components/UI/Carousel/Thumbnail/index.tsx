import React, { FC } from "react";

// CSS
import styles from './Thumbnail.module.scss';

type imageType = {
    alt: string,
    src_small: string
}

interface ThumbnailProps {
    image: imageType
}

const Thumbnail: FC<ThumbnailProps> = ({ image }) => {
    return (
        <div className={styles.content}>
            <img
                alt={image.alt}
                className={styles.image}
                src={image.src_small} />
        </div>
    );
}

export default Thumbnail;
