// src/components/Modal.jsx
import React from 'react';
import '../stylesheets/Modal/Modal.css';

const Modal = ({ title, onClose, children }) => {
    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal__overlay') {
            onClose();
        }
    };

    return (
        <div className="modal__overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className="modal__header">
                    <h2 className="modal__title">{title}</h2>
                    <button className="modal__close" onClick={onClose}>×</button>
                </div>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
