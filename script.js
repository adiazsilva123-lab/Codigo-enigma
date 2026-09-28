/* =========================================================
   CÓDIGO ENIGMA
   SCRIPT.JS
   Versión estable
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  console.log("Código Enigma: script cargado correctamente");

  /* =======================================================
     ELEMENTOS PRINCIPALES
     ======================================================= */

  const modal = document.getElementById("caseModal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  const filters = document.querySelectorAll(".filter");
  const caseCards = document.querySelectorAll(".case-card");


  /* =======================================================
     CASOS
     ======================================================= */

  const casos = {

    /* =====================================================
       CASO 1
       ===================================================== */

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
        {
          title: "El reloj detenido",
          text:
            "El reloj de pared de la sala estaba detenido exactamente a las 21:52. No existe evidencia que demuestre que se detuvo durante el incidente."
        },
        {
          title: "La llamada de las 21:58",
          text:
            "El teléfono de Sofía registra una llamada entrante a las 21:58 que duró 47 segundos. La persona que llamó asegura que Sofía contestó personalmente."
        },
        {
          title: "La cadena de seguridad",
          text:
            "La puerta estaba cerrada y la cadena colocada. Sin embargo, la cadena podía colocarse desde el interior mientras la puerta permanecía parcialmente abierta."
        },
        {
          title: "La lluvia",
          text:
            "Había llovido desde las 20:40. Cerca del balcón se encontró una pequeña marca de humedad."
        },
        {
          title: "Dos marcas de lápiz labial",
          text:
            "Una taza tenía dos marcas diferentes de lápiz labial. Una coincidía con Sofía y la otra no había sido identificada."
        },
        {
          title: "El ascensor",
          text:
            "El ascensor registró un viaje hasta el cuarto piso a las 20:37."
        },
        {
          title: "La cámara",
          text:
            "La cámara del pasillo dejó de grabar entre las 20:35 y las 20:41. El sistema indica que la interrupción fue manual."
        },
        {
          title: "La nota",
          text:
            "Sobre el escritorio había una nota escrita a mano: 'No confíes en quien llegue primero'. No se pudo determinar cuándo fue escrita."
        },
        {
          title: "El recibo",
          text:
            "Un recibo de una cafetería cercana marca las 20:51. Fue encontrado dentro de una chaqueta perteneciente a uno de los sospechosos."
        },
        {
          title: "La batería",
          text:
            "El teléfono de Sofía tenía 18% de batería a las 22:18. El historial de llamadas no coincide perfectamente con el historial de la aplicación de mensajería."
        }
      ],

      suspects: [
        {
          name: "Mateo Ruiz",
          role: "Pareja de Sofía",
          text:
            "Afirma que salió del edificio a las 20:20 y que no volvió esa noche."
        },
        {
          name: "Laura Gómez",
          role: "Amiga cercana",
          text:
            "Reconoce haber visitado a Sofía esa tarde, pero asegura que abandonó el edificio antes de las 20:00."
        },
        {
          name: "Daniel Rojas",
          role: "Vecino del 4B",
          text:
            "Escuchó una discusión cerca de las 21:40 y afirma que no salió de su apartamento."
        },
        {
          name: "Camila Torres",
          role: "Compañera de trabajo",
          text:
            "Dice haber hablado con Sofía por teléfono a las 21:58."
        },
        {
          name: "Julián Pérez",
          role: "Repartidor",
          text:
            "Su vehículo aparece registrado cerca del edificio alrededor de las 20:50."
        },
        {
          name: "Valentina Cruz",
          role: "Vecina del edificio",
          text:
            "Asegura haber visto a una persona abandonar el edificio alrededor de las 21:10."
        }
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


    /* =====================================================
       CASO 2
       ===================================================== */

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
        {
          title: "La tarjeta de habitación",
          text:
            "La tarjeta asignada a la habitación 314 registra una apertura a las 02:14."
        },
        {
          title: "El ascensor",
          text:
            "El ascensor registra un viaje desde el tercer piso hasta el vestíbulo a las 02:17."
        },
        {
          title: "La cámara",
          text:
            "La cámara del pasillo dejó de registrar durante exactamente 43 segundos a las 02:18."
        },
        {
          title: "La ventana",
          text:
            "La ventana estaba cerrada y bloqueada desde el interior."
        },
        {
          title: "El teléfono",
          text:
            "El teléfono de Tomás permaneció dentro de una mochila durante toda la madrugada."
        },
        {
          title: "La llave maestra",
          text:
            "El registro de mantenimiento muestra que una llave maestra fue utilizada a las 02:09."
        },
        {
          title: "Sensor de movimiento",
          text:
            "El sensor del pasillo detectó movimiento a las 02:19."
        },
        {
          title: "La llamada interna",
          text:
            "Una llamada desde la extensión de recepción fue registrada a las 02:26."
        },
        {
          title: "La tormenta",
          text:
            "Una descarga eléctrica provocó pequeños cortes de energía en diferentes sistemas."
        },
        {
          title: "El vehículo",
          text:
            "Una cámara exterior captó un vehículo de mensajería después de las 02:30."
        }
      ],

      suspects: [
        {
          name: "Elena Vargas",
          role: "Recepcionista",
          text:
            "Trabajaba durante el turno nocturno y tenía acceso al sistema de tarjetas."
        },
        {
          name: "Marco Silva",
          role: "Huésped 316",
          text:
            "Asegura que no abandonó su habitación durante la tormenta."
        },
        {
          name: "Ricardo León",
          role: "Gerente nocturno",
          text:
            "Tenía acceso a las llaves maestras y a los registros técnicos."
        },
        {
          name: "Samuel Ortiz",
          role: "Mensajero",
          text:
            "Su vehículo aparece registrado cerca del hotel después de las 02:30."
        },
        {
          name: "Diego Vega",
          role: "Amigo de Tomás",
          text:
            "Sabía que Tomás estaba alojado en la habitación 314."
        }
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


    /* =====================================================
       CASO 3
       ===================================================== */

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
        "Andrés León trabajaba como periodista independiente. La noche del 8 de mayo fue encontrado sin vida en su estudio. Su ordenador estaba encendido y tenía abierta una aplicación de mensajería. Un mensaje enviado a las 22:04 parecía ser su última comunicación.",

      clues: [
        {
          title: "El mensaje",
          text:
            "Un mensaje aparece registrado a las 22:04 desde la aplicación instalada en el ordenador."
        },
        {
          title: "El reloj",
          text:
            "El reloj del ordenador estaba adelantado exactamente 11 minutos."
        },
        {
          title: "El teléfono",
          text:
            "No existe un registro equivalente de envío desde el teléfono móvil de Andrés."
        },
        {
          title: "Las iniciales",
          text:
            "El mensaje termina con unas iniciales que Andrés utilizaba habitualmente."
        },
        {
          title: "La puerta",
          text:
            "La puerta principal estaba cerrada desde el exterior cuando llegó la policía."
        },
        {
          title: "El documento",
          text:
            "Un documento fue abierto en el ordenador a las 21:57 según el registro del sistema."
        },
        {
          title: "La cámara",
          text:
            "Una cámara cercana registra movimiento frente al edificio a las 20:44."
        },
        {
          title: "La discusión",
          text:
            "Un vecino asegura haber escuchado una discusión aproximadamente a las 21:40."
        },
        {
          title: "Actividad del teclado",
          text:
            "El sistema registra actividad del teclado a las 22:15, aunque el reloj estaba desfasado."
        },
        {
          title: "El archivo",
          text:
            "El último documento guardado contiene información que solamente unas pocas personas conocían."
        }
      ],

      suspects: [
        {
          name: "Natalia Pérez",
          role: "Editora",
          text:
            "Trabajaba directamente con Andrés y conocía parte del contenido del documento."
        },
        {
          name: "Fuente anónima",
          role: "Informante",
          text:
            "Había intercambiado mensajes con Andrés durante las semanas anteriores."
        },
        {
          name: "Carlos Méndez",
          role: "Vecino",
          text:
            "Escuchó la discusión, pero asegura no haber visto quién estaba dentro."
        },
        {
          name: "Jorge Salas",
          role: "Compañero",
          text:
            "Sabía que Andrés estaba preparando una publicación importante."
        },
        {
          name: "Marina León",
          role: "Familiar",
          text:
            "Conocía la rutina de Andrés y podía entrar al edificio."
        }
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


    /* =====================================================
       CASO 4
       ===================================================== */

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
        {
          title: "La alarma",
          text:
            "El sistema de alarma fue desactivado a las 19:42."
        },
        {
          title: "La vitrina",
          text:
            "La vitrina no presenta daños ni marcas visibles de manipulación."
        },
        {
          title: "El inventario",
          text:
            "El inventario digital fue modificado a las 20:03."
        },
        {
          title: "La fotografía",
          text:
            "Una fotografía tomada a las 19:55 muestra la vitrina y una pequeña reflexión en el cristal."
        },
        {
          title: "El guardia",
          text:
            "El guardia asegura que permaneció en recepción durante todo el cierre."
        },
        {
          title: "La cámara",
          text:
            "Una cámara fue parcialmente cubierta entre las 19:50 y las 20:07."
        },
        {
          title: "Tarjetas de acceso",
          text:
            "Dos tarjetas autorizadas registraron actividad después del cierre."
        },
        {
          title: "El embalaje",
          text:
            "En una zona de almacenamiento apareció material de embalaje del mismo tamaño que la pieza desaparecida."
        },
        {
          title: "El ruido",
          text:
            "El sistema de recepción registra un ruido fuerte en la sala principal a las 20:06."
        },
        {
          title: "La edición",
          text:
            "El inventario fue modificado exactamente siete minutos después de que la cámara fuera cubierta."
        }
      ],

      suspects: [
        {
          name: "Paula Herrera",
          role: "Curadora",
          text:
            "Tenía acceso autorizado a la colección y podía modificar el inventario."
        },
        {
          name: "Óscar Molina",
          role: "Guardia",
          text:
            "Conocía la ubicación de las cámaras y permanecía durante los cierres."
        
