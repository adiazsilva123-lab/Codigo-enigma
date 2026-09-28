/* =========================================================
   CÓDIGO ENIGMA - SCRIPT.JS
   Versión estable y completa
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const modal = document.getElementById("caseModal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const filters = document.querySelectorAll(".filter");
  const caseCards = document.querySelectorAll(".case-card");

  if (!modal || !modalContent) {
    console.error(
      "Código Enigma: faltan #caseModal o #modalContent en index.html"
    );
    return;
  }

  const casos = {

    1: {
      code: "CE-001",
      category: "HOMICIDIO",
      title: "Todos mienten",

      intro:
        "Sofía Herrera aparece sin vida en su apartamento. La puerta estaba cerrada, seis personas aseguran haber estado lejos del lugar y una llamada telefónica parece colocar a alguien en el sitio equivocado.",

      victim: "Sofía Herrera",
      date: "14 de marzo de 2026",
      place: "Apartamento 4A",
      difficulty: "Alta",

      story:
        "A las 22:18, la policía recibió una llamada desde el apartamento 4A. Sofía Herrera, de 31 años, fue encontrada sin vida en la sala. No había señales evidentes de entrada forzada. El edificio tenía cámaras en los pasillos y ascensores, pero una de las cámaras presentó una interrupción de varios minutos. Durante las primeras entrevistas, todos los sospechosos ofrecieron una explicación aparentemente coherente. El problema apareció cuando sus versiones comenzaron a compararse entre sí.",

      clues: [
        ["El reloj detenido", "El reloj de pared de la sala estaba detenido exactamente a las 21:52. No existe evidencia que demuestre que se detuvo durante el incidente."],
        ["La llamada de las 21:58", "El teléfono de Sofía registra una llamada entrante a las 21:58 que duró 47 segundos. La persona que llamó asegura que Sofía contestó personalmente."],
        ["La cadena de seguridad", "La puerta estaba cerrada y la cadena colocada. Sin embargo, la cadena podía colocarse desde el interior mientras la puerta permanecía parcialmente abierta."],
        ["La lluvia", "Había llovido desde las 20:40. Cerca del balcón se encontró una pequeña marca de humedad."],
        ["Dos marcas de lápiz labial", "Una taza tenía dos marcas diferentes de lápiz labial. Una coincidía con Sofía y la otra no había sido identificada."],
        ["El ascensor", "El ascensor registró un viaje hasta el cuarto piso a las 20:37."],
        ["La cámara", "La cámara del pasillo dejó de grabar entre las 20:35 y las 20:41. El sistema indica que la interrupción fue manual."],
        ["La nota", "Sobre el escritorio había una nota escrita a mano: 'No confíes en quien llegue primero'. No se pudo determinar cuándo fue escrita."],
        ["El recibo", "Un recibo de una cafetería cercana marca las 20:51. Fue encontrado dentro de una chaqueta perteneciente a uno de los sospechosos."],
        ["La batería", "El teléfono de Sofía tenía 18% de batería a las 22:18. El historial de llamadas no coincide perfectamente con el historial de la aplicación de mensajería."]
      ],

      suspects: [
        ["Mateo Ruiz", "Pareja de Sofía", "Afirma que salió del edificio a las 20:20 y que no volvió esa noche."],
        ["Laura Gómez", "Amiga cercana", "Reconoce haber visitado a Sofía esa tarde, pero asegura que abandonó el edificio antes de las 20:00."],
        ["Daniel Rojas", "Vecino del 4B", "Escuchó una discusión cerca de las 21:40 y afirma que no salió de su apartamento."],
        ["Camila Torres", "Compañera de trabajo", "Dice haber hablado con Sofía por teléfono a las 21:58."],
        ["Julián Pérez", "Repartidor", "Su vehículo aparece registrado cerca del edificio alrededor de las 20:50."],
        ["Valentina Cruz", "Vecina del edificio", "Asegura haber visto a una persona abandonar el edificio alrededor de las 21:10."]
      ],

      timeline: [
        ["19:10", "Sofía recibe una visita."],
        ["20:20", "Mateo asegura abandonar el edificio."],
        ["20:35", "La cámara deja de registrar."],
        ["20:37", "El ascensor registra un viaje al cuarto piso."],
        ["20:41", "La cámara vuelve a funcionar."],
        ["20:51", "Se registra el recibo de una cafetería."],
        ["21:10", "Una vecina asegura haber visto salir a alguien."],
        ["21:40", "Daniel afirma haber escuchado una discusión."],
        ["21:52", "El reloj de la sala aparece detenido."],
        ["21:58", "Sofía recibe una llamada."],
        ["22:18", "La policía recibe la llamada de emergencia."]
      ],

      quotes: [
        ["Yo salí mucho antes de que ocurriera cualquier cosa.", "Mateo Ruiz"],
        ["La escuché perfectamente. Era Sofía quien hablaba conmigo.", "Camila Torres"],
        ["No salí de mi apartamento en toda la noche.", "Daniel Rojas"],
        ["Vi a alguien bajar por las escaleras, pero no pude verle la cara.", "Valentina Cruz"]
      ],

      questions: [
        "¿Qué evidencia permite establecer una hora real del incidente?",
        "¿Puede la llamada de las 21:58 demostrar que Sofía seguía con vida?",
        "¿Quién pudo manipular las cámaras?",
        "¿Qué testimonios dependen de una hora que podría ser incorrecta?"
      ],

      solution:
        "La clave está en la cronología. El reloj detenido no demuestra la hora del incidente y una llamada telefónica tampoco demuestra necesariamente quién utilizó el teléfono. La interrupción manual de la cámara introduce una ventana crítica. La investigación debe comparar registros independientes y separar hechos comprobados de declaraciones."
    },

    2: {
      code: "CE-002",
      category: "DESAPARICIÓN",
      title: "La habitación 314",

      intro:
        "Tomás Vega desaparece de un hotel durante una tormenta. La tarjeta de su habitación registra un movimiento, el ascensor registra otro y una cámara deja de funcionar durante exactamente 43 segundos.",

      victim: "Tomás Vega",
      date: "22 de abril de 2026",
      place: "Hotel Mirador",
      difficulty: "Alta",

      story:
        "Tomás Vega había llegado al Hotel Mirador la tarde del 22 de abril. A las 06:30 de la mañana siguiente, su habitación fue encontrada vacía. Su equipaje seguía dentro y su teléfono estaba en una mochila. La noche estuvo marcada por una tormenta eléctrica que produjo varios problemas técnicos en el edificio.",

      clues: [
        ["La tarjeta de habitación", "La tarjeta asignada a la habitación 314 registra una apertura a las 02:14."],
        ["El ascensor", "El ascensor registra un viaje desde el tercer piso hasta el vestíbulo a las 02:17."],
        ["La cámara", "La cámara del pasillo dejó de registrar durante exactamente 43 segundos a las 02:18."],
        ["La ventana", "La ventana estaba cerrada y bloqueada desde el interior."],
        ["El teléfono", "El teléfono de Tomás permaneció dentro de una mochila durante toda la madrugada."],
        ["La llave maestra", "El registro de mantenimiento muestra que una llave maestra fue utilizada a las 02:09."],
        ["Sensor de movimiento", "El sensor del pasillo detectó movimiento a las 02:19."],
        ["La llamada interna", "Una llamada desde la extensión de recepción fue registrada a las 02:26."],
        ["La tormenta", "Una descarga eléctrica provocó pequeños cortes de energía en diferentes sistemas."],
        ["El vehículo", "Una cámara exterior captó un vehículo de mensajería después de las 02:30."]
      ],

      suspects: [
        ["Elena Vargas", "Recepcionista", "Trabajaba durante el turno nocturno y tenía acceso al sistema de tarjetas."],
        ["Marco Silva", "Huésped 316", "Asegura que no abandonó su habitación durante la tormenta."],
        ["Ricardo León", "Gerente nocturno", "Tenía acceso a las llaves maestras y a los registros técnicos."],
        ["Samuel Ortiz", "Mensajero", "Su vehículo aparece registrado cerca del hotel después de las 02:30."],
        ["Diego Vega", "Amigo de Tomás", "Sabía que Tomás estaba alojado en la habitación 314."]
      ],

      timeline: [
        ["01:50", "Tomás aparece por última vez en el registro del hotel."],
        ["02:09", "Se utiliza una llave maestra."],
        ["02:14", "Se registra la apertura de la habitación 314."],
        ["02:17", "El ascensor baja al vestíbulo."],
        ["02:18", "La cámara pierde señal."],
        ["02:19", "El sensor detecta movimiento."],
        ["02:26", "Se registra una llamada interna."],
        ["02:30", "La tormenta provoca otro corte parcial."],
        ["02:34", "Una cámara exterior registra un vehículo."],
        ["06:30", "El personal descubre la habitación vacía."]
      ],

      quotes: [
        ["La tarjeta de Tomás fue utilizada después de que él se retirara.", "Elena Vargas"],
        ["Durante la tormenta no vi a nadie salir.", "Marco Silva"],
        ["La llave maestra estaba bajo control del personal autorizado.", "Ricardo León"],
        ["Mi vehículo estuvo allí, pero no significa que yo entrara al hotel.", "Samuel Ortiz"]
      ],

      questions: [
        "¿Quién pudo utilizar la llave maestra a las 02:09?",
        "¿La apertura de la habitación a las 02:14 fue realizada por Tomás?",
        "¿Qué ocurrió durante los 43 segundos sin cámara?",
        "¿Qué registros deben compararse para reconstruir la secuencia?"
      ],

      solution:
        "La ventana crítica está entre las 02:09 y las 02:26. La llave maestra aparece antes que la tarjeta de habitación y la interrupción de cámara ocurre después. Ningún registro identifica por sí solo a una persona. Es necesario cruzar acceso, ascensor, sensores, cámaras y llamadas."
    },

    3: {
      code: "CE-003",
      category: "HOMICIDIO",
      title: "El último mensaje",

      intro:
        "Andrés León parece haber enviado un mensaje a las 22:04. Sin embargo, el ordenador desde el que se envió tenía el reloj adelantado once minutos.",

      victim: "Andrés León",
      date: "8 de mayo de 2026",
      place: "Estudio privado",
      difficulty: "Muy alta",

      story:
        "Andrés León trabajaba como periodista independiente. La noche del 8 de mayo fue encontrado sin vida en su estudio. Su ordenador estaba encendido y tenía abierta una aplicación de mensajería. Un mensaje enviado a las 22:04 parecía ser su última comunicación. La investigación informática reveló que el reloj del ordenador no estaba sincronizado correctamente.",

      clues: [
        ["El mensaje", "Un mensaje aparece registrado a las 22:04 desde la aplicación instalada en el ordenador."],
        ["El reloj", "El reloj del ordenador estaba adelantado exactamente 11 minutos."],
        ["El teléfono", "No existe un registro equivalente de envío desde el teléfono móvil de Andrés."],
        ["Las iniciales", "El mensaje termina con unas iniciales que Andrés utilizaba habitualmente."],
        ["La puerta", "La puerta principal estaba cerrada desde el exterior cuando llegó la policía."],
        ["El documento", "Un documento fue abierto en el ordenador a las 21:57 según el registro del sistema."],
        ["La cámara", "Una cámara cercana registra movimiento frente al edificio a las 20:44."],
        ["La discusión", "Un vecino asegura haber escuchado una discusión aproximadamente a las 21:40."],
        ["Actividad del teclado", "El sistema registra actividad del teclado a las 22:15, aunque el reloj estaba desfasado."],
        ["El archivo", "El último documento guardado contiene información que solamente unas pocas personas conocían."]
      ],

      suspects: [
        ["Natalia Pérez", "Editora", "Trabajaba directamente con Andrés y conocía parte del contenido del documento."],
        ["Fuente anónima", "Informante", "Había intercambiado mensajes con Andrés durante las semanas anteriores."],
        ["Carlos Méndez", "Vecino", "Escuchó la discusión, pero asegura no haber visto quién estaba dentro."],
        ["Jorge Salas", "Compañero", "Sabía que Andrés estaba preparando una publicación importante."],
        ["Marina León", "Familiar", "Conocía la rutina de Andrés y podía entrar al edificio."]
      ],

      timeline: [
        ["19:30", "Andrés llega al estudio."],
        ["20:44", "Una cámara registra movimiento frente al edificio."],
        ["21:40", "Un vecino escucha una discusión."],
        ["21:46", "Se modifica un documento."],
        ["21:57", "Se abre un archivo en el ordenador."],
        ["22:04", "El ordenador registra el envío del mensaje."],
        ["22:15", "Se registra actividad del teclado."],
        ["22:30", "Un vecino abandona el edificio."],
        ["23:10", "La policía llega al lugar."]
      ],

      quotes: [
        ["Ese mensaje sonaba exactamente como algo que él escribiría.", "Natalia Pérez"],
        ["Escuché dos voces, pero no pude distinguirlas.", "Carlos Méndez"],
        ["Andrés sabía que estaba trabajando en algo delicado.", "Jorge Salas"],
        ["Yo no utilicé su ordenador esa noche.", "Marina León"]
      ],

      questions: [
        "¿Cuál era la hora real del mensaje?",
        "¿Puede el estilo de escritura demostrar quién escribió algo?",
        "¿Quién conocía el contenido del documento?",
        "¿La actividad del ordenador demuestra presencia física?"
      ],

      solution:
        "El reloj del ordenador estaba adelantado 11 minutos. Primero hay que corregir las horas registradas por ese dispositivo. La actividad informática tampoco demuestra automáticamente quién estaba frente al ordenador. El investigador debe separar identidad digital, presencia física y contenido de los mensajes."
    },

    4: {
      code: "CE-004",
      category: "ROBO",
      title: "La vitrina vacía",

      intro:
        "Una pieza desaparece de la Galería San Jerónimo sin que la vitrina presente señales de haber sido forzada. Una fotografía tomada minutos antes contiene una reflexión inesperada.",

      victim: "Galería San Jerónimo",
      date: "19 de junio de 2026",
      place: "Sala principal",
      difficulty: "Alta",

      story:
        "La Galería San Jerónimo cerró sus puertas a las 19:30. A las 20:31, el personal descubrió que una pieza de colección había desaparecido. La vitrina seguía intacta. El sistema de alarma había sido desactivado y posteriormente activado de nuevo. Cuatro personas tenían diferentes niveles de acceso al edificio.",

      clues: [
        ["La alarma", "El sistema de alarma fue desactivado a las 19:42."],
        ["La vitrina", "La vitrina no presenta daños ni marcas visibles de manipulación."],
        ["El inventario", "El inventario digital fue modificado a las 20:03."],
        ["La fotografía", "Una fotografía tomada a las 19:55 muestra la vitrina y una pequeña reflexión en el cristal."],
        ["El guardia", "El guardia asegura que permaneció en recepción durante todo el cierre."],
        ["La cámara", "Una cámara fue parcialmente cubierta entre las 19:50 y las 20:07."],
        ["Tarjetas de acceso", "Dos tarjetas autorizadas registraron actividad después del cierre."],
        ["El embalaje", "En una zona de almacenamiento apareció material de embalaje del mismo tamaño que la pieza desaparecida."],
        ["El ruido", "El sistema de recepción registra un ruido fuerte en la sala principal a las 20:06."],
        ["La edición", "El inventario fue modificado exactamente siete minutos después de que la cámara fuera cubierta."]
      ],

      suspects: [
        ["Paula Herrera", "Curadora", "Tenía acceso autorizado a la colección y podía modificar el inventario."],
        ["Óscar Molina", "Guardia", "Conocía la ubicación de las cámaras y permanecía durante los cierres."],
        ["Iván Torres", "Restaurador", "Trabajaba con material de embalaje y tenía acceso a zonas restringidas."],
        ["Gabriel Ruiz", "Coleccionista", "Había mostrado interés particular por la pieza desaparecida."]
      ],

      timeline: [
        ["19:30", "La galería cierra al público."],
        ["19:42", "La alarma es desactivada."],
        ["19:50", "La cámara comienza a quedar parcialmente cubierta."],
        ["19:55", "Se toma la fotografía."],
        ["20:03", "El inventario es modificado."],
        ["20:06", "Se registra un ruido fuerte."],
        ["20:07", "La cámara vuelve a quedar despejada."],
        ["20:18", "El sistema de alarma vuelve a activarse."],
        ["20:31", "El personal descubre la vitrina vacía."]
      ],

      quotes: [
        ["Yo permanecí en recepción durante todo el cierre.", "Óscar Molina"],
        ["La modificación del inventario fue parte de un procedimiento normal.", "Paula Herrera"],
        ["El material de embalaje podía estar allí desde días antes.", "Iván Torres"],
        ["Que me interesara la pieza no significa que pudiera entrar.", "Gabriel Ruiz"]
      ],

      questions: [
        "¿Qué muestra realmente la reflexión de la fotografía?",
        "¿Quién podía desactivar la alarma?",
        "¿Qué importancia tiene la modificación del inventario?",
        "¿Por qué fue cubierta la cámara?"
      ],

      solution:
        "La investigación debe cruzar alarma, cámaras, tarjetas de acceso e inventario. La fotografía resulta importante porque permite analizar el espacio durante una ventana en la que la cámara estaba siendo manipulada. El inventario modificado después de la interrupción también puede revelar cuándo alguien intentó alterar la reconstrucción digital."
    },

    5: {
      code: "CE-005",
      category: "DESAPARICIÓN",
      title: "El tren de las 23:17",

      intro:
        "Un tren se detiene durante 54 segundos. Después de ese momento, una pasajera ya no aparece en los registros habituales de la estación.",

      victim: "Clara Méndez",
      date: "2 de julio de 2026",
      place: "Estación El Roble",
      difficulty: "Muy alta",

      story:
        "Clara Méndez abordó el tren de las 22:48 en la estación Central. Viajaba hacia El Roble. A las 23:17, el tren realizó una parada no programada de 54 segundos. Cuando llegó a la siguiente estación, Clara ya no estaba en el vagón. Su teléfono seguía conectado a la red ferroviaria durante varios minutos.",

      clues: [
        ["La salida", "El tren abandonó la estación Central a las 22:48."],
        ["La parada", "El tren se detuvo inesperadamente a las 23:17 durante 54 segundos."],
        ["El paraguas rojo", "Una cámara exterior registra a una persona con un paraguas rojo cerca de una puerta durante la parada."],
        ["El boleto", "El sistema registra dos validaciones asociadas al boleto de Clara."],
        ["El teléfono", "El teléfono de Clara mantuvo conexión con una antena ferroviaria después de la parada."],
        ["El audio", "Una grabación contiene ruido de una puerta abriéndose, pero el audio está incompleto."],
        ["La puerta", "Una de las puertas del tren registra una apertura durante la parada."],
        ["Los testigos", "Dos pasajeros aseguran haber visto a una mujer abandonar el vagón."],
        ["El reloj", "El reloj de la estación tenía un desfase de 37 segundos."],
        ["Las horas", "Los registros de pasajeros, cámaras y tren no utilizan exactamente la misma referencia horaria."]
      ],

      suspects: [
        ["Ricardo Salas", "Conductor", "Conocía los protocolos del tren y podía comunicarse con la estación."],
        ["Mónica Vera", "Supervisora", "Estaba coordinando operaciones esa noche."],
        ["Álvaro Cruz", "Pasajero", "Viajaba en el mismo vagón que Clara."],
        ["Esteban Ruiz", "Mantenimiento", "Trabajaba cerca de la zona donde ocurrió la parada."],
        ["Persona del paraguas rojo", "Identidad desconocida", "Aparece en una cámara exterior durante la ventana crítica."]
      ],

      timeline: [
        ["22:48", "El tren abandona la estación Central."],
        ["23:05", "Clara aparece en el registro interno del tren."],
        ["23:17", "El tren realiza una parada inesperada."],
        ["23:17:20", "Una puerta registra una apertura."],
        ["23:17:54", "El tren vuelve a moverse."],
        ["23:19", "El teléfono de Clara mantiene conexión."],
        ["23:26", "El tren llega a la siguiente estación."],
        ["23:31", "El personal nota la ausencia de Clara."],
        ["23:41", "Se revisan las cámaras."]
      ],

      quotes: [
        ["Vi a una mujer cerca de la puerta cuando el tren se detuvo.", "Álvaro Cruz"],
        ["La parada duró menos de un minuto.", "Ricardo Salas"],
        ["El sistema no registró ninguna evacuación autorizada.", "Mónica Vera"],
        ["Yo estaba trabajando en otra sección de la estación.", "Esteban Ruiz"]
      ],

      questions: [
        "¿Qué ocurrió realmente durante los 54 segundos?",
        "¿A quién pertenece el paraguas rojo?",
        "¿Por qué existen dos validaciones del boleto?",
        "¿Cómo debe corregirse el desfase de los relojes?"
      ],

      solution:
        "La parada de 54 segundos es la ventana principal de investigación. Antes de interpretar cámaras y registros, hay que corregir el desfase de 37 segundos del reloj de la estación y comparar las diferentes referencias horarias. La apertura de una puerta y la presencia de una persona en el exterior son datos relevantes, pero ninguno identifica por sí solo qué ocurrió con Clara."
    }
  };

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function crearExpediente(caso) {

    const pistas = caso.clues.map((pista, i) => `
      <article class="modal-section">
        <div class="section-number">
          ${String(i + 1).padStart(2, "0")}
        </div>

        <div>
          <h3>${escapeHTML(pista[0])}</h3>
          <p>${escapeHTML(pista[1])}</p>
        </div>
      </article>
    `).join("");

    const sospechosos = caso.suspects.map(s => `
      <article class="suspect-card">
        <span class="suspect-role">
          ${escapeHTML(s[1])}
        </span>

        <h3>
          ${escapeHTML(s[0])}
        </h3>

        <p>
          ${escapeHTML(s[2])}
        </p>
      </article>
    `).join("");

    const cronologia = caso.timeline.map(e => `
      <li>
        <strong>${escapeHTML(e[0])}</strong>
        <span>${escapeHTML(e[1])}</span>
      </li>
    `).join("");

    const declaraciones = caso.quotes.map(q => `
      <blockquote>
        <p>“${escapeHTML(q[0])}”</p>
        <cite>${escapeHTML(q[1])}</cite>
      </blockquote>
    `).join("");

    const preguntas = caso.questions.map(q =>
      `<li>${escapeHTML(q)}</li>`
    ).join("");

    return `
      <header class="case-head">

        <div class="case-head-top">

          <div>
            <span class="eyebrow">
              EXPEDIENTE ${escapeHTML(caso.code)}
            </span>

            <span class="case-category">
              ${escapeHTML(caso.category)}
            </span>
          </div>

          <span class="case-difficulty">
            DIFICULTAD · ${escapeHTML(caso.difficulty)}
          </span>

        </div>

        <h2 id="modalTitle">
          ${escapeHTML(caso.title)}
        </h2>

        <p class="case-intro">
          ${escapeHTML(caso.intro)}
        </p>

        <div class="case-info">

          <div>
            <span>PERSONA / OBJETIVO</span>
            <strong>${escapeHTML(caso.victim)}</strong>
          </div>

          <div>
            <span>FECHA</span>
            <strong>${escapeHTML(caso.date)}</strong>
          </div>

          <div>
            <span>LUGAR</span>
            <strong>${escapeHTML(caso.place)}</strong>
          </div>

          <div>
            <span>DIFICULTAD</span>
            <strong>${escapeHTML(caso.difficulty)}</strong>
          </div>

        </div>

      </header>

      <div class="case-body">

        <section class="modal-story">

          <span class="eyebrow">
            CONTEXTO DEL CASO
          </span>

          <h3>
            Lo que sabemos
          </h3>

          <p>
            ${escapeHTML(caso.story)}
          </p>

        </section>

        <section>

          <div class="section-title">
            <span class="eyebrow">EVIDENCIA</span>
            <h3>Pistas encontradas</h3>
          </div>

          <div class="clue-list">
            ${pistas}
          </div>

        </section>

        <section>

          <div class="section-title">
            <span class="eyebrow">INVESTIGACIÓN</span>
            <h3>Personas relacionadas</h3>
          </div>

          <div class="suspect-list">
            ${sospechosos}
          </div>

        </section>

        <section>

          <div class="section-title">
            <span class="eyebrow">CRONOLOGÍA</span>
            <h3>Línea temporal</h3>
          </div>

          <ol class="timeline-list">
            ${cronologia}
          </ol>

        </section>

        <section>

          <div class="section-title">
            <span class="eyebrow">DECLARACIONES</span>
            <h3>Lo que dijeron</h3>
          </div>

          <div class="quotes-list">
            ${declaraciones}
          </div>

        </section>

        <section>

          <div class="section-title">
            <span class="eyebrow">PARA EL INVESTIGADOR</span>
            <h3>Preguntas clave</h3>
          </div>

          <ol class="questions-list">
            ${preguntas}
          </ol>

        </section>

        <section class="solution-area">

          <button
            type="button"
            class="solution-toggle">
            🔐 Revelar reconstrucción
          </button>

          <div class="solution-box">

            <span class="eyebrow">
              RECONSTRUCCIÓN DEL EXPEDIENTE
            </span>

            <p>
              ${escapeHTML(caso.solution)}
            </p>

          </div>

        </section>

      </div>
    `;
  }

  function abrirCaso(numero) {

    const caso = casos[String(numero)];

    if (!caso) {
      console.error(
        "Código Enigma: caso inexistente",
        numero
      );
      return;
    }

    modalContent.innerHTML = crearExpediente(caso);

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add(
      "modal-open",
      "lock"
    );

    document.body.style.overflow = "hidden";

    const panel = modal.querySelector(".modal-panel");

    if (panel) {
      panel.scrollTop = 0;
    }
  }

  function cerrarModal() {

    modal.classList.remove("open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open",
      "lock"
    );

    document.body.style.overflow = "";
  }


  /* =======================================================
     ABRIR EXPEDIENTE
     ======================================================= */

  document.addEventListener("click", event => {

    const boton = event.target.closest(".open-case");

    if (!boton) {
      return;
    }

    event.preventDefault();

    abrirCaso(
      boton.dataset.case
    );
  });


  /* =======================================================
     CERRAR CON X
     ======================================================= */

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      event => {

        event.preventDefault();

        cerrarModal();
      }
    );
  }


  /* =======================================================
     CERRAR TOCANDO EL FONDO
     ======================================================= */

  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal ||
        event.target.closest(".modal-backdrop")
      ) {

        cerrarModal();
      }
    }
  );


  /* =======================================================
     CERRAR CON ESC
     ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("open")
      ) {

        cerrarModal();
      }
    }
  );


  /* =======================================================
     REVELAR SOLUCIÓN
     ======================================================= */

  document.addEventListener(
    "click",
    event => {

      const boton =
        event.target.closest(".solution-toggle");

      if (!boton) {
        return;
      }

      const caja =
        boton.nextElementSibling;

      if (!caja) {
        return;
      }

      const visible =
        caja.classList.toggle("visible");

      caja.style.display =
        visible ? "block" : "none";

      boton.textContent =
        visible
          ? "🔓 Ocultar reconstrucción"
          : "🔐 Revelar reconstrucción";
    }
  );


  /* =======================================================
     FILTROS
     ======================================================= */

  filters.forEach(filter => {

    filter.addEventListener(
      "click",
      () => {

        const categoria =
          filter.dataset.category;

        filters.forEach(f => {
          f.classList.remove("active");
        });

        filter.classList.add("active");

        caseCards.forEach(card => {

          const mostrar =
            categoria === "all" ||
            card.dataset.category === categoria;

          card.style.display =
            mostrar ? "" : "none";
        });
      }
    );
  });


  /* =======================================================
     MENÚ MÓVIL
     ======================================================= */

  if (menuToggle && mainNav) {

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.addEventListener(
      "click",
      () => {

        const abierto =
          mainNav.classList.toggle("open");

        menuToggle.setAttribute(
          "aria-expanded",
          abierto ? "true" : "false"
        );
      }
    );

    mainNav
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );
          }
        );
      });
  }


  console.log(
    "Código Enigma cargado correctamente. Casos: 5"
  );

});
