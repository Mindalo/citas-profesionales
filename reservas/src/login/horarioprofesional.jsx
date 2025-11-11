import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/horarioprofesional.css"; 
import { useState } from "react";


export default function HorarioProfesional() {
  // Estado para manejar notificaciones y modales
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [modalActive, setModalActive] = useState(false);

  // Datos de los horarios (este podría provenir de un backend en producción)
  const [horarios, setHorarios] = useState({
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
  });

  // Funciones para manejar notificaciones
  const handleToggleNotification = () => {
    setNotificationVisible(!notificationVisible);
  };

  const handleMarkAsRead = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  // Funciones para manejar los modales
  const handleModalToggle = () => {
    setModalActive(!modalActive);
  };

  const handleAgregarBloque = (day) => {
    const newHorarios = { ...horarios };
    newHorarios[day].push({ horaInicio: "", horaFin: "" });
    setHorarios(newHorarios);
  };

  const handleGuardarCita = (e) => {
    e.preventDefault();
    alert("Cita guardada correctamente");
    setModalActive(false);
  };

  return (
    <div>
      <header>
        <nav>
          <img src="/img/logo.png" alt="Logo" className="logo" />
          <ul>
            <li><link to ="/citas-profesional">Mis Citas</link></li>
            <li><link to="/horario-profesional" className="active">Mi Horario</link></li>
            <li><link to f="">Mi Calendario</link></li>
          </ul>

          <div className="notification-container">
            <button className="notification-bell" onClick={handleToggleNotification}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
            </button>

            {notificationVisible && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notificaciones</h3>
                  <button className="clear-notifications" onClick={handleMarkAsRead}>Limpiar</button>
                </div>
                <div className="notification-list">
                  {/* Puedes renderizar las notificaciones dinámicamente */}
                  <div className="notification-item unread">
                    <div className="notification-icon appointment-accepted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="notification-content">
                      <p className="notification-title">Nueva cita solicitada</p>
                      <p className="notification-text">Juan Pérez solicita cita para el 25 Ene a las 10:00 AM</p>
                      <p className="notification-time">Hace 2 horas</p>
                    </div>
                    <button className="notification-close" onClick={handleMarkAsRead}>&times;</button>
                  </div>
                  {/* Añadir más notificaciones aquí */}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div className="main">
        <div className="seleccionar-fecha-hora">
          <div className="section-title">
            <h2>Configura tu Horario de Atención</h2>
          </div>

          <div className="card">
            <div className="selector-duracion">
              <label htmlFor="duracion">Duración por Cita</label>
              <select id="duracion" className="input-duracion">
                <option value="">Selecciona una duración</option>
                <option value="30">30 minutos</option>
                <option value="60">1 hora</option>
                <option value="90">1.5 horas</option>
                <option value="120">2 horas</option>
              </select>
            </div>

            <div className="selector-buffer">
              <label htmlFor="buffer">Tiempo entre Cita</label>
              <select id="buffer" className="input-buffer">
                <option value="">Selecciona una duración</option>
                <option value="30">30 minutos</option>
                <option value="60">1 hora</option>
                <option value="90">1.5 horas</option>
                <option value="120">2 horas</option>
              </select>
            </div>

            <hr className="divider" />

            <h4>Horario Semanal</h4>

            <div className="tarjetas_dias">
              {["lunes", "martes", "miercoles", "jueves", "viernes"].map((day) => (
                <div className="tarjeta" key={day}>
                  <div className="tarjeta-header">
                    <h5>{day.charAt(0).toUpperCase() + day.slice(1)}</h5>
                    <span className="espacios-count">0 espacios</span>
                  </div>
                  <div className="horarios-bloques" data-day={day}></div>
                  <button className="btn-agregar-bloque" onClick={() => handleAgregarBloque(day)}>+ Agregar bloque</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="detalles-cita">
          <div className="section-title">
            <h2>Vista Previa de tu Horario</h2>
          </div>

          <div className="card">
            <div className="tarjetas_dias preview">
              {["lunes", "martes", "miercoles", "jueves", "viernes"].map((day) => (
                <div className="tarjeta preview-item" key={day}>
                  <h5>{day.charAt(0).toUpperCase() + day.slice(1)}</h5>
                  <div className="preview-horarios" data-day={day}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="btn-guardar" onClick={() => alert("Horario guardado")}>Guardar Horario</button>
        </div>
      </div>
    </div>
  );
}