// src/components/Citas/ExamenList.jsx
import React from 'react';
import '../../stylesheets/Citas/Citas.css';

const ExamenList = ({ examenes, onDeleteExamen, onCompleteExamen }) => {
    return (
        <div className="citas-list">
            {examenes.length === 0 ? (
                <p className="citas-list__empty">Todavía no se ha agregado un examen</p>
            ) : (
                examenes.map((examen, index) => (
                    <div key={index} className={`citas-list__item ${examen.completado ? 'citas-list__item--completed' : ''}`}>
                        <div className="citas-list__content">
                            <p><strong>Examen: {examen.examen}</strong></p>
                            <p>Fecha: {examen.fecha}</p>
                            <p>Dirección: {examen.direccion}</p>
                            <p>Horario: {examen.horario}</p>
                        </div>
                        <div className="citas-list__actions">
                            <input
                                type="checkbox"
                                className="citas-list__checkbox"
                                onChange={() => onCompleteExamen(index)}
                                title="Marcar como completado"
                                checked={examen.completado || false}
                            />
                            <button
                                onClick={() => onDeleteExamen(index)}
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

export default ExamenList;
