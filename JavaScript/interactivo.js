function verificarRespuesta(respuesta, idPregunta) {
    const resultado = document.getElementById(`respuesta${idPregunta}`);
    if (respuesta) {
        resultado.textContent = "¡Correcto!"; 
        resultado.style.color = "green"; 
    } else {
        resultado.textContent = "Incorrecto. Intenta de nuevo."; 
        resultado.style.color = "red"; 
    }
}

function permitirSoltar(evento) {
    evento.preventDefault(); // Permite que el elemento se suelte
}

function arrastrar(evento) {
    evento.dataTransfer.setData("text", evento.target.id); // Transfiere el ID del elemento arrastrado
}

function soltar(evento) {
    evento.preventDefault();
    const data = evento.dataTransfer.getData("text");
    const objetivo = document.getElementById(data);

    if (evento.target.id.startsWith("descripcion")) {
        evento.target.appendChild(objetivo); // Coloca el elemento en el destino
        evento.target.style.backgroundColor = "#d4edda"; 
        evento.target.style.borderColor = "#28a745"; 
        alert("¡Bien hecho! Has colocado correctamente el ODS."); // Mensaje de exito
    }
}
