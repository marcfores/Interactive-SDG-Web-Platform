document.getElementById('desplegable_sobre_nosotros').addEventListener('click', () => {
    const detalles_extra = document.getElementById('mas_detalles');
    const youtubeVideo = document.getElementById('youtube-video');

    if (detalles_extra.style.display === 'none' || !detalles_extra.style.display) {
        detalles_extra.style.display = 'block';
        youtubeVideo.style.display = 'block'; 
    } else {
        detalles_extra.style.display = 'none';
        youtubeVideo.style.display = 'none'; 
    }
});
