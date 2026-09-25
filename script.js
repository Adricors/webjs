/* ==========================================
   MENÚ MÓVIL
========================================== */

const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("mostrar");
});


/* ==========================================
   MODIFICAR CONTENIDO (DOM)
========================================== */

const mensaje = document.getElementById("mensaje");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function() {
    mensaje.textContent = "¡Gracias por visitar la página de plantas!";
});


/* ==========================================
   FORMULARIO CON VALIDACIÓN
========================================== */

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    if (nombre === "" || correo === "") {
        resultado.textContent = "Por favor, completa todos los campos.";
    } else {
        resultado.textContent = "Gracias " + nombre + ", tu información fue recibida.";
    }

});