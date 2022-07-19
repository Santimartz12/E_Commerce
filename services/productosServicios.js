const crearNuevaLinea = (nombre,precio,image) => {

    //Se crea el formato para construir la informacion
    const linea = document.createElement("div")

    //Se agrega el estilo que tenia antes
    linea.classList.add("productos__item")

    //Se crea la plantilla para los productos
    const contenido = `<img class="productos__item_img" src=${image} alt="Producto1">
    <h3 class="productos__item__titulo">${nombre}</h3>
    <p class="productos__item__precio">$${precio.toFixed(2)}</p>
    <button class="productos__item__btn" data-btn-verProd>Ver Producto</button>`;

    //Se asigna el contenido a la linea
    linea.innerHTML = contenido;

    const btnVerProd = linea.querySelector("[data-btn-verProd]")
    btnVerProd.addEventListener("click", () => {

        let loggedData = JSON.parse(sessionStorage.getItem("Login"))
        
        if(loggedData.logged == true){
            window.location.href = "../admin_page.html"
        }
         else{
            window.location.href = "../html/login.html"
        }

    })

    return linea
}

const crearLineaAdmin = (image,nombre,precio,id) => {

    const container = document.querySelector("[data-container-productos]")

    const div = document.createElement("div")
    div.classList.add("productos__item");

    const formato = `
    <div class="productos__admin__tools">
        <img class="productos__admin__delete" src="../resources/Icons/Delete.svg" alt="Eliminar title="Eliminar" data-eliminar id="${id}">
        <img data-editar class="productos__admin__edit" src="../resources/Icons/Edit.svg" alt="Editar" title="Editar">
    </div> 
    <img class="productos__item_img" src=${image} alt="Producto1">
    <h3 class="productos__item__titulo">${nombre}</h3>
    <p class="productos__item__precio">$${precio.toFixed(2)}</p>`


    div.innerHTML = formato;
    container.appendChild(div);

    const btnEliminar = div.querySelector("[data-eliminar]");
    btnEliminar.addEventListener("click", () => {
        eliminarProducto(btnEliminar.id).then( respuesta => {
            console.log(respuesta)
        }).catch(err => { alert("Ocurrio un error") });
    } )

    const btnEditar = div.querySelector("[data-editar]");
    btnEditar.addEventListener("click", () => {
        window.location.href = `../editarProducto.html?id=${id}`;
    } )

}

const listaProductos = ( ) => {
    return fetch("http://localhost:3000/productos").then( respuesta => {
        return respuesta.json();
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
    });
}

const crearProducto = (seccion,nombre,precio,image,descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({seccion: seccion,nombre:nombre,precio:precio,image:image,descripcion:descripcion,id: uuid.v4()})
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then( respuesta => {
        return respuesta.json();
    })
}

const editarProducto = (id,seccion,nombre,precio,image,descripcion) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({seccion: seccion,nombre:nombre,precio:precio,image:image,descripcion:descripcion})
    })
}

export const productosServicios = {
    crearLineaAdmin,
    crearNuevaLinea,
    listaProductos,
    crearProducto,
    detalleProducto,
    editarProducto
}