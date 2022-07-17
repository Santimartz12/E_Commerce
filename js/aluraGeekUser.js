//Si es la primera vez que se abre la pagina web se creará la informacion que el usuario no se ha registrado
if(!sessionStorage.getItem("Login")){
    let loginData = {user: "client", logged: false}
    sessionStorage.setItem("Login",JSON.stringify(loginData));
}

//Llamamos los datos para determinar el estado del usuario
let loggedData = JSON.parse(sessionStorage.getItem("Login"))


//Creamos el entorno para el usuario registrado
if(loggedData.logged && loggedData.user == "client" ){

    //Eliminamos el boton
    const botonlogin = document.querySelector("[data-btn-login]");
    botonlogin.parentNode.innerHTML = "";

    //Agregamos una imagen para reemplazar el boton
    const header = document.querySelector("[data-container-header]")
    const img = document.createElement("img");
    img.classList.add("header__perfil")

    //Link de la imagen de perfil
    img.src = "https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10879124-stock-photo-young-chimpanzee-simia-troglodytes-6.jpg"

    header.appendChild(img);
}

//Creamos el entorno para el admin en modo VISTA CLIENTE
if(loggedData.logged && loggedData.user == "admin" ){

    //Editamos el boton
    const botonlogin = document.querySelector("[data-btn-login]");
    const link = botonlogin.parentNode;
    link.pathname = "./admin_page.html"
    botonlogin.textContent = "Modo Admin";

}