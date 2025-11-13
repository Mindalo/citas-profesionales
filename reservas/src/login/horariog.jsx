import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/horariog.css";

export default function HorarioGuardado() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  // Función para manejar la visibilidad del menú de usuario
  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  // Función para cerrar el menú si se hace clic fuera de él
  const handleClickOutside = (e) => {
    if (!e.target.closest('#userButton') && !e.target.closest('#dropdownMenu')) {
      setUserMenuVisible(false);
    }
  };

  // Añadir el evento de clic fuera del menú al montar el componente
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="main">
        <div className="vista-previa-container">
          <h2>Tu Horario Semanal</h2>

          <div className="tarjetas_dias preview">
            {["lunes", "martes", "miercoles", "jueves", "viernes"].map((day) => (
              <div className="tarjeta preview-item" key={day}>
                <h5>{day.charAt(0).toUpperCase() + day.slice(1)}</h5>
                <div className="preview-horarios" data-day={day}>
                  <div className="preview-horario">09:00 a.m. - 05:00 p.m.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>  
    </div>
  );
}
