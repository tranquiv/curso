
const button = document.getElementById('showText');
const outputDiv = document.getElementById('output');

button.addEventListener("click", () =>{
    const inputText = document.getElementById('inputText').value;
    // se usa map para crear un array con el texto repetido 5 veces
    const repeatedText = Array(5)
    .fill(inputText)
    .map((text, index) => `<p>${index + 1 }: ${text}</p>`);
    // Mostramos el resultado en el div de salida
    outputDiv.innerHTML = repeatedText.join(' ');
});