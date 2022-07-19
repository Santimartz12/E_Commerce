import { productosServicios } from "../services/productosServicios.js";
import { funciones } from "./funciones.js";

const image = document.querySelector("[data-img]");
const resultImg = document.createElement("img");
resultImg.classList.add("img__result");

const espacioImg = document.querySelector("[data-imagen]")

const seccion = document.querySelector("[data-seccion]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-descripcion]");

const datosProducto = () => {
    const id = funciones.obtenerInformacion("id");
    productosServicios.detalleProducto(id).then( respuesta => {

        image.value = respuesta.image
        resultImg.src = respuesta.image
        espacioImg.appendChild(resultImg);

        seccion.value = respuesta.seccion
        nombre.value = respuesta.nombre
        precio.value = respuesta.precio
        descripcion.value = respuesta.descripcion

        image.addEventListener("input", () => {

            const error = document.querySelector("[data-error-img]")

            if(image.value.includes(".png") || image.value.includes(".jpeg") || image.value.includes(".jpg")){
                const contenido = image.value
                resultImg.src = contenido;
                error.classList.add("ocultar");
            }
            else{
                error.classList.remove("ocultar");
            }
        })
    });
}

datosProducto();

const form = document.querySelector("[data-form-editar]")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const id = funciones.obtenerInformacion("id")

    const image = document.querySelector("[data-img]").value;
    const seccion = document.querySelector("[data-seccion]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = parseInt(document.querySelector("[data-precio]").value);
    const descripcion = document.querySelector("[data-descripcion]").value;

    productosServicios.editarProducto(id,seccion,nombre,precio,image,descripcion).then(() => 
    {window.location.href = "../admin_page.html"}).catch(err => {console.log(err)});

} )





