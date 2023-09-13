const diaTexto = document.getElementById('dia-texto');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function tiempoActualizado() {
    const tiempoActual = new Date();
    diaTexto.innerHTML = tiempoActual.toLocaleDateString('es', {day: 'numeric', weekday: 'long', month: 'long', year: 'numeric'})
    horas.innerHTML = (tiempoActual.getHours()<10?"0":"") + tiempoActual.getHours();
    minutos.innerHTML = (tiempoActual.getMinutes()<10?"0":"") + tiempoActual.getMinutes();
    segundos.innerHTML = (tiempoActual.getSeconds()<10?"0":"") + tiempoActual.getSeconds();
}
setInterval(tiempoActualizado ,1000);

tiempoActualizado();
