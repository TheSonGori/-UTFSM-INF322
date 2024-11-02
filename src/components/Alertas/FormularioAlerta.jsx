// src/components/Alertas/FormularioAlerta.jsx
import React, { useState } from 'react';

const FormularioAlerta = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        fechaInicio: '',
        fechaTermino: '',
        horaNotificacion: '',
        prioridad: ''
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
            <label className="formulario__label">Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="formulario__input"
                />
            </label>
            <label className="formulario__label">Fecha Inicio:
                <input
                    type="date"
                    name="fechaInicio"
                    value={formData.fechaInicio}
                    onChange={handleChange}
                    required
                    className="formulario__input"
                />
            </label>
            <label className="formulario__label">Fecha Término:
                <input
                    type="date"
                    name="fechaTermino"
                    value={formData.fechaTermino}
                    onChange={handleChange}
                    required
                    className="formulario__input"
                />
            </label>
            <label className="formulario__label">Hora de la Notificación:
                <input
                    type="time"
                    name="horaNotificacion"
                    value={formData.horaNotificacion}
                    onChange={handleChange}
                    required
                    className="formulario__input"
                />
            </label>
            <label className="formulario__label">Prioridad:
                <input
                    type="text"
                    name="prioridad"
                    value={formData.prioridad}
                    onChange={handleChange}
                    required
                    className="formulario__input"
                />
            </label>
            <button type="submit" className="formulario__submit">Agregar</button>
        </form>
    );
};

export default FormularioAlerta;
