document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el botón de "Ver más" en la tarjeta principal
    const showInfoButton = document.querySelector('.show-info-btn');
    const popupCard = document.getElementById('popup-card');
    const closePopupButton = document.querySelector('.close-popup-btn');

    // Mostrar la tarjeta emergente cuando se hace clic en "Ver más"
    showInfoButton.addEventListener('click', function () {
        popupCard.style.display = 'block';
    });

    // Cerrar la tarjeta emergente cuando se hace clic en "Cerrar"
    closePopupButton.addEventListener('click', function () {
        popupCard.style.display = 'none';
    });

    // Cerrar la tarjeta emergente si el usuario hace clic fuera del contenido de la tarjeta
    window.addEventListener('click', function (event) {
        if (event.target === popupCard) {
            popupCard.style.display = 'none';
        }
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
