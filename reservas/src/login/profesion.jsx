import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/profesion.css";
import { FaBalanceScale ,FaUserMd,FaHardHat,FaChalkboardTeacher } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function SeleccionProfesion() {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleNotification = (e) => {
    e.stopPropagation();
    setNotificationVisible((prev) => !prev);
    setUserMenuVisible(false);
  };

  const toggleUserMenu = (e) => {
    e.stopPropagation();
    setUserMenuVisible((prev) => !prev);
  };

  const markAsRead = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  const clearAllNotifications = () => {
    setNotificationCount(0);
    setNotificationVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu")) {
        setUserMenuVisible(false);
      }
      if (!e.target.closest(".notification-container")) {
        setNotificationVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div> 
      <main>
        <section className="especialidades" id="servicios">
          <h3>Elige la profesión que necesitas</h3>
          <div className="tarjetas_especialidades">
            <div className="tarjeta">
              <FaBalanceScale/>
              <h4>Abogado</h4>
              <p>
                Asesoría legal y representación jurídica en diversas áreas del
                derecho.
              </p>
              <Link to="/profesional" className="boton">
                Ver Abogados
              </Link>
            </div>

            <div className="tarjeta">
              <FaUserMd/>
              <h4>Médico</h4>
              <p>
                Diagnóstico, tratamiento y prevención de enfermedades para tu
                bienestar.
              </p>
              <Link to="/profesional" className="boton">
                Ver Médicos
              </Link>
            </div>

            <div className="tarjeta">
              <FaChalkboardTeacher/>
              <h4>Profesor</h4>
              <p>
                Educación personalizada y desarrollo académico en diversas
                áreas.
              </p>
              <Link to="/profesional" className="boton">
                Ver Profesores
              </Link>
            </div>

            <div className="tarjeta">
              < IoLibrary/>
              <h4>Psicólogo</h4>
              <p>
                Apoyo emocional y terapia para mejorar tu bienestar mental.
              </p>
              <Link to="/profesional" className="boton">
                Ver Psicólogos
              </Link>
            </div>

            <div className="tarjeta">
              <FaHardHat/>
              <h4>Ingeniero</h4>
              <p>
                Soluciones técnicas y desarrollo de proyectos especializados.
              </p>
              <Link to="/seleccion-profesionales" className="boton">
                Ver Ingenieros
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
