import React from 'react';
import gearIcon from '../assets/Iconos/Log-Out/Ruedita.png';

const Logout = () => {
    const handleLogout = () => {
        console.log('Cerrando sesión...');
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            <div className="logout-button__icon-container">
                <img src={gearIcon} alt="Engranaje" className="logout-button__icon" />
            </div>
            <span className="logout-button__text">Cerrar Sesión</span>
        </button>
    );
};

export default Logout;
