
const cancelarReserva = (event) => {

}

const calcularNumeroNoches = (fechaEntrada, fechaSalida) => {
    const totalMiliSegundos = fechaSalida.getTime() - fechaEntrada.getTime()

    const totalNoches = Math.ceil(totalMiliSegundos / (1000 * 60 * 60 * 24))

    return totalNoches;
}

const agregarReserva = (event) => {

    const PRECIO = 50;

    const nombre = event.inputNombre.value;
    const email = event.inputEmail.value;
    const telefono = event.inputTelefono.value;
    const fechaEntrada = event.inputFechaEntrada.value;
    const fechaSalida = event.inputFechaSalida;
    const nPersonas = event.inputPersonas;


    //calculo de cantidad de noches
    const nNoches = calcularNumeroNoches(fechaEntrada, fechaSalida);
    //calculos de reserva
    const total = PRECIO * nNoches * nPersonas;

    const listaReservas = document.getElementById("listaReservas");


}



