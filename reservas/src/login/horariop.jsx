import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/horariop.css";

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
                  <button className="btn-agregar-bloque" onClick={() => handleAgregarBloque(day)}>
                    + Agregar bloque
                  </button>
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
          <button className="btn-guardar" onClick={() => alert("Horario guardado")}>
            Guardar Horario
          </button>
        </div>
      </div>
    </div>
  );
}
