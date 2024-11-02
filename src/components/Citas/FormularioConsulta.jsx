// src/components/Citas/FormularioConsulta.jsx
import React, { useState } from 'react';

const FormularioConsulta = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        doctor: '',
        especialidad: '',
        fecha: '',
        hora: '',
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
            <label>Doctor/a:
                <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} required />
            </label>
            <label>Especialidad:
                <input type="text" name="especialidad" value={formData.especialidad} onChange={handleChange} required />
            </label>
            <label>Fecha:
                <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
            </label>
            <label>Hora:
                <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
            </label>
            <label>Dirección:
                <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
            </label>
            <button type="submit" className="formulario__submit">Agregar</button>
        </form>
    );
};

export default FormularioConsulta;
