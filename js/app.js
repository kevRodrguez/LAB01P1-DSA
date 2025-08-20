
const cancelarReserva = (event) => {
    const btnCancelar = event.currentTarget;

    btnCancelar.parentElement.parentElement.remove()
}

const calcularNumeroNoches = (fechaEntrada, fechaSalida) => {
    const totalMiliSegundos = fechaSalida.getTime() - fechaEntrada.getTime()

    const totalNoches = Math.ceil(totalMiliSegundos / (1000 * 60 * 60 * 24))

    return totalNoches;
}

const mostrarEstadisticas = (nNoches, total) => {
    const txtNumeroNoches = document.getElementById("txtNumeroNoches");

    const txtTotalReserva = document.getElementById("txtTotalReserva")

    txtNumeroNoches.innerText = "Noches: " + nNoches;
    txtTotalReserva.innerText = "Total: " + total;
}

const agregarReserva = (event) => {


    //establece precio por defecto
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

    console.log(`${nombre}   ${email}   ${telefono}   ${fechaEntrada}  ${fechaSalida}  ${nPersonas}`)

    //añadimos reserva

    listaReservas.innerHTML += `<div class="card card-body container d-flex" id="tarjetaReserva">

                <div class="row align-items-center">

                    <div class="col-12 col-sm-10">
                        <div class="d-flex align-items-center" style="gap: 10px;">
                            <h4 class="fw-medium fs-4" id="nombreUsuario">${nombre}</h4>
                            <h5 class="fw-light fs-5" id="correoUsuario">${email}</h5>
                            <h5 class="fw-light fs-5">|</h5>
                            <h5 class="fw-light" id="telefonoUsuario">${telefono}</h5>
                        </div>

                        <div class="card-subtitle d-flex align-items-center" style="gap: 10px;">
                            <h5 class="fw-light fs-5" id="fechaEntrada">${fechaEntrada}</h5>
                            <h5 class="fw-light fs-5">=></h5>
                            <h5 class="fw-light fs-5" id="fechaSalida">${fechaSalida}</h5>

                            <h5 class="fw-light fs-5" id="personas">personas: ${nPersonas}</h5>
                            <h5 class="fw-light fs-5">|</h5>
                            <h5 class="fw-light" id="noches">noches: ${nNoches}</h5>
                        </div>

                        <div class="card-subtitle d-flex align-items-center" style="gap: 10px;">
                            <h5 class="fw-bold fs-5" id="fechaEntrada">Total: $</h5>
                            <h5 class="fw-bold fs-5">400</h5>
                        </div>
                    </div>

                    <div class="col-12 col-sm-2">
                        <button class="btn btn-danger" id="btnCancelar">Cancelar</button>
                    </div>
                </div>
            </div>`
}





