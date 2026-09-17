function openCase() {

    const cases = document.getElementById("casos");
    const expediente = document.getElementById("expediente");

    cases.classList.add("hidden");
    expediente.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function closeCase() {

    const cases = document.getElementById("casos");
    const expediente = document.getElementById("expediente");

    expediente.classList.add("hidden");
    cases.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSuspect(name) {

    const suspects = {

        daniel: {
            name: "Daniel Rojas",
            text: "Exnovio de Sofía. Afirma que terminó su relación con ella tres meses antes del asesinato. Dice que esa noche estuvo en un bar hasta las 23:00."
        },

        laura: {
            name: "Laura Gómez",
            text: "Mejor amiga de Sofía. Afirma que habló con ella por teléfono a las 21:20 y después se quedó en casa."
        },

        mateo: {
            name: "Mateo Ruiz",
            text: "Vecino del apartamento 406. Afirma que nunca salió de su apartamento esa noche."
        },

        camila: {
            name: "Camila Torres",
            text: "Compañera de trabajo. Dice que tuvo una discusión con Sofía esa tarde, pero asegura que no volvió a verla."
        },

        andres: {
            name: "Andrés Silva",
            text: "Socio de negocios de Sofía. Afirma que estaba viajando y que no llegó a la ciudad hasta la madrugada."
        },

        valentina: {
            name: "Valentina Cruz",
            text: "Hermana de Sofía. Dice que tuvo una discusión familiar con ella esa mañana, pero que posteriormente no volvieron a hablar."
        }

    };

    const suspect = suspects[name];

    alert(
        "EXPEDIENTE: " +
        suspect.name +
        "\n\n" +
        suspect.text
    );
}


function accuse(person) {

    const result = document.getElementById("result");
    const title = document.getElementById("result-title");
    const text = document.getElementById("result-text");

    result.classList.remove("hidden");

    if (person === "Mateo Ruiz") {

        title.textContent = "¡HAS RESUELTO EL CASO!";

        text.textContent =
            "Tu acusación coincide con la solución del expediente.";

    } else {

        title.textContent = "ACUSACIÓN INCORRECTA";

        text.textContent =
            "Las pruebas del expediente apuntaban hacia otra persona. Revisa nuevamente las pistas.";

    }

    result.scrollIntoView({
        behavior: "smooth"
    });
      }
