// src/pages/Medicacion.jsx
import React, { useState } from 'react';
import agregarIcon from '../assets/Iconos/Seccion-Medicacion/Mas.png';
import Formulario from '../components/Citas/Formulario';

const Medicacion = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [showMenuModal, setShowMenuModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState('');
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const generateCalendarDays = () => {
        const calendarDays = [];
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1);
        const startDayOfWeek = firstDayOfMonth.getDay();

        const totalDays = 42; // 6 semanas completas

        const startDate = new Date(year, month, 1 - startDayOfWeek);

        for (let i = 0; i < totalDays; i++) {
            const day = new Date(startDate);
            day.setDate(startDate.getDate() + i);

            // Filtrar eventos para este día
            const dayEvents = events.filter(event => {
                const eventDateStr = event.formData.fecha || event.formData.fechaInicio;

                // Parsear la fecha sin ajustar la zona horaria
                const [year, month, dayStr] = eventDateStr.split('-').map(Number);
                const eventDate = new Date(year, month - 1, dayStr);

                return (
                    day.getFullYear() === eventDate.getFullYear() &&
                    day.getMonth() === eventDate.getMonth() &&
                    day.getDate() === eventDate.getDate()
                );
            });

            calendarDays.push({
                date: day,
                dayNumber: day.getDate(),
                isCurrentMonth: day.getMonth() === month,
                isToday:
                    day.getFullYear() === new Date().getFullYear() &&
                    day.getMonth() === new Date().getMonth() &&
                    day.getDate() === new Date().getDate(),
                events: dayEvents,
            });
        }

        return calendarDays;
    };

    const calendarDays = generateCalendarDays();

    const handleDayClick = (day) => {
        setSelectedDate(day.date);
        setShowMenuModal(true);
    };

    const handleAddButtonClick = () => {
        setSelectedDate(null);
        setShowMenuModal(true);
    };

    const handleMenuOptionClick = (type) => {
        setFormType(type);
        setShowMenuModal(false);
        setShowForm(true);
    };

    const handleFormSubmit = (formData) => {
        setEvents([...events, { type: formType, formData }]);
        setShowForm(false);
        setFormType('');
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseEventModal = () => {
        setSelectedEvent(null);
    };

    const handleDeleteEvent = () => {
        setEvents(events.filter(event => event !== selectedEvent));
        setSelectedEvent(null);
    };

    return (
        <div className="medicacion-page">
            <div className="medicacion-page__header">
                <select
                    className="medicacion-page__month-selector"
                    value={currentDate.getMonth()}
                    onChange={(e) => {
                        const newDate = new Date(currentDate);
                        newDate.setMonth(parseInt(e.target.value));
                        setCurrentDate(newDate);
                    }}
                >
                    {[
                        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
                    ].map((monthName, index) => (
                        <option key={index} value={index}>
                            {monthName}
                        </option>
                    ))}
                </select>

                <button className="medicacion-page__add-button" onClick={handleAddButtonClick}>
                    <img src={agregarIcon} alt="Agregar" />
                </button>
            </div>

            <div className="medicacion-page__calendar">
                <div className="medicacion-page__weekdays">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((weekday, index) => (
                        <div key={index} className="medicacion-page__weekday">
                            {weekday}
                        </div>
                    ))}
                </div>
                <div className="medicacion-page__days-grid">
                    {calendarDays.map((day, index) => (
                        <div
                            key={index}
                            className={`medicacion-page__calendar-day ${
                                day.isCurrentMonth ? '' : 'medicacion-page__calendar-day--disabled'
                            } ${day.isToday ? 'medicacion-page__calendar-day--today' : ''}`}
                            onClick={() => handleDayClick(day)}
                        >
                            <div className="medicacion-page__calendar-day-number">{day.dayNumber}</div>
                            {day.events.length > 0 && (
                                <div className="medicacion-page__calendar-day-events">
                                    {day.events.map((event, idx) => (
                                        <div
                                            key={idx}
                                            className={`medicacion-page__event medicacion-page__event--${event.type}`}
                                            data-tooltip={`${event.type.toUpperCase()}`}
                                            onClick={(e) => {
                                                e.stopPropagation(); // Evita que el click se propague al día
                                                handleEventClick(event);
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {showMenuModal && (
                <div className="medicacion-page__modal-overlay">
                    <div className="medicacion-page__menu-modal">
                        <h2 className="medicacion-page__modal-title">Selecciona una opción</h2>
                        <button onClick={() => handleMenuOptionClick('consulta')}>Consulta Médica</button>
                        <button onClick={() => handleMenuOptionClick('examen')}>Exámenes</button>
                        <button onClick={() => handleMenuOptionClick('medicamento')}>Medicamentos</button>
                        <button className="form__cancel" onClick={() => setShowMenuModal(false)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            {showForm && (
                <div className="medicacion-page__modal-overlay">
                    <div className="medicacion-page__modal">
                        <h2 className="medicacion-page__modal-title">
                            Agregar{' '}
                            {formType === 'consulta'
                                ? 'Consulta Médica'
                                : formType === 'examen'
                                    ? 'Examen'
                                    : 'Medicamento'}
                        </h2>
                        <Formulario
                            onSubmit={handleFormSubmit}
                            type={formType}
                            selectedDate={selectedDate}
                            onClose={() => setShowForm(false)}
                        />
                    </div>
                </div>
            )}

            {selectedEvent && (
                <div className="medicacion-page__modal-overlay">
                    <div className="medicacion-page__event-modal">
                        <h2 className="medicacion-page__modal-title">Detalle del Evento</h2>
                        <div className="medicacion-page__event-details">
                            {Object.entries(selectedEvent.formData).map(([key, value]) => (
                                <p key={key}>
                                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                </p>
                            ))}
                        </div>
                        <div className="form__buttons">
                            <button className="form__button form__cancel" onClick={handleDeleteEvent}>
                                Eliminar
                            </button>
                            <button className="form__button form__submit" onClick={handleCloseEventModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Medicacion;
