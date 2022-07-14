const formularioMensaje = document.querySelector("[data-form-contacto]");

//Se crea el EventListener para generar la logica cuando se presiona el boton
formularioMensaje.addEventListener("submit", (event) => {
    event.preventDefault();

    //Cambia el texto del boton al presionarse
    const botonEnviar = document.querySelector("[data-mensaje-btn]");
    botonEnviar.textContent = "Mensaje Enviado!";

    //Se formatean los campos del input justo cuando se presiona el boton de enviar mensaje
    const nombreMsj = document.querySelector("[data-mensaje-nombre]");
    const mensajeMsj = document.querySelector("[data-mensaje-mensaje]");

    nombreMsj.value = "";
    mensajeMsj.value = "";

    //Se crea un Intervalo para restaurar el texto inicial del boton
    const cambiarTextoBtn = setInterval(()=>{
        botonEnviar.textContent = "Enviar Mensaje";
        clearInterval(cambiarTextoBtn);
    }, 3000);
})