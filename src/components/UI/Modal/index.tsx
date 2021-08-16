import React, { FC } from 'react';

// CSS
import styles from './Modal.module.scss';
import classNames from "classnames";
import Backdrop from "../Backdrop";

interface ModalProps {
    isShowModal: boolean,
    closeModal?: () => void
}

const Modal: FC<ModalProps> = ({ isShowModal, closeModal, children }) => {
    return (
        <div className={classNames(styles.container, {[styles.show]: isShowModal})}>
            <Backdrop show={true} />
            <div className={styles.content}>
                <span
                    onClick={closeModal}
                    className={styles.closeButton}>
                    X
                </span>
                {children}
            </div>
        </div>
    );
};

export default Modal;