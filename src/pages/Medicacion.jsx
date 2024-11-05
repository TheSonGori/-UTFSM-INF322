import React, { useState, useEffect } from 'react';
import agregarIcon from '../assets/Iconos/Seccion-Medicacion/Mas.png';
import carpetaIcon from '../assets/Iconos/Seccion-Medicacion/Carpeta.png';
import eliminarIcon from '../assets/Iconos/Seccion-Medicacion/Basura.png';

const Medicacion = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [medicaciones, setMedicaciones] = useState([]);

    const [formData, setFormData] = useState({
        nombre: '',
        dosis: '',
        fechaInicio: '',
        duracion: '',
        vecesPorDia: '',
        cadaCuanto: '',
        horaPrimeraIngesta: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para validar si todos los campos están completos
    const isFormComplete = () => {
        return Object.values(formData).every((value) => value !== '');
    };

    // Función para agregar la medicación
    const handleAddMedication = () => {
        if (isFormComplete()) {
            setMedicaciones([...medicaciones, formData]);
            setFormData({
                nombre: '',
                dosis: '',
                fechaInicio: '',
                duracion: '',
                vecesPorDia: '',
                cadaCuanto: '',
                horaPrimeraIngesta: '',
            });
            setIsModalOpen(false);
        }
    };

    const handleClearMedications = () => {
        setMedicaciones([]);
    };

    const getDisplayedDays = () => {
        const days = [];
        const startDay = new Date(currentDate);
        startDay.setDate(startDay.getDate() - 3); // 3 días antes del día actual

        for (let i = 0; i < 7; i++) {
            const day = new Date(startDay);
            day.setDate(startDay.getDate() + i);
            days.push({
                date: day,
                dayNumber: day.getDate(),
                dayName: day.toLocaleDateString('es-ES', { weekday: 'short' }).replace('.', ''),
                isCurrentDay: day.toDateString() === new Date().toDateString(),
            });
        }
        return days;
    };

    const [displayedDays, setDisplayedDays] = useState(getDisplayedDays());

    // Manejar el clic en las flechas
    const handleArrowClick = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + direction);
        setCurrentDate(newDate);
    };

    useEffect(() => {
        setDisplayedDays(getDisplayedDays());
    }, [currentDate]);

    const generateCalendarDays = () => {
        const calendarDays = [];
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1);
        const startDayOfWeek = firstDayOfMonth.getDay();

        const totalDays = 42;

        const startDate = new Date(firstDayOfMonth);
        startDate.setDate(firstDayOfMonth.getDate() - startDayOfWeek);

        for (let i = 0; i < totalDays; i++) {
            const day = new Date(startDate);
            day.setDate(startDate.getDate() + i);
            calendarDays.push({
                date: day,
                dayNumber: day.getDate(),
                isCurrentMonth: day.getMonth() === month,
                isToday: day.toDateString() === new Date().toDateString(),
            });
        }

        return calendarDays;
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className="calendar-page">
            <div className="calendar-page__days-header">
                <button
                    className="calendar-page__arrow calendar-page__arrow--left"
                    onClick={() => handleArrowClick(-1)}
                >
                    {"<"}
                </button>
                <div className="calendar-page__days-container">
                    {displayedDays.map((day, index) => (
                        <div
                            key={index}
                            className={`calendar-page__day ${
                                day.isCurrentDay ? 'calendar-page__day--current' : ''
                            }`}
                        >
                            {day.isCurrentDay && <div className="calendar-page__day-circle"></div>}
                            <div className="calendar-page__day-number">{day.dayNumber}</div>
                            <div className="calendar-page__day-name">{day.dayName}</div>
                        </div>
                    ))}
                </div>
                <button
                    className="calendar-page__arrow calendar-page__arrow--right"
                    onClick={() => handleArrowClick(1)}
                >
                    {">"}
                </button>
            </div>

            <div className="calendar-page__content">
                <div className="calendar-page__calendar-section">
                    <div className="calendar-page__calendar">
                        <div className="calendar-page__weekdays">
                            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((weekday, index) => (
                                <div key={index} className="calendar-page__weekday">
                                    {weekday}
                                </div>
                            ))}
                        </div>
                        <div className="calendar-page__days-grid">
                            {calendarDays.map((day, index) => (
                                <div
                                    key={index}
                                    className={`calendar-page__calendar-day ${
                                        day.isCurrentMonth ? '' : 'calendar-page__calendar-day--disabled'
                                    } ${day.isToday ? 'calendar-page__calendar-day--today' : ''}`}
                                >
                                    {day.dayNumber}
                                </div>
                            ))}
                        </div>
                    </div>

                    <select
                        className="calendar-page__month-selector"
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
                </div>

                <div className="calendar-page__today-section">
                    <h2 className="calendar-page__today-title">Hoy Día</h2>
                    <div className="calendar-page__today-box">
                        {medicaciones.length === 0 ? (
                            <p className="calendar-page__today-text">No hay medicación para hoy</p>
                        ) : (
                            medicaciones.map((medicacion, index) => (
                                <div key={index} className="calendar-page__medicacion">
                                    <input type="checkbox" id={`medicacion-${index}`} />
                                    <label htmlFor={`medicacion-${index}`}>
                                        <strong>{medicacion.nombre}</strong>
                                        <br />
                                        Fecha de Inicio: {medicacion.fechaInicio}
                                        <br />
                                        {medicacion.vecesPorDia}/{medicacion.duracion} días - {medicacion.vecesPorDia} cada {medicacion.cadaCuanto} [hrs]
                                        <br />
                                        {medicacion.horaPrimeraIngesta} [hrs]
                                        <br />
                                        {medicacion.dosis}
                                    </label>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="calendar-page__actions">
                        <button
                            className="calendar-page__button calendar-page__button--add"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <img src={agregarIcon} alt="Agregar" />
                        </button>
                        <button className="calendar-page__button calendar-page__button--folder">
                            <img src={carpetaIcon} alt="Carpeta" />
                        </button>
                        <button
                            className="calendar-page__button calendar-page__button--delete"
                            onClick={handleClearMedications}
                        >
                            <img src={eliminarIcon} alt="Eliminar" />
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="calendar-page__modal-overlay">
                    <div className="calendar-page__modal">
                        <h2 className="calendar-page__modal-title">
                            <span className="asterisk"></span> AGREGAR MEDICAMENTO <span className="asterisk"></span>
                        </h2>
                        <div className="calendar-page__modal-form">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre Medicamento"
                                value={formData.nombre}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="dosis"
                                placeholder="Dosis"
                                value={formData.dosis}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="fechaInicio"
                                placeholder="Fecha de Inicio (DD/MM/AAAA)"
                                value={formData.fechaInicio}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="duracion"
                                placeholder="Duración del tratamiento (días)"
                                value={formData.duracion}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="vecesPorDia"
                                placeholder="¿Cuántas veces por día?"
                                value={formData.vecesPorDia}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="cadaCuanto"
                                placeholder="¿Cada cuánto? (hrs)"
                                value={formData.cadaCuanto}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="horaPrimeraIngesta"
                                placeholder="¿Hora de primera ingesta?"
                                value={formData.horaPrimeraIngesta}
                                onChange={handleInputChange}
                            />

                            <div className="calendar-page__modal-buttons">
                                <button
                                    onClick={handleAddMedication}
                                    disabled={!isFormComplete()}
                                >
                                    Agregar
                                </button>
                                <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Medicacion;
