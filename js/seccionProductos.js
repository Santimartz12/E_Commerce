import { funciones } from "./funciones.js";

//Buscamos dentro de la url la etiqueta id para determinar la seccion de productos escogida
let idSeccion = funciones.obtenerInformacion("id")

//Creamos una variable donde se acomoden los productos
const seccion = document.querySelector("[data-espacio-productos]");

//Adaptamos el banner inicial en caso de que el usuario entre a alguna pagina
if(idSeccion == "StarWars"){
    const banner = document.querySelector("[data-banner]")
    banner.classList.add("starwars")
}else{
    if(idSeccion == "Consolas"){
        const banner = document.querySelector("[data-banner]")
        banner.classList.add("consolas")
    }else{
        if(idSeccion == "Diversos"){
            const banner = document.querySelector("[data-banner]")
            banner.classList.add("diversos")
        }
    }
}

//Se llaman todos los productos de la seccion escogida
funciones.mostrarProductosSeccion(seccion,idSeccion);