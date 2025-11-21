document.getElementById("formInscripcion").addEventListener("submit", function(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  alert(`Inscripción recibida:\nNombre: ${nombre}\nCorreo: ${correo}`);
});