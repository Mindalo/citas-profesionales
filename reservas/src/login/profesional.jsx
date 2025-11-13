import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/profesional.css";

export default function Profesional() {
  const [activeModal, setActiveModal] = useState(null); // Para controlar los modales activos
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Ejemplo de 3 notificaciones no leídas

  // Funciones para manejar el estado de los modales
  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  // Función para marcar las notificaciones como leídas
  const markAsRead = () => {
    setNotificationCount(0); // Establece el conteo de notificaciones a 0
    setNotificationVisible(false); // Oculta el badge
  };

  // Función para limpiar todas las notificaciones
  const clearAllNotifications = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  return (
    <div>
      <main className="main-content">
        <h1>Mi Perfil Profesional</h1>

        {/* Información Personal */}
        <div className="profile-section">
          <h2>Información Personal</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Nombre Completo</span>
              <span className="value">Dr. Carlos Mendoza</span>
            </div>
            <div className="info-item">
              <span className="label">Correo Electrónico</span>
              <span className="value">carlos@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="label">Celular</span>
              <span className="value">301 314 0650</span>
            </div>
          </div>
          <button className="btn-primary" onClick={() => openModal("editProfile")}>Editar Información</button>
        </div>

        {/* Información Profesional */}
        <div className="profile-section">
          <h2>Información Profesional</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Profesión</span>
              <span className="value">Abogado - Derecho Civil</span>
            </div>
            <div className="info-item">
              <span className="label">Años de Experiencia</span>
              <span className="value">15 años</span>
            </div>
            <div className="info-item">
              <span className="label">Tarifa por Hora</span>
              <span className="value">$60.000</span>
            </div>
          </div>
          <div className="expertise-section">
            <span className="label">Áreas de Expertise</span>
            <div className="expertise-tags">
              <span className="expertise-tag">Contratos civiles</span>
              <span className="expertise-tag">Arrendamientos</span>
              <span className="expertise-tag">Demandas ejecutivas</span>
              <span className="expertise-tag">Herencias</span>
            </div>
          </div>
          <button className="btn-primary" onClick={() => openModal("editProfessional")}>Editar Información Profesional</button>
        </div>

        {/* Seguridad */}
        <div className="profile-section">
          <h2>Seguridad</h2>
          <div className="security-item">
            <p className="sec-title">Contraseña</p>
            <button className="btn-secondary" onClick={() => openModal("changePassword")}>Cambiar Contraseña</button>
          </div>
        </div>
      </main>
{/* Modales */}
{activeModal && (
  <div className="modal active"> {/* Asegúrate de que esté usando la clase "active" correctamente */}
    <div className="modal-content">
      <div className="modal-header">
        <h3>Editar Información Personal</h3>
        <button className="modal-close" onClick={closeModal}>&times;</button>
      </div>
      <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input type="text" defaultValue="Dr. Carlos Mendoza" required />
        </div>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" defaultValue="carlos@gmail.com" required />
        </div>
        <div className="form-group">
          <label>Celular</label>
          <input type="tel" defaultValue="301 314 0650" required />
        </div>
        <div className="modal-actions">
          <button type="button" className="btn-secondary" onClick={closeModal}>Cancelar</button>
          <button type="submit" className="btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
