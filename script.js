//HORA ACTUAL
(function() {
    var actualizarHora = function() {
        var fecha = new Date(),
            horas = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),

            pHoras = document.getElementById('horas')


        if (minutos < 10) { minutos = "0" + minutos };
        if (segundos < 10) { segundos = "0" + segundos };
        pHoras.textContent = horas + ":" +
            minutos;
    }
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())

// CRONOMETRO
const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');


const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running')
    if (isPaused) {
        playPauseButton.classList.add('running');
        playPauseButton.innerHTML = 'DETENER';
        iniciar();
    } else {
        playPauseButton.classList.remove('running')
        playPauseButton.innerHTML = 'INICIAR';
        detener();
    }
}

let minutos = 00;
let segundos = 00;
let centesimas = 00;

let corriendo = null;


function dibujarTiempo() {

    minutos.toString().padStart(2, "0")

    stopwatch.innerHTML = minutos.toString().padStart(2, "0") + ":" + segundos.toString().padStart(2, "0") + ":" + centesimas.toString().padStart(2, "0");

}

function reiniciar() {

    minutos = 0;
    segundos = 0;
    centesimas = 0;
    dibujarTiempo();
    detener()
    playPauseButton.innerHTML = 'INICIAR';
}

function iniciar() {

    const sumarMinuto = () => {

        if (minutos < 99) minutos++;
    }

    const sumarSegundo = () => {

        if (segundos === 59) {
            segundos = 0;
            sumarMinuto();
        } else {
            segundos++;
        }
    }

    const incrementar = () => {

        if (centesimas === 99) {
            centesimas = 0;
            sumarSegundo();
        } else {
            centesimas++;
        }

        dibujarTiempo();
    }

    corriendo = setInterval(incrementar, 10);
}

function detener() {

    clearInterval(corriendo);
    corriendo = null;
}

dibujarTiempo();