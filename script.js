document.addEventListener("DOMContentLoaded", () => {

  console.log("Código Enigma funcionando");

  const casos = {
    caso1: {
      tag: "HOMICIDIO · CE-001",
      title: "Todos mienten",
      intro: "Sofía Herrera, 28 años, es encontrada sin vida en su apartamento a las 22:18.",
      facts: [
        "La vecina del 4B escuchó una discusión cerca de las 21:40.",
        "El reloj de pared estaba detenido a las 21:52.",
        "El teléfono de Sofía registró una llamada saliente a las 21:58.",
        "La puerta estaba cerrada, pero no asegurada con la cadena interior.",
        "Había lluvia intensa entre las 21:30 y las 22:10.",
        "Una taza con dos marcas de labial estaba sobre la mesa."
      ],
      suspects: [
        "Mateo Ruiz, exnovio.",
        "Laura Gómez, amiga.",
        "Daniel Rojas, vecino.",
        "Camila Torres, compañera de trabajo.",
        "Julián Pérez, hermano.",
        "Valentina Cruz, vecina."
      ],
      timeline: [
        "19:10 · Sofía termina su jornada.",
        "20:35 · Una cámara registra a una persona entrando al edificio.",
        "20:50 · Mateo afirma haber abandonado el lugar.",
        "21:40 · La vecina escucha una discusión.",
        "21:52 · El reloj de pared queda detenido.",
        "21:58 · Se registra una llamada desde el teléfono de Sofía.",
        "22:18 · Se solicita ayuda."
      ],
      solution: "La contradicción decisiva está en la cronología de las llamadas y las declaraciones."
    },

    caso2: {
      tag: "DESAPARICIÓN · CE-002",
      title: "La habitación 314",
      intro: "Tomás Vega desaparece de un hotel durante una noche de tormenta.",
      facts: [
        "La tarjeta de la habitación fue utilizada a las 02:14.",
        "La ventana tiene seguro interior.",
        "El ascensor del piso fue registrado a las 02:17.",
        "Una cámara dejó de grabar durante 43 segundos.",
        "El teléfono de Tomás apareció apagado dentro de una mochila."
      ],
      suspects: [
        "El recepcionista.",
        "Una huésped de la habitación 316.",
        "El gerente nocturno.",
        "Un mensajero.",
        "Un amigo de Tomás."
      ],
      timeline: [
        "01:50 · Entra un mensajero.",
        "02:14 · Se utiliza la tarjeta.",
        "02:17 · El ascensor registra movimiento.",
        "02:18 · La cámara pierde señal.",
        "02:26 · Se registra una llamada.",
        "06:30 · Se descubre la ausencia."
      ],
      solution: "La diferencia entre los registros electrónicos y los movimientos físicos crea una ventana de tiempo sospechosa."
    },

    caso3: {
      tag: "HOMICIDIO · CE-003",
      title: "El último mensaje",
      intro: "El periodista Andrés León aparece muerto en su estudio.",
      facts: [
        "El computador quedó encendido.",
        "El mensaje fue enviado desde una aplicación de escritorio.",
        "El reloj del computador estaba 11 minutos adelantado.",
        "Una libreta contiene tres iniciales.",
        "La puerta del estudio se cerró desde fuera."
      ],
      suspects: [
        "Su editor.",
        "Una fuente anónima.",
        "Su vecino.",
        "Una colega.",
        "Un familiar."
      ],
      timeline: [
        "19:30 · Andrés se reúne con su editor.",
        "20:45 · Regresa al estudio.",
        "21:40 · Se escucha una discusión.",
        "21:55 · El teléfono recibe un mensaje.",
        "22:06 · Se registra actividad en el computador.",
        "23:10 · Se encuentra el cuerpo."
      ],
      solution: "El supuesto mensaje posterior a la muerte no demuestra por sí solo que Andrés estuviera vivo."
    },

    caso4: {
      tag: "ROBO · CE-004",
      title: "La vitrina vacía",
      intro: "Una pieza histórica desaparece de una galería durante una recepción.",
      facts: [
        "La alarma fue desactivada a las 19:42.",
        "La vitrina no presenta daños.",
        "El inventario fue actualizado a las 20:03.",
        "Una fotografía tomada a las 19:55 muestra un reflejo extraño.",
        "El guardia afirma que nunca abandonó la entrada."
      ],
      suspects: [
        "El curador.",
        "El guardia de seguridad.",
        "Una restauradora.",
        "Un coleccionista invitado."
      ],
      timeline: [
        "19:30 · Comienza la recepción.",
        "19:42 · Se desactiva la alarma.",
        "19:55 · Se toma una fotografía.",
        "20:03 · Se actualiza el inventario.",
        "20:20 · Termina la recepción.",
        "20:31 · Se descubre la ausencia."
      ],
      solution: "La fotografía contiene la pista decisiva."
    },

    caso5: {
      tag: "DESAPARICIÓN · CE-005",
      title: "El tren de las 23:17",
      intro: "Clara Méndez desaparece después de una parada no programada.",
      facts: [
        "El tren salió a las 22:48.",
        "A las 23:17 aparece una parada de 54 segundos.",
        "La cámara muestra una persona con un paraguas rojo.",
        "El boleto de Clara fue validado dos veces.",
        "Un teléfono cercano se conectó a la red de la estación."
      ],
      suspects: [
        "El conductor.",
        "El supervisor de estación.",
        "Un pasajero.",
        "Un empleado de mantenimiento.",
        "La persona del paraguas rojo."
      ],
      timeline: [
        "22:48 · Salida.",
        "23:10 · Clara envía un mensaje.",
        "23:17 · Parada de 54 segundos.",
        "23:18 · Cámara registra el andén.",
        "23:24 · El teléfono deja de transmitir ubicación."
      ],
      solution: "La parada de las 23:17 es la anomalía central."
    }
  };


  /* =========================
     ABRIR CASOS
  ========================= */

  document.addEventListener("click", function(e) {

    const boton = e.target.closest(".open-case");

    if (!boton) return;

    e.preventDefault();

    const id = boton.getAttribute("data-case");
    const caso = casos[id];

    console.log("Botón pulsado:", id);

    if (!caso) {
      console.error("No existe el caso:", id);
      return;
    }

    const modal = document.getElementById("caseModal");
    const contenido = document.getElementById("modalContent");

    if (!modal || !contenido) {
      console.error("No se encontró el modal");
      return;
    }

    contenido.innerHTML = `
      <p class="modal-kicker">${caso.tag}</p>

      <h2 id="modalTitle">${caso.title}</h2>

      <p>${caso.intro}</p>

      <h3>Hechos confirmados</h3>

      <div class="evidence">
        ${caso.facts.map((dato, i) => `
          <div>
            <strong>Pista ${String(i + 1).padStart(2, "0")}</strong>
            <br>
            ${dato}
          </div>
        `).join("")}
      </div>

      <h3>Sospechosos</h3>

      <ol>
        ${caso.suspects.map(persona => `
          <li>${persona}</li>
        `).join("")}
      </ol>

      <h3>Línea temporal</h3>

      <ul>
        ${caso.timeline.map(evento => `
          <li>${evento}</li>
        `).join("")}
      </ul>

      <div class="solution">
        <strong>🔐 Solución del expediente</strong>
        <p>${caso.solution}</p>
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

  });


  /* =========================
     CERRAR MODAL
  ========================= */

  document.addEventListener("click", function(e) {

    if (
      e.target.matches(".modal-close") ||
      e.target.matches(".modal-backdrop")
    ) {

      const modal = document.getElementById("caseModal");

      if (modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }

    }

  });


  /* ESC */

  document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

      const modal = document.getElementById("caseModal");

      if (modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }

    }

  });


  /* =========================
     FILTROS
  ========================= */

  document.addEventListener("click", function(e) {

    const boton = e.target.closest(".filter");

    if (!boton) return;

    const filtro = boton.getAttribute("data-filter");

    document.querySelectorAll(".filter").forEach(b => {
      b.classList.remove("active");
    });

    boton.classList.add("active");

    document.querySelectorAll(".case-card").forEach(card => {

      const categoria = card.getAttribute("data-category");

      if (filtro === "todos" || categoria === filtro) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });


  /* =========================
     MENÚ
  ========================= */

  document.addEventListener("click", function(e) {

    const boton = e.target.closest("#menuBtn");

    if (!boton) return;

    const nav = document.getElementById("mainNav");

    if (nav) {
      nav.classList.toggle("open");
    }

  });


  console.log("Código Enigma: sistema listo");

});
