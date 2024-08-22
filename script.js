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

document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const formData = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    console.log('Datos del formulario:', formData);

    // Aquí puedes agregar la lógica para enviar los datos al servidor
    // Ejemplo: usando fetch
    fetch('URL_DEL_SERVIDOR', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Aquí puedes agregar la lógica para manejar la respuesta del servidor
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
});
