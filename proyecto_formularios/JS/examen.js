document.getElementById("formExamen").addEventListener("submit", function(e) {
  e.preventDefault();

  const respuestas = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
    q3: document.getElementById("q3").value.trim(),
    q4: document.querySelector('input[name="q4"]:checked')?.value,
    q5: document.querySelector('input[name="q5"]:checked')?.value,
  };

  if (!respuestas.q1 || !respuestas.q2 || !respuestas.q3 || !respuestas.q4 || !respuestas.q5) {
    alert("Por favor responde todas las preguntas.");
    return;
  }

  let resumen = `
    ✅ Examen enviado con éxito:
    1. Lenguaje más usado: ${respuestas.q1}
    2. Hardware físico: ${respuestas.q2}
    3. HTML: ${respuestas.q3}
    4. CPU: ${respuestas.q4}
    5. Sistema operativo: ${respuestas.q5}
  `;

  alert(resumen);
});