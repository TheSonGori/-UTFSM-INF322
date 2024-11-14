import React, { useState, useEffect } from 'react';
import relojIcon from '../assets/Iconos/Index-Sesion/Hora.png';
import corazonIcon from '../assets/Iconos/Index-Sesion/Corazon.png';
import glucosaIcon from '../assets/Iconos/Index-Sesion/Glucosa.png';
import presionIcon from '../assets/Iconos/Index-Sesion/PresionCardiaca.png';
import carasIcon from '../assets/Iconos/Index-Sesion/Caras.png';

const EstadoGeneral = ({ onSectionChange }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [indicadores, setIndicadores] = useState({
        frecuenciaCardiaca: 0,
        glucosa: 0,
        presion: '0/0'
    });
    const [estadoGeneralPosicion, setEstadoGeneralPosicion] = useState(0); // Posición del indicador en la barra

    useEffect(() => {
        // Actualizar la hora cada segundo
        const interval = setInterval(() => {
            const date = new Date();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        }, 1000); // Actualiza cada segundo

        // Generar números random para los indicadores y posición del indicador
        const generateRandomIndicators = () => {
            const frecuenciaCardiaca = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // 60-100 BPM
            const glucosa = Math.floor(Math.random() * (140 - 70 + 1)) + 70; // 70-140 mg/dL
            const presionSistolica = Math.floor(Math.random() * (120 - 90 + 1)) + 90;
            const presionDiastolica = Math.floor(Math.random() * (80 - 60 + 1)) + 60;
            const presion = `${presionSistolica}/${presionDiastolica}`;

            setIndicadores({
                frecuenciaCardiaca,
                glucosa,
                presion
            });

            // Generar posición random para el indicador (0% a 100%)
            const nuevaPosicion = Math.floor(Math.random() * 101);
            setEstadoGeneralPosicion(nuevaPosicion);
        };

        generateRandomIndicators();
        const indicadoresInterval = setInterval(generateRandomIndicators, 20000); // Actualiza cada 5 segundos

        return () => {
            clearInterval(interval);
            clearInterval(indicadoresInterval);
        };
    }, []);

    return (
        <div className="estado-general">
            <div className="estado-general__hora-principal">
                <img src={relojIcon} alt="Reloj" className="estado-general__icono-reloj-principal" />
                <span className="estado-general__texto-hora-principal">{currentTime}</span>
            </div>
            <div className="estado-general__contenido">
                <div className="estado-general__indicadores">
                    <h2>Indicadores</h2>
                    <div className="estado-general__salud">
                        <div className="estado-general__valor">
                            <div className="estado-general__contenido-indicador">
                                <img src={corazonIcon} alt="Frecuencia Cardíaca" className="estado-general__icono-indicador"/>
                                <span>Frecuencia Cardíaca: {indicadores.frecuenciaCardiaca} [BPM]</span>
                            </div>
                            <div className="estado-general__circulo verde"></div>
                        </div>
                        <div className="estado-general__valor">
                            <div className="estado-general__contenido-indicador">
                                <img src={glucosaIcon} alt="Glucosa" className="estado-general__icono-indicador"/>
                                <span>Glucosa: {indicadores.glucosa} [mg/dL]</span>
                            </div>
                            <div className="estado-general__circulo amarillo"></div>
                        </div>
                        <div className="estado-general__valor">
                            <div className="estado-general__contenido-indicador">
                                <img src={presionIcon} alt="Presión" className="estado-general__icono-indicador"/>
                                <span>Presión: {indicadores.presion} [mmHg]</span>
                            </div>
                            <div className="estado-general__circulo verde"></div>
                        </div>
                    </div>
                </div>
                <div className="estado-general__estado">
                    {/* Estado General permanece igual, solo se ha reposicionado */}
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

                    <div className="estado-general__barra-con-indicador">
                        <div className="estado-general__barra">
                            {/* Barra de colores */}
                        </div>
                        <div
                            className="estado-general__indicador"
                            style={{ left: `${estadoGeneralPosicion}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstadoGeneral;
