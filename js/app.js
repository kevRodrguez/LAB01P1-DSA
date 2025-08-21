
const cancelarReserva = (event) => {
    const btnCancelar = event.currentTarget;

    btnCancelar.parentElement.parentElement.remove()
}

const calcularNumeroNoches = (fechaEntrada, fechaSalida) => {
    const totalMiliSegundos = fechaSalida.getTime() - fechaEntrada.getTime()

    const totalNoches = Math.ceil(totalMiliSegundos / (1000 * 60 * 60 * 24))

    return totalNoches;
}

const mostrarEstadisticas = () => {


    const fechaEntrada = new Date(document.getElementById("inputFechaEntrada").value);
    const fechaSalida = new Date(document.getElementById("inputFechaSalida").value);
    const nPersonas = document.getElementById("inputPersonas").value
    const nNoches = calcularNumeroNoches(fechaEntrada, fechaSalida)


    const total = nNoches * 50 * nPersonas;
    const txtNumeroNoches = document.getElementById("txtNumeroNoches");

    console.log("estadisticas")
    console.log(total, nPersonas)


    const txtTotalReserva = document.getElementById("txtTotal")

    txtNumeroNoches.innerText = "Noches: " + nNoches + "$";
    txtTotalReserva.innerText = "Total: " + total + "$";
}

const agregarReserva = (event) => {


    event.preventDefault();
    //establece precio por defecto
    const PRECIO = 50;

    const nombre = event.target.inputNombre.value;
    const email = event.target.inputEmail.value;
    const telefono = event.target.inputTelefono.value;
    const fechaEntrada = new Date(event.target.inputFechaEntrada.value)
    const fechaSalida = new Date(event.target.inputFechaSalida.value);
    const nPersonas = event.target.inputPersonas.value;


    const fechaEntradaCard = event.target.inputFechaEntrada.value;
    const fechaSalidaCard = event.target.inputFechaSalida.value;


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
                            <h5 class="fw-light fs-5" id="fechaEntrada">${fechaEntradaCard}</h5>
                            <h5 class="fw-light fs-5">=></h5>
                            <h5 class="fw-light fs-5" id="fechaSalida">${fechaSalidaCard}</h5>

                            <h5 class="fw-light fs-5" id="personas">personas: ${nPersonas}</h5>
                            <h5 class="fw-light fs-5">|</h5>
                            <h5 class="fw-light" id="noches">noches: ${nNoches}</h5>
                        </div>

                        <div class="card-subtitle d-flex align-items-center" style="gap: 10px;">
                            <h5 class="fw-bold fs-5" id="fechaEntrada">Total: $${total}</h5>
                        </div>
                    </div>

                    <div class="col-12 col-sm-2">
                        <button class="btn btn-danger" id="btnCancelar" onClick("cancelarReserva(event)")>Cancelar</button>
                    </div>
                </div>
            </div>`
}





