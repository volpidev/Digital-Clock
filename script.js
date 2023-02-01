function atualizarTempo(){

    var display = document.querySelector('.display');

    var atual = new Date();

    var horario = corrigirHorario (atual.getHours()) + ":" + corrigirHorario (atual.getMinutes()) + ":" + corrigirHorario (atual.getSeconds());

    display.textContent = horario;
}

function corrigirHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);

console.log(horario);