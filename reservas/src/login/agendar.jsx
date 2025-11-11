import React from "react";
import { useLocation, Link, link } from "react-router-dom";
import "../styles/agendar.css";
import { useState } from "react";

const Agendar = () => {
  const [notificationBadge, setNotificationBadge] = useState(3);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownVisible(!dropdownVisible);
  };

  const markAsRead = (button) => {
    const notificationItem = button.closest('.notification-item');
    notificationItem.classList.remove('unread');
    notificationItem.classList.add('read');
    updateBadgeCount();
  };

  const clearAllNotifications = () => {
    const notifications = document.querySelectorAll('.notification-item');
    notifications.forEach((notif) => {
      notif.classList.remove('unread');
      notif.classList.add('read');
    });
    updateBadgeCount();
  };

  const updateBadgeCount = () => {
    const unreadCount = document.querySelectorAll('.notification-item.unread').length;
    setNotificationBadge(unreadCount);
  };

  return (
    <div>
      <header>
        <nav>
          <img src="../img/logo.png" alt="Logo" className="logo" />
          <ul>
            <li>
              <link to ="agendar-cita.html" className="active">
                Agendar Citas
              </link>
            </li>
            <li>
              <link to="mis-citas.html">Mis Citas</link>
            </li>
            <li>
              <link to ="pagos.html">Pagos</link>
            </li>
          </ul>

          <div className="notification-container">
            <button className="notification-bell" id="notificationBell" onClick={handleDropdownToggle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="notification-badge" id="notificationBadge">
                {notificationBadge}
              </span>
            </button>

            {dropdownVisible && (
              <div className="notification-dropdown" id="notificationDropdown">
                <div className="notification-header">
                  <h3>Notificaciones</h3>
                  <button className="clear-notifications" onClick={clearAllNotifications}>
                    Limpiar
                  </button>
                </div>
                <div className="notification-list">
                  {/* Aquí se pueden agregar las notificaciones dinámicamente */}
                  <div className="notification-item unread" data-id="1">
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
                    <button className="notification-close" onClick={(e) => markAsRead(e.target)}>
                      &times;
                    </button>
                  </div>

                  {/* Agregar más notificaciones según sea necesario */}
                </div>
              </div>
            )}
          </div>

          <div className="user-menu">
            <button className="user-button" id="userButton" onClick={handleDropdownToggle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Usuario
            </button>
            {dropdownVisible && (
              <div className="dropdown-menu" id="dropdownMenu">
                <link to ="perfil.cliente.html">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"></path>
                  </svg>
                  Configuración
                </link>
                <link to="">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Cerrar sesión
                </link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div className="main">
        <div className="seleccionar-fecha-hora">
          <div className="section-title">
            <h2>Selecciona Fecha y Hora</h2>
          </div>

          <div className="card">
            <div className="selector-fecha">
              <label htmlFor="fecha-seleccionada">Selecciona una Fecha</label>
              <input type="date" id="fecha-seleccionada" className="input-fecha" min="2025-01-20" value="2025-01-23" />
            </div>

            <div className="selector-horario">
              <label htmlFor="horario">Horarios Disponibles</label>
              <select id="horario" className="input-horario">
                <option value="">Selecciona un horario</option>
                <option value="09:00">09:00 AM - 10:00 AM</option>
                <option value="11:00">11:00 AM - 12:00 PM</option>
                <option value="14:00">02:00 PM - 03:00 PM</option>
                <option value="16:00">04:00 PM - 05:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <div className="detalles-cita">
          <div className="section-title">
            <h2>Resumen de tu Cita</h2>
          </div>

          <div className="card">
            <div className="resumen-seccion">
              <h4>Profesional Seleccionado</h4>
              <p className="resumen-valor">Dr. Carlos Mendonza</p>
            </div>

            <hr className="divider" />

            <div className="resumen-seccion">
              <h4>Resumen de Pago</h4>
              <div className="precio-total">
                <span>Total a pagar:</span>
                <span className="monto">$48.000</span>
              </div>
            </div>

            <button className="btn-confirmar">Confirmar Cita</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-contenedor">
          <div className="footer-columna">
            <img src="../styles/img/logo.png" alt="" className="logo" />
            <p>Conectamos profesionales con clientes de manera fácil y segura.</p>
          </div>

          <div className="footer-columna">
            <h4>Contacto</h4>
            <p>+57 301 314 0650</p>
            <p>contacto@agendia.com</p>
            <p>Santa Marta, Colombia</p>
          </div>

          <div className="footer-columna">
            <h4>Cuestiones Legales</h4>
            <ul>
              <li>
                <link to="#">Términos y Condiciones</link>
              </li>
              <li>
                <link to="#">Política de Privacidad</link>
              </li>
              <li>
                <link to ="#">Aviso Legal</link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copy">
          <p>
            Copyright © 2025 <strong>Agendia - Conectando profesionales</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Agendar;