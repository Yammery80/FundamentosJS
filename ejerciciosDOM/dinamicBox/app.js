// Selección de elementos y los inputs
const box = document.getElementById('box');
const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const borderInput = document.getElementById('border');
const wborderInput = document.getElementById('wborder');
const shadowXInput = document.getElementById('shadowX');
const shadowYInput = document.getElementById('shadowY');
const shadowBlurInput = document.getElementById('shadowBlur');
const colorChange = document.getElementById('colorChange');
const borderChange = document.getElementById('bColChan');
const div = document.querySelector('div');
const message = document.querySelector('h1');
const backgroundImageInput = document.getElementById('backgroundImage');
const textColorSelector = document.getElementById('textColor');
const transColor = document.getElementById('TransparentColor');

// Función para actualizar el estilo de la caja
function updateBox() {
    //constantes  de alto y ancho
    const height = heightInput.value;
    const width = widthInput.value;
    //Funciones para actualizar el estilo de la caja
    box.style.height = heightInput.value + 'px';
    box.style.width = widthInput.value + 'px';
    box.style.borderRadius = borderInput.value + 'px';
    box.style.borderWidth = wborderInput.value + 'px';
    box.style.boxShadow = `${shadowXInput.value}px ${shadowYInput.value}px ${shadowBlurInput.value}px rgba(0, 0, 0, 0.5)`;
    box.style.opacity = transColor.value + '%';

    //Ajustar tamaño de la letra dinamicamente basado en las dimensiones del div
    const fontSize =Math.min(height, width) * 0.17; //Ajusta el 12% de la dimensión del div , pero más pequeña
    message.style.fontSize = fontSize + 'px';
}



// Declarar función de cambio de color
const changeColor = () => {
    // Declarar variables de función
    let cat = '#';
    let hexa = '0123456789ABCDEF';
    // Ciclo de elegir las letras random
    for (let i = 0; i < 6; i++) {
        cat += hexa[Math.floor(Math.random() * 16)];
    }
    // Función de cambio de color, después de tener los valores hexadecimales
    box.style.backgroundColor = cat;
}

// Se activa al darle click al botón
colorChange.addEventListener('click', changeColor);

// Declarar función de cambio de borde de color
const borderChangeColor = () => {
    // Declarar variables de función
    let cat = '#';
    let hexa = '0123456789ABCDEF';
    // Ciclo de elegir las letras random
    for (let i = 0; i < 6; i++) {
        cat += hexa[Math.floor(Math.random() * 16)];
    }
    // Función de cambio de color, después de tener los valores hexadecimales
    box.style.borderColor = cat;
}

borderChange.addEventListener('click', borderChangeColor);

// Función de mensaje dinámico
const dinamicmessage = () => {
    const dinamicphrase = Math.floor(Math.random() * 10);
    switch (dinamicphrase) {
        case 0:
            message.innerText = "You can";
            break;
        case 1:
            message.innerText = "You did, didn't you?";
            break;
        case 2:
            message.innerText = "I'm proud of you";
            break;
        case 3:
            message.innerText = "I've been waiting for your goals";
            break;
        case 4:
            message.innerText = "You boosted yourself";
            break;
        case 5:
            message.innerText = "They sacrifice to get something";
            break;
        case 6:
            message.innerText = "Only investment and software";
            break;
        case 7:
            message.innerText = "Get out of your comfort zone";
            break;
        case 8:
            message.innerText = "It was harder than you thought, right?";
            break;
        case 9:
            message.innerText = "You choose your process, but never your final";
            break;
    }
}

div.addEventListener('click', dinamicmessage);
//Función para cargar la imagen de fondo
function setBackgroundImage(){
    const file = backgroundImageInput.files[0];
    const reader = new FileReader();
    //Al cargar la image, se establece como fondo del div
    reader.onloadend = function() {
        box.style.backgroundImage = `url(${reader.result})`;
    };

    //Si se selecciona una imagen, se carga
    if (file){
        reader.readAsDataURL(file);
    }
}
//Evento para actualizar el fondo cuando se selecciona una imagen
backgroundImageInput.addEventListener('change', setBackgroundImage);
// Función para actualizar el color del texto
function updateTextColor() {
    const selectedColor = textColorSelector.value; // Obtiene el valor seleccionado
    message.style.color = selectedColor; // Cambia el color del texto del mensaje
}

// Evento para escuchar cuando se cambie la opción en el selector
textColorSelector.addEventListener('change', updateTextColor);
// Visualizar los cambios en los inputs
heightInput.addEventListener('input', updateBox);
widthInput.addEventListener('input', updateBox);
borderInput.addEventListener('input', updateBox);
wborderInput.addEventListener('input', updateBox);
shadowXInput.addEventListener('input', updateBox);
shadowYInput.addEventListener('input', updateBox);
shadowBlurInput.addEventListener('input', updateBox);
transColor.addEventListener('input', updateBox);
degraColor.addEventListener('input', updateBox);

