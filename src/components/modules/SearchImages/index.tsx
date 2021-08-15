import React, { FC } from "react";

// components > UI
import Input from "../../UI/Input";
import Carousel from "../../UI/Carousel";

// CSS
import styles from './Search.module.scss';

const images: string[] = ['1', '2', '3', '4', '6', '7', '8', '9', '10'];

const SearchImages: FC = () => {
    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <Input type="text" />
            </header>
            <section className={styles.section}>
                <Carousel images={images} />
            </section>
        </div>
    );
}

export default SearchImages;
