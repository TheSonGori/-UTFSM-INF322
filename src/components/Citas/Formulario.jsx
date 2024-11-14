// src/components/Citas/Formulario.jsx
import React, { useState, useEffect } from 'react';

const Formulario = ({ onSubmit, type, selectedDate, onClose }) => {
    const initialState =
        type === 'consulta'
            ? { doctor: '', especialidad: '', fecha: '', hora: '', direccion: '' }
            : type === 'examen'
                ? { examen: '', fecha: '', horario: '', direccion: '' }
                : {
                    nombre: '',
                    dosis: '',
                    fechaInicio: '',
                    duracion: '',
                    vecesPorDia: '',
                    cadaCuanto: '',
                    horaPrimeraIngesta: '',
                };

    const [formData, setFormData] = useState(initialState);
    const [isFormComplete, setIsFormComplete] = useState(false);

    useEffect(() => {
        if (selectedDate) {
            // Formatear la fecha seleccionada en 'YYYY-MM-DD' sin ajustes de zona horaria
            const year = selectedDate.getFullYear();
            const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
            const day = ('0' + selectedDate.getDate()).slice(-2);
            const dateStr = `${year}-${month}-${day}`;

            if (type === 'medicamento') {
                setFormData((prev) => ({ ...prev, fechaInicio: dateStr }));
            } else {
                setFormData((prev) => ({ ...prev, fecha: dateStr }));
            }
        }
    }, [selectedDate, type]);

    useEffect(() => {
        // Validar si todos los campos están llenos
        const allFieldsFilled = Object.values(formData).every((value) => value !== '');
        setIsFormComplete(allFieldsFilled);
    }, [formData]);

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
                    <label className="form__label">
                        Doctor/a:
                        <input
                            type="text"
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Especialidad:
                        <input
                            type="text"
                            name="especialidad"
                            value={formData.especialidad}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Fecha:
                        <input
                            type="date"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Hora:
                        <input
                            type="time"
                            name="hora"
                            value={formData.hora}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Dirección:
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
            ) : type === 'examen' ? (
                <>
                    <label className="form__label">
                        Examen:
                        <input
                            type="text"
                            name="examen"
                            value={formData.examen}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Fecha:
                        <input
                            type="date"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Horario:
                        <input
                            type="time"
                            name="horario"
                            value={formData.horario}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Dirección:
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
                    <label className="form__label">
                        Nombre del Medicamento:
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Dosis:
                        <input
                            type="text"
                            name="dosis"
                            value={formData.dosis}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Fecha de Inicio:
                        <input
                            type="date"
                            name="fechaInicio"
                            value={formData.fechaInicio}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Duración (días):
                        <input
                            type="number"
                            name="duracion"
                            value={formData.duracion}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Veces por Día:
                        <input
                            type="number"
                            name="vecesPorDia"
                            value={formData.vecesPorDia}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Cada Cuánto (horas):
                        <input
                            type="number"
                            name="cadaCuanto"
                            value={formData.cadaCuanto}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                    <label className="form__label">
                        Hora de Primera Ingesta:
                        <input
                            type="time"
                            name="horaPrimeraIngesta"
                            value={formData.horaPrimeraIngesta}
                            onChange={handleChange}
                            required
                            className="form__input"
                        />
                    </label>
                </>
            )}
            <div className="form__buttons">
                <button
                    type="submit"
                    className={`form__button form__submit ${isFormComplete ? 'enabled' : ''}`}
                    disabled={!isFormComplete}
                >
                    Agregar
                </button>
                <button type="button" className="form__button form__cancel" onClick={onClose}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default Formulario;
