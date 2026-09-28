const cases = {

  caso1: {
    category: "HOMICIDIO",
    title: "Todos mienten",
    intro:
      "Laura Méndez, de 34 años, es encontrada sin vida en su apartamento a las 22:40. La puerta principal estaba cerrada y no había señales claras de entrada forzada. Durante las horas anteriores, seis personas tuvieron contacto con ella o estuvieron cerca del edificio.",

    facts: [
      "La víctima fue encontrada en la sala de su apartamento.",
      "El teléfono de Laura estaba sobre la mesa.",
      "Una taza de café todavía estaba caliente.",
      "El reloj de pared estaba detenido a las 21:17.",
      "No había señales de que faltaran objetos de gran valor."
    ],

    suspects: [
      "<strong>Daniel:</strong> ex pareja de Laura. Afirma que se fue del edificio a las 20:30.",
      "<strong>Marina:</strong> vecina del apartamento 315. Dice haber escuchado una discusión a las 21:00.",
      "<strong>Julián:</strong> compañero de trabajo. Asegura que habló con Laura por teléfono a las 21:35.",
      "<strong>Claudia:</strong> hermana de la víctima. Afirma que nunca estuvo en el edificio esa noche.",
      "<strong>Raúl:</strong> encargado de seguridad. Dice que nadie entró después de las 20:00.",
      "<strong>Esteban:</strong> amigo de Laura. Asegura que recibió un mensaje de ella a las 22:05."
    ],

    timeline: [
      "<strong>20:00:</strong> Raúl registra la última entrada conocida.",
      "<strong>20:30:</strong> Daniel afirma haber abandonado el edificio.",
      "<strong>21:00:</strong> Marina escucha una discusión.",
      "<strong>21:17:</strong> el reloj de la sala queda detenido.",
      "<strong>21:35:</strong> Julián asegura haber hablado con Laura.",
      "<strong>22:05:</strong> Esteban recibe un mensaje.",
      "<strong>22:40:</strong> se descubre el cuerpo."
    ],

    solution:
      "La contradicción principal está en los tiempos. La declaración de Julián es incompatible con la evidencia de la escena. El teléfono de Laura estaba sobre la mesa y no existe registro que confirme una llamada a las 21:35. La pista más importante es comparar los testimonios con los objetos y registros físicos, en lugar de aceptar las declaraciones como hechos."
  },


  caso2: {
    category: "DESAPARICIÓN",
    title: "La habitación 314",
    intro:
      "Andrés Salazar desaparece durante una noche de tormenta mientras se hospedaba en el Hotel Central. Su habitación estaba registrada como ocupada y la puerta no mostraba señales de haber sido forzada.",

    facts: [
      "La habitación 314 fue registrada a nombre de Andrés.",
      "La tarjeta de acceso fue utilizada a las 22:18.",
      "Una cámara del pasillo dejó de grabar durante varios minutos.",
      "La ventana estaba cerrada desde el interior.",
      "La maleta de Andrés permanecía dentro de la habitación."
    ],

    suspects: [
      "<strong>Elena:</strong> recepcionista del turno nocturno.",
      "<strong>Tomás:</strong> huésped de la habitación 312.",
      "<strong>Gabriel:</strong> encargado de mantenimiento.",
      "<strong>Rosa:</strong> amiga de Andrés.",
      "<strong>Víctor:</strong> administrador del hotel."
    ],

    timeline: [
      "<strong>21:45:</strong> Andrés entra al hotel.",
      "<strong>22:00:</strong> sube hacia el tercer piso.",
      "<strong>22:18:</strong> se utiliza una tarjeta en la habitación 314.",
      "<strong>22:21:</strong> la cámara del pasillo deja de registrar imagen.",
      "<strong>22:27:</strong> vuelve la señal de la cámara.",
      "<strong>23:10:</strong> Rosa pregunta por Andrés en recepción."
    ],

    solution:
      "La pista central es la combinación entre el registro de la tarjeta y la interrupción de la cámara. Una persona pudo acceder a la habitación durante el intervalo en que el sistema dejó de registrar imágenes. El caso queda construido alrededor de esa ventana de tiempo, mientras que la maleta y la ventana permiten descartar algunas hipótesis iniciales."
  },


  caso3: {
    category: "HOMICIDIO",
    title: "El último mensaje",
    intro:
      "El periodista Nicolás Vega aparece muerto en su estudio. Horas antes había informado a sus compañeros que estaba investigando una historia delicada. Su teléfono contiene un mensaje aparentemente enviado después de su muerte.",

    facts: [
      "El cuerpo fue encontrado a las 23:20.",
      "El informe inicial sitúa la muerte alrededor de las 22:30.",
      "El teléfono estaba desbloqueado.",
      "Se encontró un mensaje enviado a las 22:52.",
      "El ordenador permanecía encendido."
    ],

    suspects: [
      "<strong>Paula:</strong> editora del periódico.",
      "<strong>Mateo:</strong> fotógrafo que trabajaba con Nicolás.",
      "<strong>Sergio:</strong> fuente de una investigación.",
      "<strong>Valentina:</strong> vecina del edificio.",
      "<strong>Óscar:</strong> antiguo compañero de trabajo."
    ],

    timeline: [
      "<strong>21:50:</strong> Nicolás llega a su estudio.",
      "<strong>22:10:</strong> realiza una llamada.",
      "<strong>22:30:</strong> hora aproximada de muerte.",
      "<strong>22:52:</strong> aparece enviado el último mensaje.",
      "<strong>23:20:</strong> encuentran el cuerpo."
    ],

    solution:
      "El mensaje de las 22:52 es una pista importante porque aparece después de la hora estimada de muerte. Sin embargo, que un mensaje aparezca enviado a determinada hora no demuestra por sí solo quién lo escribió. El teléfono, el ordenador y los registros digitales deben analizarse conjuntamente."
  },


  caso4: {
    category: "ROBO",
    title: "La vitrina vacía",
    intro:
      "Una pequeña galería privada descubre que una pieza histórica ha desaparecido de una vitrina. El sistema de seguridad no registró una alarma y cuatro personas tuvieron acceso al edificio durante el día.",

    facts: [
      "La pieza desaparecida estaba dentro de una vitrina cerrada.",
      "No había cristales rotos.",
      "El inventario fue revisado esa misma mañana.",
      "Una cámara apunta directamente hacia la vitrina.",
      "Durante 11 minutos la cámara mostró una imagen congelada."
    ],

    suspects: [
      "<strong>Adriana:</strong> directora de la galería.",
      "<strong>Bruno:</strong> encargado de seguridad.",
      "<strong>Camila:</strong> restauradora.",
      "<strong>Diego:</strong> técnico encargado del sistema de cámaras."
    ],

    timeline: [
      "<strong>09:00:</strong> se revisa el inventario.",
      "<strong>10:30:</strong> llega Camila.",
      "<strong>11:15:</strong> Diego revisa las cámaras.",
      "<strong>12:04:</strong> aparece la interrupción de imagen.",
      "<strong>12:15:</strong> vuelve la grabación normal.",
      "<strong>16:40:</strong> se descubre la desaparición."
    ],

    solution:
      "La anomalía más importante es la interrupción de la cámara durante 11 minutos. El robo no requiere romper la vitrina si alguien con acceso autorizado pudo abrirla. La investigación debe centrarse en quién tenía acceso, quién conocía el funcionamiento del sistema y quién estuvo presente durante ese intervalo."
  },


  caso5: {
    category: "DESAPARICIÓN",
    title: "El tren de las 23:17",
    intro:
      "Una pasajera llamada Elena Ruiz desaparece después de abordar un tren nocturno. Según el registro, el tren debía continuar directamente hasta su destino, pero una cámara registra una parada inesperada.",

    facts: [
      "Elena compró el boleto a las 20:12.",
      "El tren salió a las 22:40.",
      "Una cámara registra a Elena dentro del vagón.",
      "El tren aparece detenido durante varios minutos.",
      "El registro oficial no menciona una parada en ese punto."
    ],

    suspects: [
      "<strong>Héctor:</strong> conductor del tren.",
      "<strong>Lucía:</strong> pasajera del mismo vagón.",
      "<strong>Mario:</strong> trabajador de mantenimiento.",
      "<strong>Nora:</strong> persona que esperaba en una estación cercana.",
      "<strong>Samuel:</strong> acompañante que había hablado con Elena antes del viaje."
    ],

    timeline: [
      "<strong>20:12:</strong> Elena compra el boleto.",
      "<strong>22:40:</strong> sale el tren.",
      "<strong>23:05:</strong> Elena aparece en la cámara del vagón.",
      "<strong>23:17:</strong> el sistema registra una parada.",
      "<strong>23:23:</strong> el tren vuelve a desplazarse.",
      "<strong>00:10:</strong> Elena no aparece en el destino final."
    ],

    solution:
      "La parada de las 23:17 es la pieza que permite reconstruir el caso. El registro oficial y la grabación no cuentan exactamente la misma historia. La investigación debe determinar por qué el tren se detuvo, quién tenía conocimiento de esa parada y qué ocurrió durante esos seis minutos."
  }

};



