import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/confirmacion.css";

export default function PagoExitoso() {
  const location = useLocation();
  const q = new URLSearchParams(location.search);

  const iso = q.get("date");
  const slot = q.get("slot");
  const amt = Number(q.get("amount") || "0");
  const pro = q.get("pro") || "";
  const title = q.get("title") || "";
  const method = q.get("method") || "";

  const fmtCOP = (n) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(n);

  const fmtDate = (isoDate) => {
    if (!isoDate) return "";
    const d = new Date(isoDate + "T00:00:00");
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const metodoTexto =
    method === "paypal" ? "PayPal" : method ? "Tarjeta" : "Método de pago";

  return (
    <main className="success-container">
      <div className="card">
        <div className="icon">✅</div>
        <h1>¡Pago exitoso!</h1>
        <p className="muted">
          Tu cita ha sido registrada y el pago se completó correctamente.
        </p>

        <div id="resume" className="resume">
          <div className="pill">{metodoTexto}</div>
          {pro && (
            <p>
              <strong>Profesional:</strong> {pro}
            </p>
          )}
          {title && (
            <p>
              <strong>Servicio:</strong> {title}
            </p>
          )}
          {(iso || slot) && (
            <p>
              {iso && (
                <>
                  <strong>Fecha:</strong> {fmtDate(iso)}{" "}
                </>
              )}
              {slot && (
                <>
                  — <strong>Hora:</strong> {slot}
                </>
              )}
            </p>
          )}
          {amt > 0 && (
            <p>
              <strong>Total:</strong> {fmtCOP(amt)}
            </p>
          )}
        </div>

        {/* Ajusta la ruta según tu router (por ejemplo /agendar) */}
        <Link className="btn" to="/agendar">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
