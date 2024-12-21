document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const lastName = document.getElementById('lastName').value;
    const noControl = document.getElementById('noControl').value;

    if (!username || !lastName || !noControl) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Simulación de inicio de sesión
    console.log("Inicio de sesión exitoso.");
    alert("Inicio de sesión exitoso.");
    // Aquí se puede agregar la lógica para redirigir a otra página
});

document.getElementById('signupBtn').addEventListener('click', function() {
    const su_username = document.getElementById('su_username').value;
    const su_lastNames = document.getElementById('su_lastNames').value;
    const su_noControl = document.getElementById('su_noControl').value;
    const su_cbxEsp = document.getElementById('su_cbxEsp').value;
    const su_cbxSemestre = document.getElementById('su_cbxSemestre').value;
    const su_cbxGroup = document.getElementById('su_cbxGroup').value;

    if (!su_username || !su_lastNames || !su_noControl || !su_cbxEsp || !su_cbxSemestre || !su_cbxGroup) {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Simulación de registro
    console.log("Usuario registrado exitosamente.");
    alert("Usuario registrado exitosamente.");
    // Aquí se puede agregar la lógica para limpiar los campos y cambiar de formulario
});

document.getElementById('switchToSignup').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('switchToSignup').style.display = 'none';
    document.getElementById('switchToLogin').style.display = 'block';
});

document.getElementById('switchToLogin').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('switchToLogin').style.display = 'none';
    document.getElementById('switchToSignup').style.display = 'block';
});