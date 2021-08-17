import React, {FC, useRef, useState} from 'react';

// Libs
import {faLongArrowAltLeft, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";

// Components > UI
import Thumbnail from "./Thumbnail";
import Modal from "../Modal";

// CSS
import styles from './Carousel.module.scss';
import Button from "../Button";

interface CarouselProps {
    images: object[];
}

type imageType = {
    alt: string,
    src_small: string,
    src_regular: string
}

const Carousel: FC<CarouselProps> = ({ images }) => {
    const [expandImage, setExpandImage] = useState<imageType>({
        alt: '',
        src_regular: '',
        src_small: ''
    });
    const [showModal, setShowModal] = useState<boolean>(false);
    const contentElement = useRef(null);

    const openModalHandler = (image: any): void => {
        setShowModal(true);
        setExpandImage(image);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    const carouselHandler = (
        direction: string,
        speed: number,
        distance: number,
        step: number): void => {
        let element = contentElement.current;
        let scrollAmount: number = 0;
        let slideTimer = setInterval(function(){
            if (direction === 'left'){
                // @ts-ignore
                element.scrollLeft -= step;
            } else {
                // @ts-ignore
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    return (
        <>
            <div ref={contentElement} className={styles.content}>
                { images.map( (img: any) => {
                    return (
                        <Thumbnail
                            modalHandler={openModalHandler}
                            image={img}
                            key={img.id} />
                    )}
                )}
                <Modal
                    closeModal={closeModalHandler}
                    isShowModal={showModal}>
                    <figure className={styles.expandedImage}>
                        <img
                            alt={expandImage.alt}
                            className={styles.modalImage}
                            src={expandImage?.src_regular} />
                        <figcaption>
                            {expandImage.alt || 'No caption'}
                        </figcaption>
                    </figure>
                </Modal>
            </div>
            <div className={styles.buttonActions}>
                <div>
                    <Button onClick={
                            () => carouselHandler('left', 25, 300, 10)
                        }
                        iconName={faLongArrowAltLeft} />
                    <Button onClick={
                            () => carouselHandler('right', 25, 300, 10)
                        }
                        iconName={faLongArrowAltRight} />
                </div>
            </div>
        </>
    );
};

export default Carousel;