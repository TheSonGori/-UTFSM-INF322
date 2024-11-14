// src/components/Alertas/AlertaList.jsx
import React from 'react';
import '../../stylesheets/Emergencias/Emergencias.css';

const AlertaList = ({ alertas, onDelete }) => {
    return (
        <div className="alerta-list">
            {alertas.length === 0 ? (
                <p className="alerta-list__empty">Todavía no se ha agregado una alerta</p>
            ) : (
                alertas.map((alerta, index) => (
                    <div key={index} className="alerta-list__item">
                        <div className="alerta-list__content">
                            <p><strong>{alerta.nombre}</strong></p>
                            <p>Prioridad: {alerta.prioridad}</p>
                        </div>
                        <button
                            onClick={() => onDelete(index)}
                            className="alerta-list__delete-button"
                            title="Eliminar"
                        >
                            🗑️
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default AlertaList;
