import React from 'react';
import './Modal.scss';
import { addZeroesInFront } from '../../utils/functions/functions';

const Modal = ({
    isModalOpen,
    images,
    imageIndex,
    closeModal,
    onImageClick,
}) => {
    return (
        <>
            <div
                className={`Modal_backdrop ${isModalOpen && 'showBackdrop'}`}
            />
            <div className={`Modal_wrapper ${isModalOpen && 'isOpen'}`}>
                <div className='Modal_content'>
                    <img
                        src={images[imageIndex]}
                        alt=''
                        onClick={onImageClick}
                    />
                    <div className='footer'>
                        <div>
                            {addZeroesInFront(imageIndex + 1)} /{' '}
                            {addZeroesInFront(images.length)}
                        </div>
                        <div onClick={closeModal}>Close</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
