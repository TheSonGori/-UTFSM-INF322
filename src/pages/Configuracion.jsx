// src/pages/Configuracion.jsx
import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../stylesheets/Configuracion/Configuracion.css';

const Configuracion = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showContactsModal, setShowContactsModal] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [patient, setPatient] = useState({
        nombre: "Nombre",
        apellido: "Apellido",
        fechaNacimiento: "DD/MM/YYYY",
        enfermedades: "Ninguna",
        tratamientos: "Ninguno",
    });
    const [newContact, setNewContact] = useState({ nombre: "", apellido: "", numero: "", correo: "", rol: "" });

    const handleEditPatient = (event) => {
        const { name, value } = event.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleDownloadPDF = (title) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([], { type: 'application/pdf' }));
        link.download = `${title}.pdf`;
        link.click();
    };

    const handleAddContact = () => {
        setContacts([...contacts, newContact]);
        setNewContact({ nombre: "", apellido: "", numero: "", correo: "", rol: "" });
        setShowContactsModal(false);
    };

    const handleDeleteContact = (indexToDelete) => {
        setContacts(contacts.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="configuracion">
            <h1>Configuración y Permisos</h1>

            <div className="configuracion__section">
                <h2>Paciente Actual</h2>
                <p>{patient.nombre} {patient.apellido}</p>
                <button onClick={() => setShowInfoModal(true)}>Ver Información</button>
                <button onClick={() => setShowEditModal(true)}>Editar Información</button>
            </div>

            <div className="configuracion__section">
                <h2>Historial</h2>
                <button onClick={() => handleDownloadPDF("Historial_Citas_Medicas")}>Historial de Citas Médicas</button>
                <button onClick={() => handleDownloadPDF("Historial_Medicamentos")}>Historial de Medicamentos</button>
            </div>

            <div className="configuracion__section">
                <h2>Contactos de Emergencia</h2>
                <button onClick={() => setShowContactsModal(true)}>Ver Contactos de Emergencia</button>
            </div>

            {/* Modal para Ver Información del Paciente */}
            {showInfoModal && (
                <Modal title="Información del Paciente" onClose={() => setShowInfoModal(false)}>
                    <p><strong>Nombre:</strong> {patient.nombre} {patient.apellido}</p>
                    <p><strong>Enfermedades:</strong> {patient.enfermedades}</p>
                    <p><strong>Tratamientos:</strong> {patient.tratamientos}</p>
                </Modal>
            )}

            {/* Modal para Editar Información del Paciente */}
            {showEditModal && (
                <Modal title="Editar Información del Paciente" onClose={() => setShowEditModal(false)}>
                    <form className="configuracion__form">
                        <label>
                            Nombre:
                            <input type="text" name="nombre" value={patient.nombre} onChange={handleEditPatient} />
                        </label>
                        <label>
                            Apellido:
                            <input type="text" name="apellido" value={patient.apellido} onChange={handleEditPatient} />
                        </label>
                        <label>
                            Fecha de Nacimiento:
                            <input type="date" name="fechaNacimiento" value={patient.fechaNacimiento} onChange={handleEditPatient} />
                        </label>
                        <label>
                            Enfermedades:
                            <input type="text" name="enfermedades" value={patient.enfermedades} onChange={handleEditPatient} />
                        </label>
                        <label>
                            Tratamientos:
                            <input type="text" name="tratamientos" value={patient.tratamientos} onChange={handleEditPatient} />
                        </label>
                        <button type="button" onClick={() => setShowEditModal(false)}>Guardar</button>
                    </form>
                </Modal>
            )}

            {/* Modal para Contactos de Emergencia */}
            {showContactsModal && (
                <Modal title="Contactos de Emergencia" onClose={() => setShowContactsModal(false)}>
                    <ul className="contact-list">
                        {contacts.map((contact, index) => (
                            <li key={index} className="contact-list__item">
                                <p><strong>{contact.nombre} {contact.apellido}</strong></p>
                                <p>Tel: {contact.numero}</p>
                                <p>Email: {contact.correo}</p>
                                <p>Rol: {contact.rol}</p>
                                <button onClick={() => handleDeleteContact(index)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <form className="configuracion__form">
                        <label>
                            Nombre:
                            <input type="text" value={newContact.nombre} onChange={(e) => setNewContact({ ...newContact, nombre: e.target.value })} />
                        </label>
                        <label>
                            Apellido:
                            <input type="text" value={newContact.apellido} onChange={(e) => setNewContact({ ...newContact, apellido: e.target.value })} />
                        </label>
                        <label>
                            Número:
                            <input type="text" value={newContact.numero} onChange={(e) => setNewContact({ ...newContact, numero: e.target.value })} />
                        </label>
                        <label>
                            Correo:
                            <input type="email" value={newContact.correo} onChange={(e) => setNewContact({ ...newContact, correo: e.target.value })} />
                        </label>
                        <label>
                            Rol:
                            <input type="text" value={newContact.rol} onChange={(e) => setNewContact({ ...newContact, rol: e.target.value })} />
                        </label>
                        <button type="button" onClick={handleAddContact}>Agregar Contacto</button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default Configuracion;
