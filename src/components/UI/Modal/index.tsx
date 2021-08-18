import React, { FC } from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

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
        <>
            {isShowModal && (
                <div className={classNames(styles.container, {[styles.show]: isShowModal})}>
                    <Backdrop show={true} />
                    <div className={styles.content}>
                        <span
                            onClick={closeModal}
                            className={styles.closeButton}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;