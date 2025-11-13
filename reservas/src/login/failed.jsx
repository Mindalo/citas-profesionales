import { useEffect, useState } from "react";
import "../styles/failed.css";

export default function Failed() {
  const [data, setData] = useState({
    iso: "",
    slot: "",
    amt: 0,
    pro: "",
    title: "",
    method: ""
  });

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);

    const iso = q.get("date");
    const slot = q.get("slot");
    const amt = Number(q.get("amount") || "0");
    const pro = q.get("pro") || "";
    const title = q.get("title") || "";
    const method = q.get("method") || "";

    setData({ iso, slot, amt, pro, title, method });
  }, []);

  const fmtCOP = (n) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(n);

  const fmtDate = (v) => {
    if (!v) return "";
    const d = new Date(v + "T00:00:00");
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1
    ).padStart(2, "0")}/${d.getFullYear()}`;
  };

  const retryParams = new URLSearchParams({
    date: data.iso,
    slot: data.slot,
    amount: data.amt,
    pro: data.pro,
    title: data.title
  }).toString();

  return (
    <main className="wrap">
      <div className="card">
        <div className="icon">⚠️</div>

        <h1>Pago cancelado</h1>
        <p className="muted">No se completó el pago. Puedes intentar nuevamente.</p>

        <div className="resume">
          <p><strong>Método:</strong> {data.method || "PayPal"}</p>
          <p><strong>Profesional:</strong> {data.pro}</p>
          <p><strong>Servicio:</strong> {data.title}</p>
          <p>
            <strong>Fecha:</strong> {fmtDate(data.iso)} —{" "}
            <strong>Hora:</strong> {data.slot || ""}
          </p>
          <p><strong>Total:</strong> {fmtCOP(data.amt)}</p>
        </div>

        <div className="actions">
          <a className="btn" href={`/pasarela?${retryParams}`}>
            Intentar de nuevo
          </a>

          <a className="btn-secondary" href="/agendar-cita">
            Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}
