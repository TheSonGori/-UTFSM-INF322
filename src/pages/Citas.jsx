// src/pages/Citas.jsx
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Formulario from '../components/Citas/Formulario';
import ConsultaMedicaList from '../components/Citas/ConsultaMedicaList';
import ExamenList from '../components/Citas/ExamenList'; 
import '../stylesheets/Citas/Citas.css';

import CalendarioIcon from '../assets/Iconos/Citas-Medicas/Calendario.png';
import TuboEnsayoIcon from '../assets/Iconos/Citas-Medicas/Laboratorio.png';

const Citas = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [formType, setFormType] = useState('consulta');
    const [consultas, setConsultas] = useState([]);
    const [examenes, setExamenes] = useState([]);

    const handleAddConsulta = (newConsulta) => {
        setConsultas([...consultas, { ...newConsulta, completado: false }]);
        setShowModal(false);
    };

    const handleAddExamen = (newExamen) => {
        setExamenes([...examenes, { ...newExamen, completado: false }]);
        setShowModal(false);
    };

    const handleDeleteConsulta = (indexToDelete) => {
        setConsultas(consultas.filter((_, index) => index !== indexToDelete));
    };

    const handleCompleteConsulta = (indexToComplete) => {
        setConsultas(consultas.map((consulta, index) => 
            index === indexToComplete ? { ...consulta, completado: !consulta.completado } : consulta
        ));
    };

    const handleDeleteExamen = (indexToDelete) => {
        setExamenes(examenes.filter((_, index) => index !== indexToDelete));
    };

    const handleCompleteExamen = (indexToComplete) => {
        setExamenes(examenes.map((examen, index) => 
            index === indexToComplete ? { ...examen, completado: !examen.completado } : examen
        ));
    };

    const openModal = (type) => {
        setModalTitle(type === 'consulta' ? 'Agregar Consulta Médica' : 'Agregar Examen');
        setFormType(type);
        setShowModal(true);
    };

    return (
        <div className="citas">
            <h1 className="citas__title">Citas Médicas</h1>
            <p className="citas__description">Aquí puedes administrar las citas médicas.</p>
            <div className="citas__section">
                <div className="citas__column">
                    <div className="citas__item">
                        <img src={CalendarioIcon} alt="Calendario" className="citas__icon" />
                        <span className="citas__label">Consulta Médica</span>
                        <button onClick={() => openModal('consulta')} className="citas__add-button">+</button>
                    </div>
                    <ConsultaMedicaList
                        consultas={consultas}
                        onDelete={handleDeleteConsulta}
                        onComplete={handleCompleteConsulta}
                    />
                </div>
                <div className="citas__column">
                    <div className="citas__item">
                        <img src={TuboEnsayoIcon} alt="Tubo de Ensayo" className="citas__icon" />
                        <span className="citas__label">Exámenes</span>
                        <button onClick={() => openModal('examen')} className="citas__add-button">+</button>
                    </div>
                    <ExamenList
                        examenes={examenes}
                        onDeleteExamen={handleDeleteExamen}
                        onCompleteExamen={handleCompleteExamen}
                    />
                </div>
            </div>

            {showModal && (
                <Modal title={modalTitle} onClose={() => setShowModal(false)}>
                    <Formulario
                        onSubmit={formType === 'consulta' ? handleAddConsulta : handleAddExamen}
                        type={formType}
                    />
                </Modal>
            )}
        </div>
    );
};

export default Citas;
