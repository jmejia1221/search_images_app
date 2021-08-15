import React, { FC } from 'react';

// Components > UI
import Thumbnail from "./Thumbnail";

// CSS
import styles from './Carousel.module.scss';

interface CarouselProps {
    images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
    return (
        <div className={styles.content}>
            { images.map( t => {
                return (
                    <Thumbnail key={t} />
                )}
            )}
        </div>
    );
};

export default Carousel;