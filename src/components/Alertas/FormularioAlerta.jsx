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
        <form onSubmit={handleSubmit} className="formu">
            <label className="formu__label">Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="formu__input"
                />
            </label>
            <label className="formu__label">Fecha Inicio:
                <input
                    type="date"
                    name="fechaInicio"
                    value={formData.fechaInicio}
                    onChange={handleChange}
                    required
                    className="formu__input"
                />
            </label>
            <label className="formu__label">Fecha Término:
                <input
                    type="date"
                    name="fechaTermino"
                    value={formData.fechaTermino}
                    onChange={handleChange}
                    required
                    className="formu__input"
                />
            </label>
            <label className="formu__label">Hora de la Notificación:
                <input
                    type="time"
                    name="horaNotificacion"
                    value={formData.horaNotificacion}
                    onChange={handleChange}
                    required
                    className="formu__input"
                />
            </label>
            <label className="formu__label">Prioridad:
                <input
                    type="text"
                    name="prioridad"
                    value={formData.prioridad}
                    onChange={handleChange}
                    required
                    className="formu__input"
                />
            </label>
            <button type="submit" className="formu__submit">Agregar</button>
        </form>
    );
};

export default FormularioAlerta;
