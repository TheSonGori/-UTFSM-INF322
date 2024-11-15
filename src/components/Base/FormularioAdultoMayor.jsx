// FormularioAdultoMayor.js
import React, { useState } from 'react';

const FormularioAdultoMayor = ({ onCancel, cambio}) => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        prevencion: '',
        fechaNacimiento: ''
    });

    const isFormComplete = Object.values(formValues).every(value => value.trim() !== '');

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="formulario">
            <div className="formulario__contenido">
                <h2 className="formulario__titulo">
                    <span className="formulario__icono">✸</span>
                    <span className="formulario__texto-titulo">INFORMACION</span>
                    <span className="formulario__icono">✸</span>
                </h2>
                <hr className="formulario__linea" />

                <form className="formulario__campos" onSubmit={handleSubmit}>
                    <div className="formulario__campo">
                        <label className="formulario__label" htmlFor="nombre">Nombre</label>
                        <input
                            className="formulario__input"
                            type="text"
                            id="nombre"
                            placeholder="Nombre"
                            value={formValues.nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="formulario__campo">
                        <label className="formulario__label" htmlFor="apellido">Apellido</label>
                        <input
                            className="formulario__input"
                            type="text"
                            id="apellido"
                            placeholder="Apellido"
                            value={formValues.apellido}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="formulario__campo">
                        <label className="formulario__label" htmlFor="prevencion">Sistema de Salud</label>
                        <input
                            className="formulario__input"
                            type="text"
                            id="prevencion"
                            placeholder="Banmédica / Fonasa / Consalud / etc"
                            value={formValues.prevencion}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="formulario__campo">
                        <label className="formulario__label" htmlFor="fechaNacimiento">Día de Nacimiento</label>
                        <input
                            className="formulario__input"
                            type="text"
                            id="fechaNacimiento"
                            placeholder="Día / Mes / Año"
                            value={formValues.fechaNacimiento}
                            onChange={handleChange}
                        />
                    </div>
                    <hr className="formulario__linea"/>

                    <div className="formulario__botones">
                        <button
                            type="submit"
                            className={`formulario__boton ${isFormComplete ? 'formulario__boton--activo' : ''}`}
                            disabled={!isFormComplete}
                            onClick={cambio}
                        >
                            Agregar
                        </button>
                        <button
                            type="button"
                            className="formulario__boton formulario__boton--cancelar"
                            onClick={onCancel}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioAdultoMayor;
