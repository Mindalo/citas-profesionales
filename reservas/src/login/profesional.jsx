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
      <header>
        <nav>
          <img src="/img/logo.png" alt="Agendia Logo" className="logo" />
          <ul>
            <li><Link to="/miscitas" state={{ form: 'miscitas '}}>Mis Citas</Link></li>
            <li><Link to="/horario">Mi Horario</Link></li>
            <li><Link to="/calendario-profesional">Mi Calendario</Link></li>
          </ul>

          <div className="notification-container">
            <button className="notification-bell" onClick={() => setNotificationVisible(!notificationVisible)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              {notificationCount > 0 && (
                <span className="notification-badge">{notificationCount}</span>
              )}
            </button>

            {notificationVisible && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notificaciones</h3>
                  <button className="clear-notifications" onClick={clearAllNotifications}>Limpiar</button>
                </div>
                <div className="notification-list">
                  <div className="notification-item unread">
                    <div className="notification-icon">
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
                    <button className="notification-close" onClick={markAsRead}>&times;</button>
                  </div>
                  {/* Repite el bloque para otras notificaciones */}
                </div>
              </div>
            )}
          </div>

          <div className="user-menu">
            <button className="user-button" onClick={() => openModal("userMenu")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Usuario
            </button>

            {activeModal === "userMenu" && (
              <div className="dropdown-menu">
                <Link to="/perfil-profesional">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"></path>
                  </svg>
                  Configuración
                </Link>
                <Link to="/logout">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Cerrar sesión
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

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
