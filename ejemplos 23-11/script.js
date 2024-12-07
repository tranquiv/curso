//Seleccionamos el elementos con id "titulo"
const titulo = document.getElementById("titulo");

//Seleccionamos el botón con id "cambiarTexto"
const boton = document.getElementById("cambiarTexto");

//Añadimos un evento al botón para que, al hacer clic, cambie el texto del titulo
boton.addEventListener("click", () =>{
    titulo.innerText = "Texto cambiado por JavaScript";
});


boton.addEventListener("click", () =>{
    titulo.innerText = "Texto cambiado por JavaScript";
    titulo.style.color = "orange"; //cambiar el color del texto
})

const entrada = document.getElementById("entradaTexto");
const botonActualizar = document.getElementById("actualizarTexto");

botonActualizar.addEventListener("click", () =>{
    titulo.innerText = entrada.value; // Cambia el texto al valor input
});