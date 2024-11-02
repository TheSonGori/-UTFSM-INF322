// src/components/Citas/FormularioExamen.jsx

import React, { useState } from 'react';

const FormularioExamen = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        examen: '',
        fecha: '',
        horario: '',
        direccion: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="formulario">
            <label>Examen:
                <input type="text" name="examen" value={formData.examen} onChange={handleChange} required />
            </label>
            <label>Fecha:
                <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
            </label>
            <label>Horario:
                <input type="time" name="horario" value={formData.horario} onChange={handleChange} required />
            </label>
            <label>Dirección:
                <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
            </label>
            <button type="submit" className="formulario__submit">Agregar</button>
        </form>
    );
};

export default FormularioExamen;
