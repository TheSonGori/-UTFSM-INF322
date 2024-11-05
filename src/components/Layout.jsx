import React, { useState } from 'react';
import NavBar from './NavBar';
import Logout from './Logout';
import Base from '../pages/Base';
import Medicacion from '../pages/Medicacion';
import Citas from '../pages/Citas';
import Emergencias from '../pages/Emergencias';
import Configuracion from '../pages/Configuracion';
import General from '../pages/EstadoGeneral';
import Landing from '../pages/Landing';

const Layout = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleLogout = () => {
        console.log('Logging out...');
        window.location.hash = 'landing';
        setActiveSection('landing');
    };

    if (activeSection === "landing") {
        return <Landing onSectionChange={handleSectionChange} />;
    }

    return (
        <div className="layout">
            <header className="layout__header">
                <Logout onLogout={handleLogout} />
            </header>
            <div className="layout__main">
                <NavBar onSectionChange={handleSectionChange} />
                <main className="layout__content">
                    {activeSection === "medicacion" && <Medicacion />}
                    {activeSection === "citas" && <Citas />}
                    {activeSection === "emergencias" && <Emergencias />}
                    {activeSection === "configuracion" && <Configuracion />}
                    {activeSection === "general" && <General onSectionChange={handleSectionChange} />}
                    {activeSection === null && <Base onSectionChange={handleSectionChange} />}
                </main>
            </div>
        </div>
    );
};

export default Layout;