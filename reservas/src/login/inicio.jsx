import React from "react";
import "../styles/inicio.css";
import { useLocation, Link } from "react-router-dom";
import { FaUserMd, FaBalanceScale, FaHardHat, FaChalkboardTeacher } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { RiNumber1, RiNumber2, RiNumber3  } from "react-icons/ri";


export default function Inicio() {
  return (
    <div className="poppins">
      <main>
        <div className="contenedor_hero" id="inicio">
          <div className="texto_hero">
            <h1>Conecta con Profesionales, Agenda con Confianza</h1>
            <p>
              Encuentra y agenda citas con los mejores profesionales en medicina,
              derecho, ingeniería, educación y contabilidad. Todo en un solo lugar.
            </p>
            <div className="botones">
              <a href="#contacto" className="boton-cita">Agenda tu Cita</a>
            </div>
          </div>

          <div className="img_hero">
            {/* Evita espacios en nombres de archivos; renómbralo a img-hero.jpg si puedes */}
            <img src="../img/img hero.jpg" alt="Profesionales" />
          </div>
        </div>
        <section className="profesionales" id="profesionales">
          <h3>Encuentra al Profesional que Necesitas</h3>
          <div className="tarjetas_profesionales">
            <div className="tarjeta_profesional">
              <div className="icon">
                <FaUserMd />
              </div>
              <h4>Médicos</h4>
              <p>Especialistas en tu salud.</p>
            </div>

            <div className="tarjeta_profesional">
              <div className="icon">
                <FaBalanceScale />
              </div>
              <h4>Abogados</h4>
              <p>Asesoría legal confiable.</p>
            </div>

            <div className="tarjeta_profesional">
              <div className="icon">
                <FaHardHat />
              </div>
              <h4>Ingenieros</h4>
              <p>Expertos en proyectos.</p>
            </div>

            <div className="tarjeta_profesional">
              <div className="icon">
                <FaChalkboardTeacher />
              </div>
              <h4>Profesores</h4>
              <p>Aprende con expertos.</p>
            </div>

            <div className="tarjeta_profesional">
              <div className="icon">
                <IoLibrary />
              </div>
              <h4>Psicólogos</h4>
              <p>Cuidando tu bienestar.</p>
            </div>
          </div>
        </section>

        <section className="funciona" id="funciona">
          <h3>Agenda tu Cita en 3 Simples Pasos</h3>
          <div className="tarjetas_pasos">
            <div className="paso">
              <RiNumber1 />
              <h6>Regístrate</h6>
            </div>
            <div className="paso">
              <RiNumber2 />
              <h6>Encuentra tu profesional</h6>
            </div>
            <div className="paso">
              <RiNumber3/> 
              <h6>Agenda tu cita</h6>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="contenedor_footer">
          <div className="columna_footer">
            <img src="/img/logo.png" alt="Logo" className="logo_footer" />
            <p>
              Conectando profesionales con quienes necesitan sus servicios. Tu
              confianza es nuestra prioridad.
            </p>
          </div>

          <div className="columna_footer">
            <h4>Profesionales</h4>
            <ul>
              <li><a href="#profesionales">Médicos</a></li>
              <li><a href="#profesionales">Abogados</a></li>
              <li><a href="#profesionales">Ingenieros</a></li>
              <li><a href="#profesionales">Profesores</a></li>
              <li><a href="#profesionales">Psicólogos</a></li>
            </ul>
          </div>

          <div className="columna_footer">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#inicio">Sobre Nosotros</a></li>
              <li><a href="#funciona">Cómo Funciona</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="footer_bottom">
          <p>&copy; 2025 Profesionales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}