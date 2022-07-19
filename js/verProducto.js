import { productosServicios } from "../services/productosServicios.js";
import { funciones } from "./funciones.js";

const id = funciones.obtenerInformacion("id");
const containerProd = document.querySelector("[data-container-producto]");

productosServicios.detalleProducto(id).then( respuesta => {
    productosServicios.crearLineaProductos(containerProd,respuesta.image,respuesta.nombre,respuesta.precio,respuesta.descripcion)
} )




