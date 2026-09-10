document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.filtros button');
    const items = document.querySelectorAll('.galeria .item');

    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const categoria = boton.getAttribute('data-category');

            items.forEach(function(item) {
                const itemCategoria = item.getAttribute('data-category');

                if (categoria === 'todo') {
                    item.style.display = 'block';
                } else if (itemCategoria === categoria) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});