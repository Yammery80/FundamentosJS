// Selecciona los elementos de entrada y el área de texto para mostrar el color actual
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const rgbValueDisplay = document.getElementById('rgbValue');
const body = document.body;

// Función de flecha para actualizar el color de fondo basado en los valores de los controles deslizantes
const updateBackgroundColor = () => {
    // Obtén los valores actuales de los controles deslizantes
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Crea el valor RGB
    const rgbValue = `rgb(${red}, ${green}, ${blue})`;

    // Cambia el color de fondo del body
    body.style.backgroundColor = rgbValue;

    // Actualiza el texto que muestra el valor RGB actual
    rgbValueDisplay.textContent = rgbValue;
};

// Añade eventos de escucha a los controles deslizantes para actualizar el color en tiempo real
redSlider.addEventListener('input', () => updateBackgroundColor());
greenSlider.addEventListener('input', () => updateBackgroundColor());
blueSlider.addEventListener('input', () => updateBackgroundColor());

// Inicializa el color de fondo en la primera carga
updateBackgroundColor();
