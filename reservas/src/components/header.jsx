import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-header">
          <img src="/img/logo.png" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/profesional">Profesionales</NavLink>
          </li>
          <li>
            <NavLink to="/profesion">Cómo funciona</NavLink>
          </li>
        </ul>

        <div className="nav-buttons">
          <NavLink to="/registrate" className="botones-ingreso">
            Regístrate
          </NavLink>
          <NavLink to="/login" className="botones-ingreso">
            Inicia Sesión
          </NavLink>
        </div>
      </nav>
    </header>
  );
}