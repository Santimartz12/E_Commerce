import { productosServicios } from "../services/productosServicios.js";


//Creamos el formulario
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();


    const image = form.querySelector("[data-img]").value
    const seccion = form.querySelector("[data-seccion]").value
    const nombre = form.querySelector("[data-nombre]").value
    const descripcion = form.querySelector("[data-descripcion]").value
    const precio = parseInt(form.querySelector("[data-precio]").value)

    productosServicios.crearProducto(seccion,nombre,precio,image,descripcion).then(() => {
        window.location.href = "../admin_page.html"
    }).catch( error => {console.error(error)} )
    
})