// Base.js
import React, { useState } from 'react';
import FormularioAdultoMayor from "../components/Base/FormularioAdultoMayor";

const Base = ({ onSectionChange }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleAgregarClick = () => {
        setMostrarFormulario(true);
    };

    const handleCancel = () => {
        setMostrarFormulario(false);
    };

    const handleSubmit = () => {
        onSectionChange("general")
    }

    return (
        <div className="base">
            {!mostrarFormulario ? (
                <div className="base__contenido">
                    <h2 className="base__mensaje">NO SE HA ENCONTRADO UN ADULTO MAYOR REGISTRADO</h2>
                    <p className="base__agregar" onClick={handleAgregarClick} >
                        Agregar Adulto Mayor
                    </p>
                </div>
            ) : (
                <FormularioAdultoMayor onCancel={handleCancel} cambio={handleSubmit} />
            )}
        </div>
    );
};

export default Base;
