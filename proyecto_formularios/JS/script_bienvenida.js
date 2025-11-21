window.onload = function() {
  // Mensaje inicial
  document.getElementById("mensaje-bienvenida").innerText = "¡Bienvenido! Por favor ingresa tu nombre y apellido.";

  // Preguntar al usuario
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");

  if (nombre && apellido) {
    let mensaje = `Hola ${nombre} ${apellido}, ¡bienvenido a la plataforma! 🎉`;
    document.getElementById("mensaje-bienvenida").innerText = mensaje;
    document.getElementById("nombre-usuario").innerText = `${nombre} ${apellido}`;
  }
};