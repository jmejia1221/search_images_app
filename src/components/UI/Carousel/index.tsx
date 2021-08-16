import React, {FC, useState} from 'react';

// Components > UI
import Thumbnail from "./Thumbnail";
import Modal from "../Modal";

// CSS
import styles from './Carousel.module.scss';

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

    const openModalHandler = (image: any): void => {
        console.log(image)
        setShowModal(true);
        setExpandImage(image);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <div className={styles.content}>
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
    );
};

export default Carousel;