// Seleccionar todos los enlaces del menú de navegación
const menuLinks = document.querySelectorAll('nav ul li a');
const checkBox = document.getElementById('check');

// Añadir evento a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Desmarcar el checkbox cuando se hace clic en un enlace
        checkBox.checked = false;
    });
});    
