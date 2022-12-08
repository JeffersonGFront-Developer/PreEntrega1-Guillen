// Simulador de Cita medica

function mostrarOpciones() {
    const opciones = ["Consulta general", "Consulta de especialista", "Exámenes de laboratorio", "Procedimientos médicos"];
    for (let i = 0; i < opciones.length; i++) {
       console.log(`${i + 1}. ${opciones[i]}`);
    }
}

function agendarCita() {
    const opciones = ["1.Consulta general", "2.Consulta de especialista", "3.Exámenes de laboratorio", "4.Procedimientos médicos"];

    let seleccion;
    do {
        seleccion = prompt(`Por favor seleccione una opción utilizando el número correspondiente:\n ${opciones.join(",\n ")}`);
        if (isNaN(seleccion)) {
            alert("Debe ingresar un valor numérico válido.");
        } else if (seleccion > opciones.length) {
            alert("Debe seleccionar una opción válida.");
        }
    } while (isNaN(seleccion) || seleccion > opciones.length);

    const cita = {
        opcion: opciones[seleccion - 1],
        fecha: "30/12/2022"
    }

    return cita;
}

function verificarPago(cita, pago) {
    if (pago) {
        const nuevaFecha = prompt("¿Desea adelantar su cita? Ingrese una nueva fecha (dd/mm/yyyy):");
        cita.fecha = nuevaFecha;
        alert("Su cita ha sido adelantada exitosamente.");
    } else {
       alert("No es posible adelantar su cita ya que no ha realizado el pago correspondiente.");
    }
}

mostrarOpciones();
const cita = agendarCita();
alert(`Su cita médica ha sido agendada para el día ${cita.fecha} con el tipo de consulta: ${cita.opcion}`);

const pagoRealizado = confirm("¿Ha realizado el pago correspondiente?");
verificarPago(cita, pagoRealizado);

alert(`Su cita médica definitiva es para el día ${cita.fecha} con el tipo de consulta: ${cita.opcion}`);