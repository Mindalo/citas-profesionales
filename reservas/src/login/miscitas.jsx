import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/miscitas.css";
import { useState } from "react";

export default function MisCitas() {
  // Estado para las notificaciones
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // Estado para modales
  const [modalActive, setModalActive] = useState(false);
  const [citaEditada, setCitaEditada] = useState({
    profesional: "",
    fecha: "",
    hora: "",
  });

  const handleToggleNotification = () => {
    setNotificationVisible(!notificationVisible);
  };

  const handleModalToggle = () => {
    setModalActive(!modalActive);
  };

  const handleCitaEdit = (profesional, fecha, hora) => {
    setCitaEditada({ profesional, fecha, hora });
    handleModalToggle();
  };

  const handleGuardarCita = (e) => {
    e.preventDefault();
    alert("Cita actualizada correctamente");
    handleModalToggle();
  };

  const handleMarkAsRead = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  const handleRechazarCita = (citaId) => {
    alert(`Cita rechazada: ${citaId}`);
  };

  const handleAceptarCita = (citaId) => {
    alert(`Cita aceptada: ${citaId}`);
  };

  return (
    <div>
      <header>
        <nav>
          <img src="/img/logo.png" alt="Agendia Logo" className="logo" />
          <ul>
            <li><link to ="/seleccion-profesion">Agendar Citas</link></li>
            <li><link to="/mis-citas" className="active">Mis Citas</link></li>
            <li><link to ="/pagos">Pagos</link></li>
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
                  <div className="notification-item unread">
                    <div className="notification-icon appointment-accepted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="notification-content">
                      <p className="notification-title">Cita aceptada</p>
                      <p className="notification-text">Juan Pérez ha aceptado tu cita para el 25 Ene a las 10:00 AM</p>
                      <p className="notification-time">Hace 2 horas</p>
                    </div>
                    <button className="notification-close" onClick={handleMarkAsRead}>&times;</button>
                  </div>
                  {/* Repite para otras notificaciones */}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section className="citas-section">
          <div className="section-header">
            <h2>Citas Pendientes por Confirmar</h2>
          </div>

          <div className="citas-grid">
            {["Juan Pérez", "María García", "Carlos Rodríguez"].map((nombre, index) => (
              <div className="cita-card pending" key={index}>
                <div className="cita-header">
                  <h3>{nombre}</h3>
                </div>
                <div className="cita-details">
                  <div className="detail-item">
                    <span className="label">Servicio:</span>
                    <span className="value">Consultoría Legal</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Fecha:</span>
                    <span className="value">25 Ene, 2025</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Hora:</span>
                    <span className="value">10:00 AM - 11:00 AM</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Monto:</span>
                    <span className="value amount">$85.000</span>
                  </div>
                </div>
                <div className="cita-actions">
                  <button className="btn-action edit" onClick={() => handleCitaEdit(nombre, '25 Ene, 2025', '10:00 AM')}>Editar</button>
                  <button className="btn-action reject" onClick={() => handleRechazarCita(nombre)}>Cancelar</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal para editar cita */}
      {modalActive && (
        <div className="modal" id="editarCitaModal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Editar Cita</h3>
              <button className="modal-close" onClick={handleModalToggle}>&times;</button>
            </div>
            <form className="modal-form" onSubmit={handleGuardarCita}>
              <div className="form-group">
                <label htmlFor="editProfesional">Profesional</label>
                <select id="editProfesional" value={citaEditada.profesional} onChange={(e) => setCitaEditada({ ...citaEditada, profesional: e.target.value })} required>
                  <option value="">Selecciona un profesional</option>
                  <option value="juan-perez">Juan Pérez</option>
                  <option value="maria-garcia">María García</option>
                  <option value="carlos-rodriguez">Carlos Rodríguez</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="editFecha">Fecha</label>
                <input type="date" id="editFecha" value={citaEditada.fecha} onChange={(e) => setCitaEditada({ ...citaEditada, fecha: e.target.value })} required />
              </div>
              <div className="form-group">
                <label htmlFor="editHora">Hora</label>
                <select id="editHora" value={citaEditada.hora} onChange={(e) => setCitaEditada({ ...citaEditada, hora: e.target.value })} required>
                  <option value="">Selecciona una hora</option>
                  <option value="09:00">09:00 AM - 10:00 AM</option>
                  <option value="10:00">10:00 AM - 11:00 AM</option>
                  <option value="11:00">11:00 AM - 12:00 PM</option>
                  <option value="14:00">2:00 PM - 3:00 PM</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-modal cancel" onClick={handleModalToggle}>Cancelar</button>
                <button type="submit" className="btn-modal save">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}