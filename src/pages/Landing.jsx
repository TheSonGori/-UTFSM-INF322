// Landing.jsx
import React, { useState } from 'react';
import Modal from '../components/Modal';
import companyLogo from '../assets/Logo.png';
import mainImage from '../assets/Imagenes/1.png';
import secondImage from '../assets/Imagenes/2.jpg';
import thirdImage from '../assets/Imagenes/3.png';

const Landing = ({ onSectionChange, onLogout }) => {
    const [activeSection, setActiveSection] = useState("main");
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showMessageConfirmation, setShowMessageConfirmation] = useState(false);
    const [authType, setAuthType] = useState(""); 

    const openAuthModal = (type) => {
        setAuthType(type);
        setShowAuthModal(true);
    };

    const handleAuthSubmit = () => {
        setShowAuthModal(false);
        onSectionChange(null); // Navigate to base content
    };
    
    const handleEnviarClick = () => {
        setShowMessageConfirmation(true);
        setTimeout(() => setShowEmergencyConfirmation(false), 3000);
    };

    const handleLogout = () => {
        onLogout();
        setActiveSection("main");
    };
    // FAQ Data
    const faqData = [
        {
            question: "¿Cómo configuro los recordatorios de medicación?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "¿Puedo recibir alertas de emergencia en mi teléfono?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit."
        },
        {
            question: "¿Cómo hago el seguimiento de las citas médicas de mi ser querido?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit."
        },
        {
            question: "¿La aplicación es gratuita o tiene algún costo?",
            answer: "La aplicación es completamente gratuita."
        },
        {
            question: "¿Cómo puedo agregar más cuidadores para ayudar en el monitoreo?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            question: "¿Qué tipo de alertas puedo recibir en caso de emergencia?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
        }
    ];

    return (
        <div className="landing">
            <header className="landing__header">
                <div className="landing__logo-container">
                    <img src={companyLogo} alt="Cereen" className="landing__logo" />
                </div>
                <nav className="landing__nav">
                    <a href="#" onClick={() => setActiveSection("main")}>Inicio</a>
                    <a href="#" onClick={() => setActiveSection("faq")}>Preguntas Frecuentes</a>
                    <a href="#" onClick={() => setActiveSection("quienes-somos")}>¿Quienes Somos?</a>
                    <a href="#" onClick={() => setActiveSection("contacto")}>Contáctanos</a>
                </nav>
                <div className="landing__auth-buttons">
                <button 
                        className="landing__login-btn" 
                        onClick={() => openAuthModal("login")}
                    >
                        Iniciar Sesión
                    </button>
                    <button 
                        className="landing__register-btn" 
                        onClick={() => openAuthModal("register")}
                    >
                        Registrarse
                    </button>
                </div>
            </header>

            <main className="landing__main">
                {activeSection === "main" && (
                    <div className="landing__content">
                        <div className="landing__text-section">
                            <h2 className="landing__title">
                                EL CUIDADO QUE ELLOS MERECEN, LA 
                                <span className="landing__highlight">PAZ MENTAL</span>
                                QUE TU NECESITAS.
                            </h2>
                            
                            <div className="landing__cta-section">
                                <div className="landing__cta-item">
                                    <span className="landing__bullet">••</span>
                                    <p>Comienza a cuidar mejor hoy</p>
                                </div>
                                <div className="landing__cta-item">
                                    <span className="landing__bullet">••</span>
                                    <p>Explora como podemos ayudarte</p>
                                </div>
                            </div>
                        </div>

                        <div className="landing__images-section">
                            <div className="landing__main-image">
                                <img src={mainImage} alt="Elderly person celebrating" />
                            </div>
                            <div className="landing__sidebar">
                                <div className="landing__wellness-card">
                                    <h2>Tu tranquilidad, su Bienestar</h2>
                                    <img src={secondImage} alt="Caregiver with patient" />
                                </div>
                                <div className="landing__reminder-card">
                                    <img src={thirdImage} alt="Medical care" />
                                    <h2>RECIBE RECORDATORIOS, ALERTAS Y SEGUIMIENTO PERSONALIZADO</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === "faq" && (
                    <div className="landing__faq">
                        <h2 className="landing__section-title">Preguntas Frecuentes</h2>
                        <div className="landing__faq-list">
                            {faqData.map((faq, index) => (
                                <div key={index} className="landing__faq-item">
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {activeSection === "quienes-somos" && (
                    <div className="landing__about">
                        <div className="landing__section-wrapper">
                            <div className="landing__section-title-container">
                                <span className="landing__section-highlight">Nuestra Misión</span>
                            </div>
                            <p className="landing__section-text">
                                Nuestra misión es crear una plataforma integral que facilite el 
                                seguimiento de la salud y el bienestar de las personas mayores. 
                                Creemos que cada persona merece atención personalizada y que la 
                                tecnología puede ser un aliado poderoso en el cuidado diario. 
                                Trabajamos para ofrecer recordatorios de medicación, gestión de citas 
                                médicas y un sistema de alertas para emergencias, todo en un solo lugar.
                            </p>

                            <div className="landing__section-title-container">
                                <span className="landing__section-highlight">Nuestro Equipo</span>
                            </div>
                            <p className="landing__section-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor 
                                risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque laudantium.
                            </p>
                        </div>
                    </div>
                )}

                {activeSection === "contacto" && (
                    <div className="landing__contact">
                        <div className="landing__section-wrapper">
                            <h2 className="landing__contact-title">
                                NOS GUSTARÍA SABER DE TI <span className="landing__ornament">✱</span>
                            </h2>
                            <p className="landing__contact-subtitle">
                                Estamos aquí para ayudarte. Si tienes mas preguntas, háganoslo saber.
                            </p>
                            
                            <div className="landing__contact-form">
                                <input 
                                    type="text" 
                                    placeholder="Pregunta" 
                                    className="landing__contact-input"
                                />
                                <textarea 
                                    placeholder="(...)" 
                                    className="landing__contact-textarea"
                                />
                                <div className="landing__contact-email">
                                    <span>✉</span> soporte@cereen.cl
                                </div>
                                <button className="landing__contact-submit" onClick={handleEnviarClick}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="landing__curl-top"></div>
                <div className="landing__curl-bottom"></div>
            </main>
            
            {showMessageConfirmation && (
                <Modal title="Mensaje enviado" onClose={() => setShowMessageConfirmation(false)}>
                    <p>Recibirá una respuesta pronto.</p>
                </Modal>
            )}
            
            {showAuthModal && (
                <div className="landing__auth-modal">
                    <div className="landing__auth-modal-content">
                        <h2>{authType === "login" ? "Iniciar Sesión" : "Registrarse"}</h2>
                        <input type="email" placeholder="Correo electrónico" />
                        <input type="password" placeholder="Contraseña" />
                        <button 
                            onClick={() => {
                                handleAuthSubmit();
                                onSectionChange(null); // Navigate to base content
                            }} 
                            className="landing__auth-submit"
                        >
                            {authType === "login" ? "Iniciar Sesión" : "Registrarse"}
                        </button>
                        <button 
                            onClick={() => setShowAuthModal(false)} 
                            className="landing__auth-close"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
    
    
};

export default Landing;