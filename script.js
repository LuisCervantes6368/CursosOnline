// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Aquí puedes agregar JavaScript para manejar interacciones en la página.
    
    // Por ejemplo, puedes usar AJAX para cargar la lista de cursos desde el servidor.
    
    // También puedes agregar eventos para manejar los formularios de registro e inicio de sesión.
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Aquí puedes enviar los datos de registro al servidor y manejar la respuesta.
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Aquí puedes enviar los datos de inicio de sesión al servidor y manejar la respuesta.
    });
});
