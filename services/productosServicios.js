const crearNuevaLinea = (nombre,precio,image) => {

    //Se crea el formato para construir la informacion
    const linea = document.createElement("div")

    //Se agrega el estilo que tenia antes
    linea.classList.add("productos__item")

    //Se crea la plantilla para los productos
    const contenido = `<img class="productos__item_img" src=${image} alt="Producto1">
    <h3 class="productos__item__titulo">${nombre}</h3>
    <p class="productos__item__precio">$${precio.toFixed(2)}</p>
    <button class="productos__item__btn">Ver Producto</button>`;

    //Se asigna el contenido a la linea
    linea.innerHTML = contenido;

    return linea
}

const listaProductos = ( ) => {
    return fetch("http://localhost:3000/productos").then( respuesta => {
        return respuesta.json();
    })
}



export const productosServicios = {
    crearNuevaLinea,
    listaProductos,
}