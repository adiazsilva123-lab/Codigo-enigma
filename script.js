const cases = {
  caso1: {
    tag: "HOMICIDIO · CE-001",
    title: "Todos mienten",
    intro: "Sofía Herrera, 28 años, es encontrada sin vida en su apartamento a las 22:18. La puerta principal no presenta daños y seis personas tuvieron contacto con ella durante las horas anteriores.",
    facts: [
      "La vecina del 4B escuchó una discusión cerca de las 21:40.",
      "El reloj de pared estaba detenido a las 21:52.",
      "El teléfono de Sofía registró una llamada saliente a las 21:58.",
      "La puerta estaba cerrada, pero no asegurada con la cadena interior.",
      "Había lluvia intensa entre las 21:30 y las 22:10.",
      "Una taza con dos marcas de labial estaba sobre la mesa."
    ],
    suspects: [
      "Mateo Ruiz, exnovio. Afirma que se marchó a las 20:50.",
      "Laura Gómez, amiga. Dice que habló con Sofía por teléfono a las 21:55.",
      "Daniel Rojas, vecino. Dice que permaneció en su apartamento toda la noche.",
      "Camila Torres, compañera de trabajo. Afirma que vio a Sofía por última vez a las 19:10.",
      "Julián Pérez, hermano. Dice que llegó al edificio después de las 22:20.",
      "Valentina Cruz, vecina del 3B. Asegura que no salió de casa."
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
    solution: "La contradicción decisiva está en la versión de Laura. Su declaración no coincide con los registros de la llamada y la cronología de la escena."
  },

  caso2: {
    tag: "DESAPARICIÓN · CE-002",
    title: "La habitación 314",
    intro: "Tomás Vega desaparece durante una noche de tormenta. Su equipaje permanece en la habitación y varios registros del hotel presentan inconsistencias.",
    facts: [
      "La tarjeta de la habitación fue utilizada a las 02:14.",
      "La ventana tiene seguro interior.",
      "El ascensor registró movimiento a las 02:17.",
      "Una cámara dejó de grabar durante 43 segundos.",
      "El teléfono apareció apagado dentro de una mochila.",
      "El recepcionista recibió una llamada desde la habitación."
    ],
    suspects: [
      "El recepcionista de turno.",
      "Una huésped de la habitación 316.",
      "El gerente nocturno.",
      "Un mensajero.",
      "Un amigo de Tomás."
    ],
    timeline: [
      "01:50 · Entra un mensajero.",
      "02:14 · Se usa la tarjeta de la 314.",
      "02:17 · El ascensor registra movimiento.",
      "02:18 · La cámara pierde señal.",
      "02:26 · Se registra una llamada.",
      "06:30 · Se descubre la desaparición."
    ],
    solution: "La combinación del registro de tarjeta, el ascensor y la interrupción de la cámara crea una ventana de tiempo en la que alguien pudo entrar y salir sin quedar registrado claramente."
  },

  caso3: {
    tag: "HOMICIDIO · CE-003",
    title: "El último mensaje",
    intro: "El periodista Andrés León aparece muerto en su estudio. Su teléfono conserva un mensaje aparentemente enviado después de la hora estimada de muerte.",
    facts: [
      "El computador quedó encendido.",
      "El mensaje fue enviado desde una aplicación sincronizada.",
      "El reloj del computador estaba 11 minutos adelantado.",
      "Una libreta contiene tres iniciales.",
      "La puerta del estudio se cerró desde fuera.",
      "El historial muestra una sesión abierta."
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
      "22:06 · Se registra actividad.",
      "23:10 · Se encuentra el cuerpo."
    ],
    solution: "El mensaje posterior a la muerte no demuestra por sí solo que Andrés estuviera vivo. La configuración del computador permite cuestionar la hora registrada."
  },

  caso4: {
    tag: "ROBO · CE-004",
    title: "La vitrina vacía",
    intro: "Una pieza histórica desaparece de una galería durante una recepción. La alarma nunca se activó y cuatro personas tenían acceso a la zona.",
    facts: [
      "La alarma fue desactivada a las 19:42.",
      "La vitrina no presenta daños.",
      "El inventario fue actualizado a las 20:03.",
      "Una fotografía muestra un reflejo extraño.",
      "El guardia afirma que nunca abandonó la entrada.",
      "La caja encontrada no coincide con el tamaño de la pieza."
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
    solution: "La fotografía contiene una pista que permite reconstruir que la vitrina ya estaba abierta antes de terminar la recepción."
  },

  caso5: {
    tag: "DESAPARICIÓN · CE-005",
    title: "El tren de las 23:17",
    intro: "Clara Méndez desaparece después de una parada no programada del tren. El sistema y el testimonio del conductor no coinciden.",
    facts: [
      "El tren salió a las 22:48.",
      "A las 23:17 aparece una parada de 54 segundos.",
      "Una cámara muestra una persona con un paraguas rojo.",
      "El boleto de Clara fue validado dos veces.",
      "Un teléfono se conectó a la red de la estación.",
      "El conductor niega haber visto pasajeros bajar."
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
      "23:18 · La cámara registra el andén.",
      "23:24 · El teléfono deja de transmitir ubicación.",
      "00:02 · Se reporta la desaparición."
    ],
    solution: "La parada de las 23:17 es la anomalía central. El sistema registra la parada aunque el conductor la niega."
  }
};


/* ================================
   ESPERAR A QUE CARGUE LA PÁGINA
================================ */

document.addEventListener("DOMContentLoaded", function () {

  console.log("Código Enigma: JavaScript cargado correctamente");


  /* ================================
     MODAL DE CASOS
  ================================ */

  const modal = document.getElementById("caseModal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");


  function abrirCaso(id) {

    const caso = cases[id];

    if (!caso) {
      console.error("No existe el caso:", id);
      return;
    }

    modalContent.innerHTML = `
      <p class="modal-kicker">${caso.tag}</p>

      <h2 id="modalTitle">
        ${caso.title}
      </h2>

      <p>
        ${caso.intro}
      </p>

      <h3>
        Hechos y pistas
      </h3>

      <div class="evidence">

        ${caso.facts.map((pista, i) => `
          <div>
            <strong>Pista ${String(i + 1).padStart(2, "0")}</strong>
            <br>
            ${pista}
          </div>
        `).join("")}

      </div>

      <h3>
        Sospechosos
      </h3>

      <ol>
        ${caso.suspects.map(persona => `
          <li>${persona}</li>
        `).join("")}
      </ol>

      <h3>
        Línea temporal
      </h3>

      <ul>
        ${caso.timeline.map(evento => `
          <li>${evento}</li>
        `).join("")}
      </ul>

      <div class="solution">

        <strong>
          🔐 Solución del expediente
        </strong>

        <p>
          ${caso.solution}
        </p>

        <p>
          <strong>Nota:</strong>
          La solución pertenece a la ficción del caso.
        </p>

      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  }


  function cerrarCaso() {

    if (!modal) {
      return;
    }

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
  }


  /* ================================
     BOTONES "ABRIR EXPEDIENTE"
  ================================ */

  const botonesCasos =
    document.querySelectorAll(".open-case");

  botonesCasos.forEach(function (boton) {

    boton.addEventListener("click", function (evento) {

      evento.preventDefault();

      const id = boton.getAttribute("data-case");

      abrirCaso(id);

    });

  });


  /* ================================
     BOTÓN X DEL MODAL
  ================================ */

  if (modalClose) {

    modalClose.addEventListener("click", function () {

      cerrarCaso();

    });

  }


  /* ================================
     CLIC FUERA DEL MODAL
  ================================ */

  const backdrop =
    document.querySelector(".modal-backdrop");

  if (backdrop) {

    backdrop.addEventListener("click", function () {

      cerrarCaso();

    });

  }


  /* ================================
     ESC PARA CERRAR
  ================================ */

  document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

      cerrarCaso();

    }

  });


  /* ================================
     FILTROS DE CATEGORÍAS
  ================================ */

  const filtros =
    document.querySelectorAll(".filter");

  const tarjetas =
    document.querySelectorAll(".case-card");


  filtros.forEach(function (boton) {

    boton.addEventListener("click", function () {

      const categoria =
        boton.getAttribute("data-filter");


      filtros.forEach(function (otroBoton) {

        otroBoton.classList.remove("active");

      });


      boton.classList.add("active");


      tarjetas.forEach(function (tarjeta) {

        const categoriaTarjeta =
          tarjeta.getAttribute("data-category");


        if (
          categoria === "todos" ||
          categoria === categoriaTarjeta
        ) {

          tarjeta.style.display = "";

        } else {

          tarjeta.style.display = "none";

        }

      });

    });

  });


  /* ================================
     MENÚ DE LAS TRES LÍNEAS
  ================================ */

  const menuBtn =
    document.getElementById("menuBtn");

  const nav =
    document.getElementById("mainNav");


  if (menuBtn && nav) {

    menuBtn.addEventListener("click", function (evento) {

      evento.preventDefault();

      evento.stopPropagation();

      nav.classList.toggle("open");

    });


    nav.querySelectorAll("a").forEach(function (enlace) {

      enlace.addEventListener("click", function () {

        nav.classList.remove("open");

      });

    });

  }


  console.log(
    "Código Enigma: botones inicializados:",
    botonesCasos.length
  );

});
