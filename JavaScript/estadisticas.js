// Gráfico de barras
const contexto1 = document.getElementById('grafico1').getContext('2d');
new Chart(contexto1, {
    type: 'bar',
    data: {
        labels: ['Erradicación de la pobreza', 'Hambre cero', 'Educación de calidad', 'Igualdad de género', 'Acción por el clima'],
        datasets: [{
            label: 'Progreso (%)',
            data: [75, 60, 85, 50, 90],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico circular
const contexto2 = document.getElementById('grafico2').getContext('2d');
new Chart(contexto2, {
    type: 'doughnut',
    data: {
        labels: ['Acceso a agua potable', 'Energía asequible y no contaminante', 'Trabajo decente y crecimiento económico'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
