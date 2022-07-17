const formularioLogin = document.querySelector("[data-formulario-login]")

formularioLogin.addEventListener("submit",(evento) => {
    evento.preventDefault()

    const correo = document.querySelector("[data-email]")
    const password = document.querySelector("[data-password]")

    comprobarlogin(correo,password);
})


const comprobarlogin = (correo,password) => {

    // Llamamos a la lista de errores para ser mostrada si hay datos mal diligenciados
    const error = document.querySelector("[data-error]");

    //Si el correo de Admin y la contraseña de admin son iguales
    if(correo.value.includes("@aluraadmin.com") && password.value == "Admin123"){

        //Actualizamos los datos del local Storage
        let loggedData = JSON.parse(sessionStorage.getItem("Login"))
        loggedData.user = "admin";
        loggedData.logged = true;
        sessionStorage.setItem("Login",JSON.stringify(loggedData))

        //Enviamos al usuario a la seccion del administrador
        window.location.href = "../admin_page.html"

    }
    else{
        //Si el correo es valido pero la contraseña es incorrecta
        if(correo.value.includes("@aluraadmin.com") && password.value != "Admin123")
        {
            error.classList.remove("ocultar");
        }
    }

    //Si el correo no es igual al del admin y la contraseña es correcta
    if(!correo.value.includes("@aluraadmin.com") && password.value == "Alura123"){

        //Actualizamos los datos del local Storage
        let loggedData = JSON.parse(sessionStorage.getItem("Login"))
        loggedData.user = "client";
        loggedData.logged = true;
        sessionStorage.setItem("Login",JSON.stringify(loggedData))
        
        //Enviamos al usuario a la seccion del administrador
        window.location.href = "../index.html"
    }
    else{
        //Si la contraseña es incorrecta pero el correo no es igual al del admin
        if(!correo.value.includes("@aluraadmin.com") && password.value != "Alura123")
        {
            error.classList.remove("ocultar");
        }
    }
}