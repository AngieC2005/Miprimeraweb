//alert("Hola este es mi Javascript");

//let nombre = "Angie";
//var nombre1 = "Angie";
//const nombre2 = "Angie";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".logo .fuente-")
titulo.innerHTML = contenidoTitulo;

//condicionales
let textoTitulo = titulo.innerText;
console.log(texto.Titulo);

if (texto.Titulo == "Nombre") {
    titulo.innerHTML = "otro";
} else{
    console.log("no se cumple");
}

//FUNCIONES

let nombre1 = "Karen";
let ciudad1 = "Tokio";
let gusto1 = "Fresa";

let parrafo = document.querySelector(".parrafo2")

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = 'Me llamo ${nombre}, naci en ${ciudad} y vivo en caballito. Me gusta el ${gusto} y salir a pasear en días de1sol. Me ancantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.';

    return contenido;
}

parrafo.innerText = cambiarTexto("María", ciudad1, gusto1);

