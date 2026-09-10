function mostrarInformacion(odsId) {
    const contenidoOds = document.getElementById(`${odsId}-contenido`);
    const popupContenido = document.getElementById("popup-contenido");

    if (contenidoOds) {
        popupContenido.innerHTML = contenidoOds.innerHTML; 
    }

    const popup = document.getElementById("popup");
    popup.style.display = "flex"; 
}

function cerrarPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; 
}