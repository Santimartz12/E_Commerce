import { funciones } from "./funciones.js";

const starWarsSection = document.querySelector("[data-productos-starwars]");
const consolasSection = document.querySelector("[data-productos-consolas]");
const diversosSection = document.querySelector("[data-productos-diversos]");


funciones.mostrarProductosIndex(starWarsSection,"Star Wars");
funciones.mostrarProductosIndex(consolasSection,"Consolas");
funciones.mostrarProductosIndex(diversosSection,"Diversos");