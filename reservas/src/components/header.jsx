import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const location = useLocation();
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  // Ocultar header en rutas específicas
  if (location.pathname === "/registrate" || location.pathname === "/login") {
    return null;
  }

  // Detectores de ruta
  const isProfesionalPage = ["/profesional", "/miscitas", "/horariop"].includes(
    location.pathname
  );
  const isAgendarPage = location.pathname === "/agendar";
  const isMisCitasPage = location.pathname === "/miscitas";
  const isPagosPage = location.pathname === "/pagos";
  const isHorarioPPage = location.pathname === "/horariop";
  const isClientePage = location.pathname === "/cliente";
  const isHorarioGPage = location.pathname === "/horariog";
  const isProfesionPage = location.pathname === "/profesion";
  const isCitasProfesionalPage = location.pathname === "/citasprofesional";
  const isPasarelaPage = location.pathname === "/pasarela";

  const markAsRead = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  const clearAllNotifications = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /CLIENTE
     ========================================================= */
  if (isClientePage) {
    return (
      <header className="header cliente-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Agendia Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/cliente" className="active">Agendar Citas</NavLink></li>
            <li><NavLink to="/mis-citas">Mis Citas</NavLink></li>
            <li><NavLink to="/pagos">Pagos</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="notification-container">
              <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                    <button className="clear-notifications" onClick={clearAllNotifications}>Limpiar</button>
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
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil-cliente" onClick={() => setUserMenuVisible(false)}>Configuración</NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>Cerrar sesión</NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /PROFESION
     ========================================================= */
  if (isProfesionPage) {
    return (
      <header className="header profesion-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Agendia Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/profesion" className="active">Agendar Citas</NavLink></li>
            <li><NavLink to="/miscitas">Mis Citas</NavLink></li>
            <li><NavLink to="/pagos">Pagos</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="notification-container">
              <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                    <button className="clear-notifications" onClick={clearAllNotifications}>Limpiar</button>
                  </div>
                  <div className="notification-list">
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
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>

                    <div className="notification-item unread" data-id="2">
                      <div className="notification-icon appointment-pending">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-title">Cita pendiente</p>
                        <p className="notification-text">María García está esperando confirmación para el 26 Ene a las 2:00 PM</p>
                        <p className="notification-time">Hace 4 horas</p>
                      </div>
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>

                    <div className="notification-item unread" data-id="3">
                      <div className="notification-icon payment-received">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 11a4 4 0 1 1-8 0"></path>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-title">Pago recibido</p>
                        <p className="notification-text">Se ha recibido el pago de $85.000 por la consultoría legal</p>
                        <p className="notification-time">Hace 1 día</p>
                      </div>
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>

                    <div className="notification-item read" data-id="4">
                      <div className="notification-icon appointment-cancelled">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-title">Cita cancelada</p>
                        <p className="notification-text">Carlos Rodríguez canceló la cita del 27 Ene a las 9:30 AM</p>
                        <p className="notification-time">Hace 3 días</p>
                      </div>
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil" onClick={() => setUserMenuVisible(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"></path>
                    </svg>
                    Configuración
                  </NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Cerrar sesión
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /CITASPROFESIONAL
     ========================================================= */
  if (isCitasProfesionalPage) {
    return (
      <header className="header citasprofesional-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Agendia Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/citasprofesional" className="active">Mis Citas</NavLink></li>
            <li><NavLink to="/horarioprofesional">Mi Horario</NavLink></li>
            <li><NavLink to="#">Mi Calendario</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="notification-container">
              <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                    <button className="clear-notifications" onClick={clearAllNotifications}>Limpiar</button>
                  </div>
                  <div className="notification-list">
                    <div className="notification-item unread" data-id="1">
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
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>

                    <div className="notification-item unread" data-id="2">
                      <div className="notification-icon appointment-pending">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-title">Cita confirmada</p>
                        <p className="notification-text">María García confirmó la cita para el 26 Ene a las 2:00 PM</p>
                        <p className="notification-time">Hace 4 horas</p>
                      </div>
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>

                    <div className="notification-item unread" data-id="3">
                      <div className="notification-icon payment-received">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 11a4 4 0 1 1-8 0"></path>
                        </svg>
                      </div>
                      <div className="notification-content">
                        <p className="notification-title">Pago recibido</p>
                        <p className="notification-text">Se ha recibido el pago de $85.000 por la consultoría legal</p>
                        <p className="notification-time">Hace 1 día</p>
                      </div>
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil-profesional" onClick={() => setUserMenuVisible(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"></path>
                    </svg>
                    Configuración
                  </NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Cerrar sesión
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /PASARELA
     ========================================================= */
  if (isPasarelaPage) {
    return (
      <header className="app-header">
        <nav className="nav">
          <img src="/img/logo.png" alt="Logo" className="logo" />
          <strong className="brand">Pasarela de Pago</strong>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /AGENDAR
     ========================================================= */
  if (isAgendarPage) {
    return (
      <header className="header agendar-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/agendar" className="active">Agendar Cita</NavLink></li>
            <li><NavLink to="/miscitas">Mis Citas</NavLink></li>
            <li><NavLink to="/pagos">Pagos</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="notification-container">
              <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil" onClick={() => setUserMenuVisible(false)}>Configuración</NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>Cerrar sesión</NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /MISCITAS
     ========================================================= */
  if (isMisCitasPage) {
    return (
      <header className="header miscitas-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Agendia Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/agendar">Agendar Citas</NavLink></li>
            <li><NavLink to="/miscitas" className="active">Mis Citas</NavLink></li>
            <li><NavLink to="/pagos">Pagos</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="notification-container">
              <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil" onClick={() => setUserMenuVisible(false)}>Configuración</NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>Cerrar sesión</NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /PAGOS
     ========================================================= */
  if (isPagosPage) {
    return (
      <header className="header pagos-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Agendia Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/agendar">Agendar Citas</NavLink></li>
            <li><NavLink to="/miscitas">Mis Citas</NavLink></li>
            <li><NavLink to="/pagos" className="active">Pagos</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="notification-container">
              <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil" onClick={() => setUserMenuVisible(false)}>Configuración</NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>Cerrar sesión</NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /HORARIOG
     ========================================================= */
  if (isHorarioGPage) {
    return (
      <header className="header horariog-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/mis-citas">Mis Citas</NavLink></li>
            <li><NavLink to="/horariog" className="active">Mi Horario</NavLink></li>
            <li><NavLink to="/">Mi Calendario</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil-profesional" onClick={() => setUserMenuVisible(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M16 17 21 12 16 7"></path>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Configuración
                  </NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Cerrar sesión
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER ESPECÍFICO: /HORARIOP
     ========================================================= */
  if (isHorarioPPage) {
    return (
      <header className="header horariop-header">
        <nav className="navbar">
          <div className="logo-header">
            <img src="/img/logo.png" alt="Logo" className="logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/miscitas">Mis Citas</NavLink></li>
            <li><NavLink to="/horariop" className="active">Mi Horario</NavLink></li>
            <li><NavLink to="/profesional">Mi Calendario</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <div className="notification-container">
              <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                    <button className="clear-notifications" onClick={clearAllNotifications}>Limpiar</button>
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
                        <p className="notification-title">Nueva cita solicitada</p>
                        <p className="notification-text">Juan Pérez solicita cita para el 25 Ene a las 10:00 AM</p>
                        <p className="notification-time">Hace 2 horas</p>
                      </div>
                      <button className="notification-close" onClick={markAsRead}>&times;</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Usuario</span>
              </button>

              {userMenuVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/perfil" onClick={() => setUserMenuVisible(false)}>Configuración</NavLink>
                  <NavLink to="/" onClick={() => setUserMenuVisible(false)}>Cerrar sesión</NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  /* =========================================================
     🔹 HEADER GENERAL (resto de rutas)
     ========================================================= */
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-header">
          <img src="/img/logo.png" alt="Logo" />
        </div>

        {/* Menú público (no profesional) */}
        {!isProfesionalPage && (
          <>
            <ul className="nav-links">
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/profesional">Profesionales</NavLink></li>
              <li><NavLink to="/profesion">Cómo funciona</NavLink></li>
            </ul>

            <div className="nav-buttons">
              <NavLink to="/registrate" className="btn">Regístrate</NavLink>
              <NavLink to="/login" className="btn">Inicia Sesión</NavLink>
            </div>
          </>
        )}

        {/* Menú profesional */}
        {isProfesionalPage && (
          <>
            <ul className="nav-links">
              <li><NavLink to="/miscitas">Mis Citas</NavLink></li>
              <li><NavLink to="/horarioprofesional">Mi Horario</NavLink></li>
              <li><NavLink to="/profesional">Mi Calendario</NavLink></li>
            </ul>

            <div className="nav-buttons">
              <div className="notification-container">
                <button className="notification-bell" onClick={() => setNotificationVisible(v => !v)}>
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
                    </div>
                  </div>
                )}
              </div>

              <div className="user-menu">
                <button className="user-button" onClick={() => setUserMenuVisible(v => !v)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Usuario</span>
                </button>

                {userMenuVisible && (
                  <div className="dropdown-menu">
                    <NavLink to="/profesional" onClick={() => setUserMenuVisible(false)}>
                      Configuración
                    </NavLink>
                    <NavLink to="/" onClick={() => setUserMenuVisible(false)}>
                      Cerrar sesión
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}