const modal = document.getElementById("caseModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");



function createList(items, className) {

  return `
    <ul class="${className}">
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

}



function openCase(caseId) {

  const currentCase = cases[caseId];

  if (!currentCase) {
    return;
  }

  modalContent.innerHTML = `

    <p class="eyebrow">
      EXPEDIENTE · ${currentCase.category}
    </p>

    <h2 class="modal-title">
      ${currentCase.title}
    </h2>

    <p class="modal-intro">
      ${currentCase.intro}
    </p>


    <div class="modal-section">

      <h3>
        Hechos confirmados
      </h3>

      ${createList(currentCase.facts, "clue-list")}

    </div>


    <div class="modal-section">

      <h3>
        Sospechosos
      </h3>

      ${createList(currentCase.suspects, "suspect-list")}

    </div>


    <div class="modal-section">

      <h3>
        Línea de tiempo
      </h3>

      ${createList(currentCase.timeline, "timeline-list")}

    </div>


    <div class="solution-box">

      <h3>
        🔎 Análisis del expediente
      </h3>

      <p>
        ${currentCase.solution}
      </p>

    </div>

  `;


  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  modalClose.focus();

}



function closeCase() {

  modal.classList.remove("show");

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

}



document.querySelectorAll(".open-case").forEach(button => {

  button.addEventListener("click", () => {

    const caseId = button.dataset.case;

    openCase(caseId);

  });

});



modalClose.addEventListener("click", closeCase);



document.querySelector(".modal-backdrop").addEventListener(
  "click",
  closeCase
);



document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeCase();

  }

});



const filters = document.querySelectorAll(".filter");

const caseCards = document.querySelectorAll(".case-card");



filters.forEach(filter => {

  filter.addEventListener("click", () => {

    const selected = filter.dataset.filter;


    filters.forEach(item => {

      item.classList.remove("active");

    });


    filter.classList.add("active");


    caseCards.forEach(card => {

      const category = card.dataset.category;


      if (
        selected === "todos" ||
        category === selected
      ) {

        card.classList.remove("hidden");

      } else {

        card.classList.add("hidden");

      }

    });

  });

});



const menuBtn = document.getElementById("menuBtn");

const mainNav = document.getElementById("mainNav");



menuBtn.addEventListener("click", () => {

  mainNav.classList.toggle("open");

});



mainNav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("open");

  });

});



window.addEventListener("resize", () => {

  if (window.innerWidth > 950) {

    mainNav.classList.remove("open");

  }

});
