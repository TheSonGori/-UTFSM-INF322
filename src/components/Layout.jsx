// Layout.jsx
import React, { useState } from 'react';
import NavBar from './NavBar';
import Logout from './Logout';
import Base from '../pages/Base';
import Medicacion from '../pages/Medicacion';
import Citas from '../pages/Citas';
import Emergencias from '../pages/Emergencias';
import Configuracion from '../pages/Configuracion';

const Layout = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="layout">
            <header className="layout__header">
                <Logout />
            </header>
            <div className="layout__main">
                <NavBar onSectionChange={handleSectionChange} />
                <main className="layout__content">
                    {activeSection === "medicacion" && <Medicacion />}
                    {activeSection === "citas" && <Citas />}
                    {activeSection === "emergencias" && <Emergencias />}
                    {activeSection === "configuracion" && <Configuracion />}
                    {activeSection === null && <Base />}
                </main>
            </div>
        </div>
    );
};

export default Layout;
