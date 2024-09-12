let slider = document.querySelectorAll('.slider img');
let currentSlide = 0;

function changeSlide() {
    // Verificar si las imágenes están siendo seleccionadas
    console.log("Cambio de imagen: ", currentSlide);

    // Remueve la clase 'active' de la imagen actual
    slider[currentSlide].classList.remove('active');
    
    // Cambia a la siguiente imagen
    currentSlide = (currentSlide + 1) % slider.length;

    // Añade la clase 'active' a la nueva imagen
    slider[currentSlide].classList.add('active');
}

// Cambia de imagen cada 3 segundos
setInterval(changeSlide, 3000);

app.get('/Diagnostico/Practica_1/who', (req, res) => {
    res.send('Respuesta de la ruta');
  });