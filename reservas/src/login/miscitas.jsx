import React from "react";
import { Link } from "react-router-dom";
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
                  <button
                    className="btn-action edit"
                    onClick={() => handleCitaEdit(nombre, "25 Ene, 2025", "10:00 AM")}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-action reject"
                    onClick={() => handleRechazarCita(nombre)}
                  >
                    Cancelar
                  </button>
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
                <select
                  id="editProfesional"
                  value={citaEditada.profesional}
                  onChange={(e) => setCitaEditada({ ...citaEditada, profesional: e.target.value })}
                  required
                >
                  <option value="">Selecciona un profesional</option>
                  <option value="juan-perez">Juan Pérez</option>
                  <option value="maria-garcia">María García</option>
                  <option value="carlos-rodriguez">Carlos Rodríguez</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="editFecha">Fecha</label>
                <input
                  type="date"
                  id="editFecha"
                  value={citaEditada.fecha}
                  onChange={(e) => setCitaEditada({ ...citaEditada, fecha: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="editHora">Hora</label>
                <select
                  id="editHora"
                  value={citaEditada.hora}
                  onChange={(e) => setCitaEditada({ ...citaEditada, hora: e.target.value })}
                  required
                >
                  <option value="">Selecciona una hora</option>
                  <option value="09:00">09:00 AM - 10:00 AM</option>
                  <option value="10:00">10:00 AM - 11:00 AM</option>
                  <option value="11:00">11:00 AM - 12:00 PM</option>
                  <option value="14:00">2:00 PM - 3:00 PM</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-modal cancel" onClick={handleModalToggle}>
                  Cancelar
                </button>
                <button type="submit" className="btn-modal save">
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
