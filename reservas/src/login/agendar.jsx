import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/agendar.css";

const Agendar = () => {
  const [notificationBadge, setNotificationBadge] = useState(3);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownVisible(!dropdownVisible);
  };

  const markAsRead = (button) => {
    const notificationItem = button.closest(".notification-item");
    notificationItem.classList.remove("unread");
    notificationItem.classList.add("read");
    updateBadgeCount();
  };

  const clearAllNotifications = () => {
    const notifications = document.querySelectorAll(".notification-item");
    notifications.forEach((notif) => {
      notif.classList.remove("unread");
      notif.classList.add("read");
    });
    updateBadgeCount();
  };

  const updateBadgeCount = () => {
    const unreadCount = document.querySelectorAll(".notification-item.unread").length;
    setNotificationBadge(unreadCount);
  };

  return (
    <div>
      <div className="main">
        <div className="seleccionar-fecha-hora">
          <div className="section-title">
            <h2>Selecciona Fecha y Hora</h2>
          </div>

          <div className="card">
            <div className="selector-fecha">
              <label htmlFor="fecha-seleccionada">Selecciona una Fecha</label>
              <input
                type="date"
                id="fecha-seleccionada"
                className="input-fecha"
                min="2025-01-20"
                defaultValue="2025-01-23"
              />
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
    </div>
  );
};

export default Agendar;
