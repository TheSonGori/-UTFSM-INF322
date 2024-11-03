import React from 'react';
import relojIcon from '../assets/Iconos/Index-Sesion/Hora.png';
import corazonIcon from '../assets/Iconos/Index-Sesion/Corazon.png';
import calendarioIcon from '../assets/Iconos/Index-Sesion/Calendario.png';
import pastillasIcon from '../assets/Iconos/Index-Sesion/Pastillas.png';
import carasIcon from '../assets/Iconos/Index-Sesion/Caras.png';

const EstadoGeneral = ({ onSectionChange }) => {
    return (
        <div className="estado-general">
            <div className="estado-general__centro">
                <div className="estado-general__hora">
                    <img src={relojIcon} alt="Reloj" className="estado-general__icono-reloj" />
                    <span className="estado-general__texto-hora">00:00</span>
                </div>

                <div className="estado-general__indicadores">
                    <div className="estado-general__salud">
                        <div className="estado-general__valor">
                            <div className="estado-general__contenido">
                                <img src={corazonIcon} alt="Corazón" className="estado-general__icono-indicador"/>
                                <span>72 [RPM]</span>
                            </div>
                            <div className="estado-general__circulo verde"></div>
                        </div>
                        <div className="estado-general__valor">
                            <div className="estado-general__contenido">
                                <img src={corazonIcon} alt="Glucosa" className="estado-general__icono-indicador"/>
                                <span>100-135 [mg/dL]</span>
                            </div>
                            <div className="estado-general__circulo amarillo"></div>
                        </div>
                        <div className="estado-general__valor">
                            <div className="estado-general__contenido">
                                <img src={corazonIcon} alt="Presión" className="estado-general__icono-indicador"/>
                                <span>115-120 [mmHg]</span>
                            </div>
                            <div className="estado-general__circulo verde"></div>
                        </div>
                    </div>
                </div>

                <div className="estado-general__titulo">
                    <span className="estado-general__bolita gris"></span>
                    <span className="estado-general__bolita negro"></span>
                    <span className="estado-general__texto-titulo">Estado General de [Nombre]</span>
                    <span className="estado-general__bolita negro"></span>
                    <span className="estado-general__bolita gris"></span>
                </div>

                <div className="estado-general__caras">
                    <img src={carasIcon} alt="Indicador de estado" className="estado-general__icono-caras"/>
                </div>

                <div className="estado-general__barra"></div>
            </div>

            <div className="estado-general__botones">
                <div className="estado-general__boton" onClick={() => onSectionChange("citas")}>
                    <img src={calendarioIcon} alt="Calendario" className="estado-general__icono-lateral"/>
                    <span>Agregar cita médica</span>
                </div>
                <div className="estado-general__boton" onClick={() => onSectionChange("medicacion")}>
                    <img src={pastillasIcon} alt="Pastillas" className="estado-general__icono-lateral"/>
                    <span>Agregar medicamentos</span>
                </div>
            </div>
        </div>
    );
};

export default EstadoGeneral;