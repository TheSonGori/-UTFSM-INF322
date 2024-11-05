// NavBar.jsx
import React, { useState } from 'react';
import profilePicture from '../assets/Iconos/Hamburguesa/Icon.png';
import companyLogo from '../assets/Logo.png';
import iconMedicacion from '../assets/Iconos/Hamburguesa/SecciondeMedicacion.png';
import iconCitas from '../assets/Iconos/Hamburguesa/CitasMedicas.png';
import iconEmergencias from '../assets/Iconos/Hamburguesa/AlertasyEmergencias.png';
import iconConfiguracion from '../assets/Iconos/Hamburguesa/ConfiguracionyPermisos.png';

const NavBar = ({ onSectionChange }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [selectedUser, setSelectedUser] = useState("Seleccione usuario");
    const [activeSection, setActiveSection] = useState(null);

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        setShowUserMenu(false);
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
        onSectionChange(section);
    };

    return (
        <nav className="navbar">
            <div className="navbar__top">
                <div className="navbar__logo">
                    <a 
                        href="#"
                        onClick={() => handleSectionClick(null)}
                    >
                        <img src={companyLogo} alt="Empresa" className="navbar__logo-image" />
                    </a>
                </div>
            </div>
            <div className="navbar__profile">
                <img src={profilePicture} alt="Perfil" className="navbar__profile-image" />
                <button className="navbar__triangle-button" onClick={toggleUserMenu}>
                    {selectedUser} <span className={`navbar__triangle-icon ${showUserMenu ? 'rotated' : ''}`}>▼</span>
                </button>
                {showUserMenu && (
                    <ul className="navbar__user-menu">
                        <li className="navbar__user-item" onClick={() => handleUserSelect("Usuario 1")}>Usuario 1</li>
                        <li className="navbar__user-item" onClick={() => handleUserSelect("Usuario 2")}>Usuario 2</li>
                        <li className="navbar__user-item" onClick={() => handleUserSelect("Usuario 3")}>Usuario 3</li>
                    </ul>
                )}
            </div>
            <div className="navbar__menu-container">
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a
                            href="#medicacion"
                            className={`navbar__link ${activeSection === "medicacion" ? "active" : ""}`}
                            onClick={() => handleSectionClick("medicacion")}
                        >
                            <img src={iconMedicacion} alt="Medicación" className="navbar__icon"/>
                            Sección de Medicación
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a
                            href="#citas"
                            className={`navbar__link ${activeSection === "citas" ? "active" : ""}`}
                            onClick={() => handleSectionClick("citas")}
                        >
                            <img src={iconCitas} alt="Citas Médicas" className="navbar__icon"/>
                            Citas Médicas
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a
                            href="#emergencias"
                            className={`navbar__link ${activeSection === "emergencias" ? "active" : ""}`}
                            onClick={() => handleSectionClick("emergencias")}
                        >
                            <img src={iconEmergencias} alt="Emergencias" className="navbar__icon"/>
                            Alertas y Emergencias
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a
                            href="#configuracion"
                            className={`navbar__link ${activeSection === "configuracion" ? "active" : ""}`}
                            onClick={() => handleSectionClick("configuracion")}
                        >
                            <img src={iconConfiguracion} alt="Configuración" className="navbar__icon"/>
                            Configuración y Permisos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
