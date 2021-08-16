import React, { FC } from 'react';

// Components > UI
import Thumbnail from "./Thumbnail";

// CSS
import styles from './Carousel.module.scss';

interface CarouselProps {
    images: object[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
    return (
        <div className={styles.content}>
            { images.map( (img: any) => {
                return (
                    <Thumbnail
                        image={img}
                        key={img.id} />
                )}
            )}
        </div>
    );
};

export default Carousel;