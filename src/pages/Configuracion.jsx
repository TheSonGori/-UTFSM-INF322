// src/pages/Configuracion.jsx
import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../stylesheets/Configuracion/Configuracion.css';

const Configuracion = () => {
    const [patientInfo, setPatientInfo] = useState({
        name: "Nombre",
        lastName: "Apellido",
        birthDate: "1990-01-01",
        diseases: "Diabetes, Hipertensión",
        treatments: "Insulina, Atenolol"
    });
    const [showPatientInfoModal, setShowPatientInfoModal] = useState(false);
    const [showEditPatientModal, setShowEditPatientModal] = useState(false);
    const [showViewContactsModal, setShowViewContactsModal] = useState(false);
    const [showAddContactsModal, setShowAddContactsModal] = useState(false);
    const [emergencyContacts, setEmergencyContacts] = useState([
        { name: "Juan Pérez", phone: "123456789", email: "juan.perez@example.com", role: "Padre" },
        { name: "María López", phone: "987654321", email: "maria.lopez@example.com", role: "Madre" }
    ]);

    // Función para actualizar la información del paciente
    const handleUpdatePatientInfo = (updatedPatient) => {
        setPatientInfo(updatedPatient);
    };

    // Función para agregar un nuevo contacto de emergencia
    const handleAddEmergencyContact = (newContact) => {
        setEmergencyContacts([...emergencyContacts, newContact]);
        setShowAddContactsModal(false);
    };

    // Función para eliminar un contacto de emergencia
    const handleDeleteEmergencyContact = (indexToDelete) => {
        setEmergencyContacts(emergencyContacts.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="configuracion">
            <h1 className="configuracion__title">Configuración y Permisos</h1>
            
            <section className="configuracion__section">
                <h2>Paciente Actual</h2>
                <p>{patientInfo.name} {patientInfo.lastName}</p>
                <button className="configuracion__button" onClick={() => setShowPatientInfoModal(true)}>Ver Información</button>
                <button className="configuracion__button" onClick={() => setShowEditPatientModal(true)}>Editar Información</button>
            </section>

            <section className="configuracion__section">
                <h2>Historial</h2>
                <button className="configuracion__button" onClick={() => alert("Descargando historial de citas médicas...")}>
                    Citas Médicas
                </button>
                <button className="configuracion__button" onClick={() => alert("Descargando historial de medicamentos...")}>
                    Medicamentos
                </button>
            </section>

            <section className="configuracion__section">
                <h2>Contactos de Emergencia</h2>
                <button className="configuracion__button" onClick={() => setShowViewContactsModal(true)}>Ver</button>
                <button className="configuracion__button" onClick={() => setShowAddContactsModal(true)}>Agregar</button>
            </section>

            {/* Modal para Ver Información del Paciente */}
            {showPatientInfoModal && (
                <Modal title="Información del Paciente" onClose={() => setShowPatientInfoModal(false)}>
                    <p><strong>Nombre:</strong> {patientInfo.name}</p>
                    <p><strong>Apellido:</strong> {patientInfo.lastName}</p>
                    <p><strong>Fecha de Nacimiento:</strong> {patientInfo.birthDate}</p>
                    <p><strong>Enfermedades:</strong> {patientInfo.diseases}</p>
                    <p><strong>Tratamientos:</strong> {patientInfo.treatments}</p>
                </Modal>
            )}

            {/* Modal para Editar Información del Paciente */}
            {showEditPatientModal && (
                <Modal title="Editar Información del Paciente" onClose={() => setShowEditPatientModal(false)}>
                    <form
                        className="modal__form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const updatedPatient = {
                                name: e.target.name.value,
                                lastName: e.target.lastName.value,
                                birthDate: e.target.birthDate.value,
                                diseases: e.target.diseases.value,
                                treatments: e.target.treatments.value
                            };
                            handleUpdatePatientInfo(updatedPatient);
                            setShowEditPatientModal(false);
                        }}
                    >
                        <label>Nombre: <input type="text" name="name" defaultValue={patientInfo.name} required /></label>
                        <label>Apellido: <input type="text" name="lastName" defaultValue={patientInfo.lastName} required /></label>
                        <label>Fecha de Nacimiento: <input type="date" name="birthDate" defaultValue={patientInfo.birthDate} required /></label>
                        <label>Enfermedades: <input type="text" name="diseases" defaultValue={patientInfo.diseases} /></label>
                        <label>Tratamientos: <input type="text" name="treatments" defaultValue={patientInfo.treatments} /></label>
                        <button type="submit" className="configuracion__button--save">Guardar</button>
                    </form>
                </Modal>
            )}

            {/* Modal para Ver y Eliminar Contactos de Emergencia */}
            {showViewContactsModal && (
                <Modal title="Contactos de Emergencia" onClose={() => setShowViewContactsModal(false)}>
                    <ul>
                        {emergencyContacts.map((contact, index) => (
                            <li key={index}>
                                {contact.name} - Teléfono: {contact.phone} - Correo: {contact.email} - Rol: {contact.role}
                                <button onClick={() => handleDeleteEmergencyContact(index)} className="configuracion__button--delete">Eliminar</button>
                            </li>
                        ))}
                    </ul>
                </Modal>
            )}

            {/* Modal para Agregar Contactos de Emergencia */}
            {showAddContactsModal && (
                <Modal title="Agregar Contacto de Emergencia" onClose={() => setShowAddContactsModal(false)}>
                    <form
                        className="modal__form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const newContact = {
                                name: e.target.contactName.value,
                                phone: e.target.contactPhone.value,
                                email: e.target.contactEmail.value,
                                role: e.target.contactRole.value
                            };
                            handleAddEmergencyContact(newContact);
                        }}
                    >
                        <label>Nombre: <input type="text" name="contactName" required /></label>
                        <label>Teléfono: <input type="tel" name="contactPhone" required /></label>
                        <label>Correo: <input type="email" name="contactEmail" required /></label>
                        <label>Rol: <input type="text" name="contactRole" required /></label>
                        <button type="submit" className="configuracion__button--save">Agregar Contacto</button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default Configuracion;
