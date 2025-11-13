import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pagos.css";

export default function Pagos() {
  // Estado para las notificaciones
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // Estado para el dropdown de usuario
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const handleToggleNotification = () => {
    setNotificationVisible(!notificationVisible);
  };

  const handleToggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
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
        <section className="pagos-section">
          <div className="section-header">
            <h2>Historial de Pagos</h2>
          </div>

          <div className="pagos-container">
            <table className="pagos-table">
              <thead>
                <tr>
                  <th>Profesional</th>
                  <th>Profesion</th>
                  <th>Servicio</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {["Juan Pérez", "María García", "Carlos Rodríguez"].map((nombre, index) => (
                  <tr key={index}>
                    <td>{nombre}</td>
                    <td>Abogado</td>
                    <td>Consultoría Legal</td>
                    <td>25 Ene, 2025</td>
                    <td>$85.000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
