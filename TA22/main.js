const tamanoVentana = document.getElementById('tamanoVentana');

function actualizarTamano() {
    tamanoVentana.textContent = `Tamaño actual: ${window.innerWidth} x ${window.innerHeight}`;
}
window.onresize = actualizarTamano;

actualizarTamano();
