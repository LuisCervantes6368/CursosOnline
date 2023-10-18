document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Aquí deberías enviar los datos del formulario a una API de inicio de sesión.
        // Puedes usar la función fetch() para hacer la solicitud.

        // Ejemplo ficticio:
        fetch('https://api.example.com/login', {
            method: 'POST',
            body: new FormData(loginForm)
        })
        .then(response => {
            if (response.status === 200) {
                alert('Inicio de sesión exitoso');
            } else {
                alert('Inicio de sesión fallido');
            }
        });
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Aquí deberías enviar los datos del formulario a una API de registro.
        // Puedes usar la función fetch() para hacer la solicitud.

        // Ejemplo ficticio:
        fetch('GET https://api.securitycenter.microsoft.com/api/machines/1e5bc9d7e413ddd7902c2932e418702b84d0cc07/logonusers', {
            method: 'POST',
            body: new FormData(registerForm)
        })
        .then(response => {
            if (response.status === 201) {
                alert('Registro exitoso');
            } else {
                alert('Registro fallido');
            }
        });
    });
});
