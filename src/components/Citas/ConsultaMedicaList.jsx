// src/components/Citas/ConsultaMedicaList.jsx
import React from 'react';
import '../../stylesheets/Citas/Citas.css';

const ConsultaMedicaList = ({ consultas, onDelete, onComplete }) => {
    return (
        <div className="citas-list">
            {consultas.length === 0 ? (
                <p className="citas-list__empty">Todavía no se ha agregado una consulta médica</p>
            ) : (
                consultas.map((consulta, index) => (
                    <div key={index} className="citas-list__item">
                        <div className="citas-list__content">
                            <p><strong>Dr/a. {consulta.doctor}</strong></p>
                            <p>Fecha: {consulta.fecha}</p>
                            <p>Dirección: {consulta.direccion}</p>
                            <p>Hora: {consulta.hora}</p>
                            <p>Especialidad: {consulta.especialidad}</p>
                        </div>
                        <div className="citas-list__actions">
                            <input
                                type="checkbox"
                                className="citas-list__checkbox"
                                onChange={() => onComplete(index)}
                                title="Marcar como completado"
                            />
                            <button
                                onClick={() => onDelete(index)}
                                className="citas-list__delete-button"
                                title="Eliminar"
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ConsultaMedicaList;
