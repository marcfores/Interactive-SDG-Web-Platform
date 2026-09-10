const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Gracias, ${nombre}. Hemos recibido tu mensaje y te contactaremos en ${correo}.`);

    formulario.reset();
});
