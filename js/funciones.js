import { productosServicios } from "../services/productosServicios.js";


//Se crea la funcion para mostrar productos en el index
const mostrarProductosIndex = (seccion,clasificador) =>{ 
    //Se llama la funcion de lista productos
    productosServicios.listaProductos().then((respuesta) => {
        //Por medio de un forEach se recorren todos los objetos
        respuesta.forEach((producto) => {
            //Se crea una condicion para limitar la cantidad de productos en la pagina inicial
            if(seccion.childNodes.length < 6){
                //Se llama la funcion que clasifica los productos por su seccion
                clasificar(seccion,producto,clasificador)
            }
        });
    })
}

//Se crea esta funcion para clasificar los productos de acuerdo a su seccion
const clasificar = (ubicacion,producto,clasificador) => {
    //Si la seccion del producto es igual al clasificador descrito anteriormente, se procede a crear el elemento
    if(producto.seccion == clasificador){
        ubicacion.appendChild(productosServicios.crearNuevaLinea(producto.nombre,producto.precio,producto.image))
    }
}

//Se exportan las funciones mediante un objeto
export const funciones = {
    mostrarProductosIndex,
    clasificar,
}
