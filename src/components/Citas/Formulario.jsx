// src/components/Citas/Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ onSubmit, type }) => {
    const [formData, setFormData] = useState(
        type === 'consulta'
            ? { doctor: '', especialidad: '', fecha: '', hora: '', direccion: '' }
            : { examen: '', fecha: '', horario: '', direccion: '' }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {type === 'consulta' ? (
                <>
                    <label className="form__label">Doctor/a:
                        <input
                            type="text"
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">Especialidad:
                        <input
                            type="text"
                            name="especialidad"
                            value={formData.especialidad}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">Fecha:
                        <input
                            type="date"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">Hora:
                        <input
                            type="time"
                            name="hora"
                            value={formData.hora}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">Dirección:
                        <input
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                </>
            ) : (
                <>
                    <label className="form__label">Examen:
                        <input
                            type="text"
                            name="examen"
                            value={formData.examen}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">Fecha:
                        <input
                            type="date"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">Horario:
                        <input
                            type="time"
                            name="horario"
                            value={formData.horario}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">Dirección:
                        <input
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                </>
            )}
            <button type="submit" className="form__submit">Agregar</button>
        </form>
    );
};

export default Formulario;
