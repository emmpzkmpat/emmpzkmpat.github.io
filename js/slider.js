// /*

document.addEventListener("DOMContentLoaded", function() {
    var antesBtn = document.getElementById('ANTES');
    var despuesBtn = document.getElementById('DESPUES');
    var slider = document.querySelector('.hobbie-slider');
    var hobbies = document.querySelectorAll('.hob');
    var indiceActual = 0;

    // Función para mostrar el hobby correspondiente al índice actual
    function mostrarHobby(indice) {
        for (var i = 0; i < hobbies.length; i++) {
            hobbies[i].style.display = 'none';
        }
        hobbies[indice].style.display = 'block';
    }

    // Mostrar el primer hobby al cargar la página
    mostrarHobby(indiceActual);

    // Función para ir al hobby anterior
    antesBtn.addEventListener('click', function() {
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = hobbies.length - 1;
        }
        mostrarHobby(indiceActual);
    });

    // Función para ir al siguiente hobby
    despuesBtn.addEventListener('click', function() {
        indiceActual++;
        if (indiceActual >= hobbies.length) {
            indiceActual = 0;
        }
        mostrarHobby(indiceActual);
    });
});


// */



/*
// Obtener elementos del DOM
const antes = document.getElementById('ANTES');
const despues = document.getElementById('DESPUES');
const hobbies = document.querySelector('.hobbies');

// Agregar eventos a las flechas para desplazarse
antes.addEventListener('click', () => {
    hobbies.scrollBy({ left: -300, behavior: 'smooth' });
});

despues.addEventListener('click', () => {
    hobbies.scrollBy({ left: 300, behavior: 'smooth' });
});

*/

