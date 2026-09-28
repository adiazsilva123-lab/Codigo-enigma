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
      "Mateo Ruiz, exnovio. Afirma que se marchó a las 20:50 y que no regresó.",
      "Laura Gómez, amiga. Dice que habló con Sofía por teléfono a las 21:55.",
      "Daniel Rojas, vecino. Dice que permaneció en su apartamento toda la noche.",
      "Camila Torres, compañera de trabajo. Afirma que vio a Sofía por última vez a las 19:10.",
      "Julián Pérez, hermano. Dice que llegó al edificio después de las 22:20.",
      "Valentina Cruz, vecina del 3B. Asegura que no salió de casa durante la tormenta."
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
    solution: "La contradicción decisiva está en la versión de Laura. Ella afirma que habló con Sofía a las 21:55, pero el registro disponible muestra que la llamada de las 21:58 fue saliente desde el teléfono de Sofía y no coincide con el contacto que Laura describe. La investigación ficticia establece que Laura estuvo en el apartamento y mintió sobre la hora para ocultar la discusión."
  },

  caso2: {
    tag: "DESAPARICIÓN · CE-002",
    title: "La habitación 314",
    intro: "Tomás Vega reserva una habitación de hotel para una sola noche. A las 06:30, el personal descubre que no está. Su equipaje sigue dentro, la ventana está cerrada y el registro de tarjetas muestra movimientos extraños.",
    facts: [
      "La tarjeta de la habitación fue utilizada a las 02:14.",
      "La ventana tiene seguro interior.",
      "El ascensor del piso fue registrado a las 02:17.",
      "Una cámara del pasillo dejó de grabar durante 43 segundos.",
      "El teléfono de Tomás apareció apagado dentro de una mochila.",
      "El recepcionista recuerda haber recibido una llamada desde la 314."
    ],
    suspects: [
      "El recepcionista de turno, que tenía acceso maestro.",
      "Una huésped de la 316, que conocía a Tomás.",
      "El gerente nocturno, que revisaba las cámaras.",
      "Un mensajero que entró al hotel a las 01:50.",
      "Un amigo de Tomás que aseguró no conocer el hotel."
    ],
    timeline: [
      "01:50 · Entra un mensajero.",
      "02:14 · Se usa la tarjeta de la 314.",
      "02:17 · El ascensor registra movimiento.",
      "02:18 · La cámara pierde señal durante 43 segundos.",
      "02:26 · Se registra una llamada desde la 314.",
      "06:30 · El personal descubre la ausencia."
    ],
    solution: "La solución gira alrededor de la diferencia entre acceso físico y registro electrónico. La tarjeta fue usada, pero el movimiento del ascensor y la interrupción de la cámara crean una ventana de tiempo en la que alguien pudo entrar y salir sin quedar registrado claramente."
  },

  caso3: {
    tag: "HOMICIDIO · CE-003",
    title: "El último mensaje",
    intro: "El periodista Andrés León aparece muerto en su estudio. Horas antes había escrito que estaba a punto de publicar una investigación. Su teléfono conserva un mensaje enviado aparentemente después de la hora estimada de muerte.",
    facts: [
      "El computador quedó encendido.",
      "El mensaje fue enviado desde una aplicación de escritorio sincronizada.",
      "El reloj del computador estaba 11 minutos adelantado.",
      "Una libreta contiene tres iniciales.",
      "La puerta del estudio se cerró desde fuera.",
      "El historial muestra una sesión abierta a las 22:06."
    ],
    suspects: [
      "Su editor, que conocía la investigación.",
      "Una fuente anónima.",
      "Su vecino, con quien discutió esa tarde.",
      "Una colega que tenía acceso al estudio.",
      "Un familiar que esperaba una llamada."
    ],
    timeline: [
      "19:30 · Andrés se reúne con su editor.",
      "20:45 · Regresa al estudio.",
      "21:40 · Se escucha una discusión.",
      "21:55 · El teléfono recibe un mensaje.",
      "22:06 · Se registra actividad en el computador.",
      "23:10 · Se encuentra el cuerpo."
    ],
    solution: "El supuesto mensaje posterior a la muerte no demuestra por sí solo que Andrés estuviera vivo. El computador tenía el reloj adelantado y la aplicación permanecía sincronizada. La pista clave es que alguien con acceso al estudio conocía la configuración del equipo."
  },

  caso4: {
    tag: "ROBO · CE-004",
    title: "La vitrina vacía",
    intro: "Una galería privada descubre que una pieza histórica desapareció durante una recepción. La alarma nunca se activó y cuatro personas tuvieron acceso a la zona restringida.",
    facts: [
      "La alarma fue desactivada a las 19:42.",
      "La vitrina no presenta daños.",
      "El inventario fue actualizado a las 20:03.",
      "Una fotografía tomada a las 19:55 muestra un reflejo extraño.",
      "El guardia afirma que nunca abandonó la entrada.",
      "La caja de transporte encontrada después no coincide con el tamaño de la pieza."
    ],
    suspects: [
      "El curador de la exposición.",
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
    solution: "La fotografía contiene la pista decisiva. El reflejo permite reconstruir que la vitrina ya estaba abierta antes de que terminara la recepción. La actualización del inventario a las 20:03 no fue una confirmación física de la pieza."
  },

  caso5: {
    tag: "DESAPARICIÓN · CE-005",
    title: "El tren de las 23:17",
    intro: "Clara Méndez sube a un tren nocturno y desaparece después de una parada no programada. El operador afirma que el tren no se detuvo en otra estación, pero una cámara cuenta una historia diferente.",
    facts: [
      "El tren salió a las 22:48.",
      "A las 23:17 aparece una parada de 54 segundos en el sistema.",
      "La cámara del andén muestra una persona con un paraguas rojo.",
      "El boleto de Clara fue validado dos veces.",
      "Un teléfono cercano se conectó a la red de la estación.",
      "El conductor niega haber visto pasajeros bajar."
    ],
    suspects: [
      "El conductor.",
      "El supervisor de estación.",
      "Un pasajero sentado detrás de Clara.",
      "Un empleado de mantenimiento.",
      "La persona del paraguas rojo."
    ],
    timeline: [
      "22:48 · Salida.",
      "23:10 · Clara envía un mensaje.",
      "23:17 · Parada de 54 segundos.",
      "23:18 · Cámara registra el andén.",
      "23:24 · El teléfono de Clara deja de transmitir ubicación.",
      "00:02 · Se reporta la desaparición."
    ],
    solution: "La parada de 23:17 es la anomalía central. El sistema la registra aunque el conductor la niega. El boleto validado dos veces indica que Clara salió y volvió a entrar en algún momento, mientras que la cámara confirma presencia en el andén."
  }
};


