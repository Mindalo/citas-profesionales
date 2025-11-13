import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/registrate.css";

export default function Registrate() {
  const [activeForm, setActiveForm] = useState("login");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userType, setUserType] = useState("cliente");

  const mostrarFormulario = (form) => {
    setActiveForm(form);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-branding">
          <div className="branding-overlay"></div>
          <div className="branding-contenido">
            <div className="logo-section">
              <img src="/img/logo.png" alt="Logo" className="logo-grande" />
              <h1>Agendia</h1>
              <p className="subtitulo">Tu red profesional</p>
            </div>
          </div>
        </div>

        <div className="auth-form-container">
          <div className="form-wrapper">
            <div className="tabs">
              <button
                className={`tab-btn ${activeForm === "login" ? "active" : ""}`}
                onClick={() => mostrarFormulario("login")}
              >
                <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
              </button>
              <button
                className={`tab-btn ${activeForm === "registro" ? "active" : ""}`}
                onClick={() => mostrarFormulario("registro")}
              >
                <i className="fas fa-user-plus"></i> Registrarse
              </button>
            </div>

            {/* Formulario de login */}
            {activeForm === "login" && (
              <div id="form-login" className="form-content active">
                <div className="form-header">
                  <h2>Inicia Sesión</h2>
                </div>

                <form className="auth-form">
                  <div className="form-group">
                    <input
                      type="email"
                      id="login-email"
                      placeholder="Correo Electrónico"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div className="password-input">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="login-password"
                        placeholder="Contraseña"
                        required
                      />
                      <button
                        type="button"
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      >
                        <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="boton">
                    Iniciar Sesión
                  </button>
                </form>

                <div className="volver-inicio">
                  <Link to="/">
                    <i className="fas fa-arrow-left"></i> Volver al inicio
                  </Link>
                </div>
              </div>
            )}

            {/* Formulario de registro */}
            {activeForm === "registro" && (
              <div id="form-registro" className="form-content active">
                <div className="form-header">
                  <h2>Regístrate</h2>
                </div>

                <form className="auth-form">
                  <div className="form-group">
                    <label>Tipo de Usuario</label>
                    <div className="tipo-usuario-group">
                      <label className="radio-card">
                        <input
                          type="radio"
                          name="tipo-usuario"
                          value="cliente"
                          checked={userType === "cliente"}
                          onChange={handleUserTypeChange}
                        />
                        <div className="radio-content">
                          <i className="fas fa-user"></i>
                          <span>Cliente</span>
                        </div>
                      </label>
                      <label className="radio-card">
                        <input
                          type="radio"
                          name="tipo-usuario"
                          value="profesional"
                          checked={userType === "profesional"}
                          onChange={handleUserTypeChange}
                        />
                        <div className="radio-content">
                          <i className="fas fa-briefcase"></i>
                          <span>Profesional</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="registro-nombre"
                      placeholder="Nombre Completo"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="registro-email"
                      placeholder="Correo Electrónico"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      id="registro-telefono"
                      placeholder="Celular"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div className="password-input">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="registro-password"
                        placeholder="Contraseña"
                        required
                      />
                      <button
                        type="button"
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      >
                        <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                      </button>
                    </div>
                  </div>

                  {userType === "profesional" && (
                    <div className="form-group" id="campo-profesion">
                      <label htmlFor="registro-profesion">
                        <i className="fas fa-graduation-cap"></i> Profesión
                      </label>
                      <select id="registro-profesion" required>
                        <option value="">Selecciona tu profesión</option>
                        <option value="abogado">Abogado</option>
                        <option value="medico">Médico</option>
                        <option value="profesor">Profesor</option>
                        <option value="psicologo">Psicólogo</option>
                        <option value="ingeniero">Ingeniero</option>
                      </select>
                    </div>
                  )}

                  <button type="submit" className="boton">
                    Registrarte
                  </button>
                </form>

                <div className="volver-inicio">
                  <Link to="/">
                    <i className="fas fa-arrow-left"></i> Volver al inicio
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}