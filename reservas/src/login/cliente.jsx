import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/cliente.css";

export default function Cliente() {
  // Estados para manejar la visibilidad de modales y notificaciones
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);
  const [changePasswordModalVisible, setChangePasswordModalVisible] = useState(false);

  // Funciones para manejar notificaciones
  const handleToggleNotification = () => {
    setNotificationVisible(!notificationVisible);
  };

  const handleMarkAsRead = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  // Funciones para manejar el modal de editar perfil
  const handleToggleEditProfileModal = () => {
    setEditProfileModalVisible(!editProfileModalVisible);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert("Perfil actualizado correctamente");
    setEditProfileModalVisible(false);
  };

  // Funciones para manejar el modal de cambiar contraseña
  const handleToggleChangePasswordModal = () => {
    setChangePasswordModalVisible(!changePasswordModalVisible);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    alert("Contraseña cambiada correctamente");
    setChangePasswordModalVisible(false);
  };

  return (
    <div>
      <main className="main-content">
        <h1>Mi Perfil</h1>

        <div className="profile-section">
          <h2>Información Personal</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Nombre Completo</span>
              <span className="value">Daniela Marcela Calderón Flórez</span>
            </div>
            <div className="info-item">
              <span className="label">Correo Electrónico</span>
              <span className="value">daniela@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="label">Celular</span>
              <span className="value">301 314 0650</span>
            </div>
          </div>
          <button className="btn-primary" onClick={handleToggleEditProfileModal}>Editar Información</button>
        </div>

        <div className="profile-section">
          <h2>Seguridad</h2>
          <div className="security-item">
            <p className="sec-title">Contraseña</p>
            <button className="btn-secondary" onClick={handleToggleChangePasswordModal}>Cambiar Contraseña</button>
          </div>
        </div>
      </main>

      {/* Modal Editar Perfil */}
      {editProfileModalVisible && (
        <div className="modal" id="editProfileModal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Editar Información Personal</h3>
              <button className="modal-close" onClick={handleToggleEditProfileModal}>&times;</button>
            </div>
            <form className="modal-form" onSubmit={handleSaveProfile}>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" defaultValue="Daniela Marcela Calderón Flórez" required />
              </div>
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="email" defaultValue="daniela@gmail.com" required />
              </div>
              <div className="form-group">
                <label>Celular</label>
                <input type="tel" defaultValue="301 314 0650" required />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={handleToggleEditProfileModal}>Cancelar</button>
                <button type="submit" className="btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Cambiar Contraseña */}
      {changePasswordModalVisible && (
        <div className="modal" id="changePasswordModal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Cambiar Contraseña</h3>
              <button className="modal-close" onClick={handleToggleChangePasswordModal}>&times;</button>
            </div>
            <form className="modal-form" onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Contraseña Actual</label>
                <input type="password" required />
              </div>
              <div className="form-group">
                <label>Nueva Contraseña</label>
                <input type="password" required />
              </div>
              <div className="form-group">
                <label>Confirmar Contraseña</label>
                <input type="password" required />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={handleToggleChangePasswordModal}>Cancelar</button>
                <button type="submit" className="btn-primary">Cambiar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
