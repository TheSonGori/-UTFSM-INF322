// src/pages/Emergencias.jsx
import React, { useState } from 'react';
import Modal from '../components/Modal';
import AlertaList from '../components/Alertas/AlertaList';
import FormularioAlerta from '../components/Alertas/FormularioAlerta';
import '../stylesheets/Emergencias/Emergencias.css';

import IconoMas from '../assets/Iconos/Alertas/Mas.png';
import IconoReloj from '../assets/Iconos/Alertas/Reloj.png';
import IconoEmergencia from '../assets/Iconos/Alertas/Emergencia.png'; 

const Emergencias = () => {
    const [showModal, setShowModal] = useState(false);
    const [showHistorial, setShowHistorial] = useState(false);
    const [showEmergencyConfirmation, setShowEmergencyConfirmation] = useState(false);
    const [alertas, setAlertas] = useState([]);
    const [historialAlertas, setHistorialAlertas] = useState([]);

    const handleAddAlerta = (nuevaAlerta) => {
        setAlertas([...alertas, nuevaAlerta]);
        setShowModal(false);
    };

    const handleDeleteAlerta = (indexToDelete) => {
        const alertaEliminada = alertas[indexToDelete];
        setAlertas(alertas.filter((_, index) => index !== indexToDelete));
        setHistorialAlertas([...historialAlertas, alertaEliminada]);
    };

    const handleEmergencyClick = () => {
        setShowEmergencyConfirmation(true);
        setTimeout(() => setShowEmergencyConfirmation(false), 3000);
    };

    return (
        <div className="emergencias">
            <div className="emergencias__left">
                <div className="emergencias__header">
                    <h1 className="emergencias__title">Alertas</h1>
                    <div className="emergencias__controls">
                        <button onClick={() => setShowModal(true)} className="emergencias__add-button">
                            <img src={IconoMas} alt="Agregar Alerta" />
                        </button>
                        <button onClick={() => setShowHistorial(true)} className="emergencias__history-button">
                            <img src={IconoReloj} alt="Historial de Alertas" />
                        </button>
                    </div>
                </div>
                <AlertaList alertas={alertas} onDelete={handleDeleteAlerta} />
            </div>

            <div className="emergencias__right">
                <div className="emergencias__emergency-button" onClick={handleEmergencyClick}>
                    <img src={IconoEmergencia} alt="Botón de Emergencia" />
                </div>
                <h2>Botón de Emergencia</h2>
                <p>Al presionarlo se enviará una notificación a todos los contactos de emergencias.</p>
            </div>

            {showModal && (
                <Modal title="Agregar Alerta" onClose={() => setShowModal(false)}>
                    <FormularioAlerta onSubmit={handleAddAlerta} />
                </Modal>
            )}

            {showHistorial && (
                <Modal title="Historial de Alertas" onClose={() => setShowHistorial(false)}>
                    <ul className="historial-list">
                        {historialAlertas.length === 0 ? (
                            <p>No hay alertas en el historial</p>
                        ) : (
                            historialAlertas.map((alerta, index) => (
                                <li key={index} className="historial-list__item">
                                    <p><strong>{alerta.nombre}</strong></p>
                                    <p>Prioridad: {alerta.prioridad}</p>
                                </li>
                            ))
                        )}
                    </ul>
                </Modal>
            )}

            {showEmergencyConfirmation && (
                <Modal title="Modo Emergencia Activado" onClose={() => setShowEmergencyConfirmation(false)}>
                    <p>Se notificará a los contactos de emergencia en los próximos 10 segundos...</p>
                    <p>Para cancelar, cierre esta ventana.</p>
                </Modal>
            )}

        </div>
    );
};

export default Emergencias;