/* =========================
   EXPEDIENTES
========================= */

function abrirCaso(id) {

  const caso = cases[id];

  if (!caso) {
    console.error("Caso no encontrado:", id);
    return;
  }

  const modal = document.getElementById("caseModal");
  const contenido = document.getElementById("modalContent");

  if (!modal || !contenido) {
    console.error("No se encontró el modal.");
    return;
  }

  contenido.innerHTML = `
    <p class="modal-kicker">${caso.tag}</p>

    <h2 id="modalTitle">
      ${caso.title}
    </h2>

    <p>
      ${caso.intro}
    </p>

    <h3>
      Hechos confirmados
    </h3>

    <div class="evidence">

      ${caso.facts.map((pista, indice) => `
        <div>
          <strong>
            Pista ${String(indice + 1).padStart(2, "0")}
          </strong>

          <br>

          ${pista}
        </div>
      `).join("")}

    </div>

    <h3>
      Sospechosos y personas de interés
    </h3>

    <ol>
      ${caso.suspects.map(persona => `
        <li>
          ${persona}
        </li>
      `).join("")}
    </ol>

    <h3>
      Línea temporal
    </h3>

    <ul>
      ${caso.timeline.map(evento => `
        <li>
          ${evento}
        </li>
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
        La solución forma parte de la ficción del caso.
        Puedes volver a revisar las pistas y comprobar tu teoría.
      </p>

    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


/* =========================
   CERRAR EXPEDIENTE
========================= */

function cerrarCaso() {

  const modal = document.getElementById("caseModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


/* =========================
   BOTONES DE CASOS
========================= */

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".open-case").forEach(function (boton) {

    boton.addEventListener("click", function () {

      abrirCaso(this.dataset.case);

    });

  });


  /* =========================
     BOTÓN CERRAR
  ========================= */

  const botonCerrar = document.getElementById("modalClose");

  if (botonCerrar) {

    botonCerrar.addEventListener("click", cerrarCaso);

  }


  /* =========================
     FONDO DEL MODAL
  ========================= */

  const fondo = document.querySelector(".modal-backdrop");

  if (fondo) {

    fondo.addEventListener("click", cerrarCaso);

  }


  /* =========================
     TECLA ESC
  ========================= */

  document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

      cerrarCaso();

    }

  });


  /* =========================
     FILTROS
  ========================= */

  const filtros = document.querySelectorAll(".filter");

  filtros.forEach(function (boton) {

    boton.addEventListener("click", function () {

      filtros.forEach(function (otro) {

        otro.classList.remove("active");

      });

      boton.classList.add("active");

      const filtro = boton.dataset.filter;

      document.querySelectorAll(".case-card").forEach(function (tarjeta) {

        if (
          filtro === "todos" ||
          tarjeta.dataset.category === filtro
        ) {

          tarjeta.classList.remove("hidden");

        } else {

          tarjeta.classList.add("hidden");

        }

      });

    });

  });


  /* =========================
     MENÚ MÓVIL
  ========================= */

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

      nav.classList.toggle("open");

    });


    nav.querySelectorAll("a").forEach(function (enlace) {

      enlace.addEventListener("click", function () {

        nav.classList.remove("open");

      });

    });

  }

});
