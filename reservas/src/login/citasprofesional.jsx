import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/citasprofesional.css";

export default function CitasProfesional() {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const [activeFilter, setActiveFilter] = useState("confirmadas");

  const [reasonModal, setReasonModal] = useState({
    open: false,
    cliente: "",
    motivo: "",
  });

  const [opinionModal, setOpinionModal] = useState({
    open: false,
    cliente: "",
    opinion: "",
    rating: 0,
  });

  // --- Notificaciones ---
  const toggleUserMenu = (e) => {
    e.stopPropagation();
    setUserMenuVisible((prev) => !prev);
    setNotificationVisible(false);
  };

  const toggleNotification = (e) => {
    e.stopPropagation();
    setNotificationVisible((prev) => !prev);
    setUserMenuVisible(false);
  };

  const markAllAsRead = () => {
    setNotificationCount(0);
  };

  const clearAllNotifications = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  // --- Filtros ---
  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  // --- Modales ---
  const marcarRealizada = () => {
    alert("Cita marcada como realizada");
  };

  const mostrarMotivo = (motivo, cliente) => {
    setReasonModal({
      open: true,
      cliente,
      motivo,
    });
  };

  const mostrarOpinion = (puntuacion, opinion, cliente) => {
    setOpinionModal({
      open: true,
      rating: puntuacion,
      opinion,
      cliente,
    });
  };

  const cerrarModal = (modal) => {
    if (modal === "reason") {
      setReasonModal((prev) => ({ ...prev, open: false }));
    } else if (modal === "opinion") {
      setOpinionModal((prev) => ({ ...prev, open: false }));
    }
  };

  const renderStars = (puntuacion) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const filled = i < puntuacion;
      stars.push(
        <span
          key={i}
          className={`star ${filled ? "filled" : ""}`}
        >
          {filled ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      {/* MAIN */}
      <main className="main-content">
        <div className="citas-container">
          <div className="filters-header">
            <h2>Mis Citas</h2>
          </div>

          <div className="filter-tabs">
            <button
              className={
                "filter-tab" +
                (activeFilter === "confirmadas" ? " active" : "")
              }
              onClick={() => handleFilterClick("confirmadas")}
            >
              Confirmadas
              <span className="filter-badge">6</span>
            </button>
            <button
              className={
                "filter-tab" +
                (activeFilter === "pendientes" ? " active" : "")
              }
              onClick={() => handleFilterClick("pendientes")}
            >
              Pendientes
              <span className="filter-badge">2</span>
            </button>
            <button
              className={
                "filter-tab" +
                (activeFilter === "realizadas" ? " active" : "")
              }
              onClick={() => handleFilterClick("realizadas")}
            >
              Realizadas
              <span className="filter-badge">12</span>
            </button>
            <button
              className={
                "filter-tab" +
                (activeFilter === "canceladas" ? " active" : "")
              }
              onClick={() => handleFilterClick("canceladas")}
            >
              Canceladas
              <span className="filter-badge">1</span>
            </button>
          </div>

          {/* CONFIRMADAS */}
          {activeFilter === "confirmadas" && (
            <div className="citas-grid" id="confirmadas">
              {[
                {
                  nombre: "Laura Martínez",
                  servicio: "Sesión Terapéutica",
                  fecha: "28 Ene, 2025",
                  hora: "3:00 PM - 4:00 PM",
                  monto: "$70.000",
                },
                {
                  nombre: "Francisco Sánchez",
                  servicio: "Entrenamiento Personal",
                  fecha: "31 Ene, 2025",
                  hora: "6:00 AM - 7:00 AM",
                  monto: "$40.000",
                },
                {
                  nombre: "Sofía Torres",
                  servicio: "Asesoría Fiscal",
                  fecha: "1 Feb, 2025",
                  hora: "10:00 AM - 11:00 AM",
                  monto: "$120.000",
                },
                {
                  nombre: "Juan Pérez",
                  servicio: "Consultoría Legal",
                  fecha: "25 Ene, 2025",
                  hora: "10:00 AM - 11:00 AM",
                  monto: "$85.000",
                },
                {
                  nombre: "María García",
                  servicio: "Sesión de Coaching",
                  fecha: "26 Ene, 2025",
                  hora: "2:00 PM - 3:00 PM",
                  monto: "$60.000",
                },
                {
                  nombre: "Carlos Rodríguez",
                  servicio: "Revisión Médica",
                  fecha: "27 Ene, 2025",
                  hora: "9:30 AM - 10:30 AM",
                  monto: "$75.000",
                },
              ].map((cita, idx) => (
                <div className="cita-card confirmed" key={idx}>
                  <div className="cita-header">
                    <h3>{cita.nombre}</h3>
                  </div>
                  <div className="cita-details">
                    <div className="detail-item">
                      <span className="label">Servicio:</span>
                      <span className="value">{cita.servicio}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Fecha:</span>
                      <span className="value">{cita.fecha}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Hora:</span>
                      <span className="value">{cita.hora}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Monto:</span>
                      <span className="value amount">{cita.monto}</span>
                    </div>
                  </div>
                  <div className="cita-actions">
                    <button
                      className="btn-action mark-completed"
                      onClick={marcarRealizada}
                    >
                      Marcar como realizada
                    </button>
                    <button className="btn-action cancel">
                      Cancelar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PENDIENTES */}
          {activeFilter === "pendientes" && (
            <div className="citas-grid" id="pendientes">
              {[
                {
                  nombre: "Andrea López",
                  servicio: "Diseño Gráfico",
                  fecha: "29 Ene, 2025",
                  hora: "4:00 PM - 5:00 PM",
                  monto: "$95.000",
                },
                {
                  nombre: "David Morales",
                  servicio: "Consultoría Empresarial",
                  fecha: "30 Ene, 2025",
                  hora: "11:00 AM - 12:00 PM",
                  monto: "$150.000",
                },
              ].map((cita, idx) => (
                <div className="cita-card pending" key={idx}>
                  <div className="cita-header">
                    <h3>{cita.nombre}</h3>
                  </div>
                  <div className="cita-details">
                    <div className="detail-item">
                      <span className="label">Servicio:</span>
                      <span className="value">{cita.servicio}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Fecha:</span>
                      <span className="value">{cita.fecha}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Hora:</span>
                      <span className="value">{cita.hora}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Monto:</span>
                      <span className="value amount">{cita.monto}</span>
                    </div>
                  </div>
                  <div className="cita-actions">
                    <button className="btn-action confirm">Confirmar</button>
                    <button className="btn-action reject">Rechazar</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* REALIZADAS */}
          {activeFilter === "realizadas" && (
            <div className="citas-grid" id="realizadas">
              <div className="cita-card completed">
                <div className="cita-header">
                  <h3>Elena Rodríguez</h3>
                </div>
                <div className="cita-details">
                  <div className="detail-item">
                    <span className="label">Servicio:</span>
                    <span className="value">Consultoría Marketing</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Fecha:</span>
                    <span className="value">20 Ene, 2025</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Hora:</span>
                    <span className="value">2:00 PM - 3:00 PM</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Monto:</span>
                    <span className="value amount">$110.000</span>
                  </div>
                </div>
                <div className="cita-actions">
                  <button
                    className="btn-action opinion"
                    onClick={() =>
                      mostrarOpinion(
                        5,
                        "Excelente servicio, muy profesional.",
                        "Elena Rodríguez"
                      )
                    }
                  >
                    Ver opinión
                  </button>
                </div>
              </div>

              <div className="cita-card completed">
                <div className="cita-header">
                  <h3>Roberto Jiménez</h3>
                </div>
                <div className="cita-details">
                  <div className="detail-item">
                    <span className="label">Servicio:</span>
                    <span className="value">Sesión de Coaching</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Fecha:</span>
                    <span className="value">19 Ene, 2025</span>
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
                    className="btn-action opinion"
                    onClick={() =>
                      mostrarOpinion(
                        4,
                        "Buen servicio, pero podría haber sido mejor.",
                        "Roberto Jiménez"
                      )
                    }
                  >
                    Ver opinión
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CANCELADAS */}
          {activeFilter === "canceladas" && (
            <div className="citas-grid" id="canceladas">
              <div className="cita-card cancelled">
                <div className="cita-header">
                  <h3>Patricia Fernández</h3>
                </div>
                <div className="cita-details">
                  <div className="detail-item">
                    <span className="label">Servicio:</span>
                    <span className="value">Revisión Contable</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Fecha:</span>
                    <span className="value">22 Ene, 2025</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Hora:</span>
                    <span className="value">3:30 PM - 4:30 PM</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Monto:</span>
                    <span className="value amount">$55.000</span>
                  </div>
                </div>
                <div className="cita-actions">
                  <button
                    className="btn-action opinion"
                    onClick={() =>
                      mostrarMotivo(
                        "Emergencia familiar de último minuto",
                        "Patricia Fernández"
                      )
                    }
                  >
                    Conocer motivo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODAL MOTIVO */}
      {reasonModal.open && (
        <div
          className="modal show"
          onClick={(e) => {
            if (e.target === e.currentTarget) cerrarModal("reason");
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Motivo de cancelación</h2>
              <button
                className="modal-close"
                onClick={() => cerrarModal("reason")}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p className="client-name">{reasonModal.cliente}</p>
              <p className="reason-text">{reasonModal.motivo}</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn-modal-primary"
                onClick={() => cerrarModal("reason")}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL OPINIÓN */}
      {opinionModal.open && (
        <div
          className="modal show"
          onClick={(e) => {
            if (e.target === e.currentTarget) cerrarModal("opinion");
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Opinión del cliente</h2>
              <button
                className="modal-close"
                onClick={() => cerrarModal("opinion")}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p className="client-name">{opinionModal.cliente}</p>
              <div className="rating">
                <div className="stars" id="starsDisplay">
                  {renderStars(opinionModal.rating)}
                </div>
              </div>
              <p className="opinion-text">{opinionModal.opinion}</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn-modal-primary"
                onClick={() => cerrarModal("opinion")}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
