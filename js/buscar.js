const buscar = document.querySelector(".header_search-button")

buscar.addEventListener("click",() => {
    const nombreBusqueda = document.querySelector(".header_search-input").value
    if(nombreBusqueda == ""){
        return
    }
    else{
        window.location.href = `./resultadobusqueda.html?nombre=${nombreBusqueda}`;
    }
})