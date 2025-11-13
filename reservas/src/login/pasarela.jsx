import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/pasarela.css";

export default function Pasarela() {    
  const location = useLocation();
  const navigate = useNavigate();

  // =============================
  //   PARAMS DE LA URL
  // =============================
  const qs = new URLSearchParams(location.search);
  const iso = qs.get("date");
  const slot = qs.get("slot") || "";
  const amt = Number(qs.get("amount") || "48000");
  const pro = qs.get("pro") || "Profesional";
  const title = qs.get("title") || "Consulta";

  const fmtCOP = (n) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(n);

  const fmtDate = (v) => {
    if (!v) return "";
    const d = new Date(v + "T00:00:00");
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1
    ).padStart(2, "0")}/${d.getFullYear()}`;
  };

  // =============================
  //   ESTADOS
  // =============================
  const [tab, setTab] = useState("tarjeta");

  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const paypalRef = useRef();

  // =============================
  //   FORMATOS
  // =============================
  const onlyDigits = (s) => s.replace(/\D+/g, "");

  const formatCardNumber = (v) =>
    onlyDigits(v).slice(0, 19).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (v) => {
    let d = onlyDigits(v).slice(0, 4);
    if (d.length >= 2) {
      let mm = parseInt(d.slice(0, 2), 10);
      if (mm < 1) mm = 1;
      if (mm > 12) mm = 12;
      const mmStr = String(mm).padStart(2, "0");
      const yy = d.slice(2);
      return yy ? `${mmStr}/${yy}` : mmStr;
    }
    return d;
  };

  const isValidExpiry = (v) => /^\d{2}\/\d{2}$/.test(v);

  // =============================
  //     SUBMIT TARJETA
  // =============================
  const onSubmitCard = (e) => {
    e.preventDefault();

    const digits = onlyDigits(cardNum);

    if (cardName.length < 3) return alert("Nombre inválido");
    if (digits.length < 13 || digits.length > 19)
      return alert("Número de tarjeta inválido");
    if (!isValidExpiry(cardExp)) return alert("Fecha inválida");
    if (!/^\d{3,4}$/.test(cardCVV)) return alert("CVV inválido");

    navigate(
      `/confirmacion?date=${iso}&slot=${slot}&amount=${amt}&pro=${pro}&title=${title}&method=card`
    );
  };

  // =============================
  //      PAYPAL BUTTONS
  // =============================
  useEffect(() => {
    if (tab !== "paypal") return;

    if (!window.paypal) return;

    const amountStr = (Math.round(amt * 100) / 100).toFixed(2);

    window.paypal
      .Buttons({
        style: { layout: "vertical", label: "paypal" },

        createOrder: (data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  description: `${title} (${pro})`,
                  amount: { currency_code: "USD", value: amountStr },
                },
              ],
            })
            .catch((err) => alert("Error creando orden PayPal"));
        },

        onApprove: (_data, actions) => {
          return actions.order.capture().then(() => {
            navigate(
              `/confirmacion?date=${iso}&slot=${slot}&amount=${amt}&pro=${pro}&title=${title}&method=paypal`
            );
          });
        },

        onError: () => alert("Error en PayPal"),
      })
      .render(paypalRef.current);
  }, [tab]);

  // =============================
  //          JSX
  // =============================
  return (
    <>
      <main className="container">
        <h1>Completa tu pago</h1>

        <div className="wrap">
          {/* ===== Resumen ===== */}
          <section className="card">
            <h2>Resumen de la cita</h2>

            <div className="row">
              <span>Profesional</span>
              <span className="pill">{pro}</span>
            </div>

            <div className="row">
              <span>Servicio</span>
              <span className="pill">{title}</span>
            </div>

            <div className="row">
              <span>Fecha</span>
              <span className="pill">{fmtDate(iso)}</span>
            </div>

            <div className="row">
              <span>Horario</span>
              <span className="pill">{slot}</span>
            </div>

            <div className="divider"></div>

            <div className="row">
              <span>Total</span>
              <span className="total">{fmtCOP(amt)}</span>
            </div>

            <p className="hint">
              Al pagar aceptas términos y privacidad. El formulario de tarjeta
              es solo demostración.
            </p>
          </section>

          {/* ===== Métodos ===== */}
          <section className="card">
            <h2>Métodos de pago</h2>

            <div className="tabs">
              <button
                className={`tab ${tab === "tarjeta" ? "active" : ""}`}
                onClick={() => setTab("tarjeta")}
              >
                Tarjeta
              </button>

              <button
                className={`tab ${tab === "paypal" ? "active" : ""}`}
                onClick={() => setTab("paypal")}
              >
                PayPal
              </button>
            </div>

            {/* ===== FORM TARJETA ===== */}
            {tab === "tarjeta" && (
              <form className="tab-pane" onSubmit={onSubmitCard}>
                <div className="field">
                  <label>Nombre en la tarjeta</label>
                  <input
                    className="input"
                    placeholder="Nombre y Apellido"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Número de tarjeta</label>
                  <input
                    className="input"
                    placeholder="4111 1111 1111 1111"
                    value={cardNum}
                    onChange={(e) =>
                      setCardNum(formatCardNumber(e.target.value))
                    }
                    maxLength="19"
                  />
                </div>

                <div className="grid-2">
                  <div className="field">
                    <label>Vencimiento (MM/AA)</label>
                    <input
                      className="input"
                      placeholder="MM/AA"
                      value={cardExp}
                      onChange={(e) =>
                        setCardExp(formatExpiry(e.target.value))
                      }
                      maxLength="5"
                    />
                  </div>

                  <div className="field">
                    <label>CVV</label>
                    <input
                      className="input"
                      placeholder="123"
                      value={cardCVV}
                      onChange={(e) =>
                        setCardCVV(onlyDigits(e.target.value).slice(0, 4))
                      }
                      maxLength="4"
                    />
                  </div>
                </div>

                <div className="divider"></div>

                <button className="btn">Confirmar pago con Tarjeta</button>
              </form>
            )}

            {/* ===== PAYPAL ===== */}
            {tab === "paypal" && (
              <div className="tab-pane">
                <div ref={paypalRef} id="paypal-buttons"></div>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
