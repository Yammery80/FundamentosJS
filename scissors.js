const btnPlay = document.querySelector('button'); // Apuntar al botón
const divMaq = document.querySelector('.answermach'); // Apuntar al div de la máquina
const message = document.querySelector('.winnertotal'); // Apuntar al mensaje
const imgUser = document.getElementById('imgUser'); // Apuntar a la imagen del usuario
const imgCompu = document.getElementById('imgCompu'); // Apuntar a la imagen de la máquina

// Ocultar imágenes al inicio
imgUser.style.display = 'none';
imgCompu.style.display = 'none';

const playgame = () => {
    const choiceUser = prompt('Elija piedra, papel o tijeras');

    // Validación: Solo permitir "piedra", "papel" o "tijeras"
    const validChoices = ['piedra', 'papel', 'tijeras'];
    if (!validChoices.includes(choiceUser.toLowerCase())) {
        alert('Entrada no válida. Solo puedes elegir: piedra, papel o tijeras.');
        return; // Salir de la función si la entrada no es válida
    }

    // Mostrar imagen del usuario basada en la elección
    imgUser.style.display = 'block'; // Mostrar imagen del usuario
    switch(choiceUser.toLowerCase()) {
        case 'tijeras':
            imgUser.src = '../assets/tijeras.jpeg';
            break;
        case 'papel':
            imgUser.src = '../assets/papel.jpeg';
            break;
        case 'piedra':
            imgUser.src = '../assets/roca.jpeg';
            break;
    }

    // Selecciona la sección del usuario
    const divUser = document.querySelector('.useranswer');
    const userParagraph = document.createElement('p');
    userParagraph.textContent = `${choiceUser}`;
    divUser.innerHTML = '';
    divUser.appendChild(userParagraph);
    divUser.style.color = '#0c1e53';
    divUser.style.fontSize = '18px';

    // Respuesta de la máquina aleatoria
    const random = Math.floor(Math.random() * 3);
    let choiceMaq = '';

    // Mostrar imagen de la máquina basada en la elección aleatoria
    imgCompu.style.display = 'block'; // Mostrar imagen de la máquina
    switch(random) {
        case 0:
            choiceMaq = 'tijeras';
            imgCompu.src = '../assets/tijeras.jpeg';
            break;
        case 1:
            choiceMaq = 'papel';
            imgCompu.src = '../assets/papel.jpeg';
            break;
        default:
            choiceMaq = 'piedra';
            imgCompu.src = '../assets/roca.jpeg';
    }

    divMaq.innerText = `${choiceMaq}`;
    divMaq.style.color = '#0c1e53';
    divMaq.style.fontSize = '18px';

    // Mostrar resultado
    let result = '';
    if (choiceUser.toLowerCase() === choiceMaq.toLowerCase()) {
        result = 'Empate';
        message.style.color = 'orange';
    } else if (
        (choiceUser.toLowerCase() === 'tijeras' && choiceMaq === 'papel') ||
        (choiceUser.toLowerCase() === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser.toLowerCase() === 'piedra' && choiceMaq === 'tijeras')
    ) {
        result = '¡Ganaste!';
        message.style.color = 'green';
    } else {
        result = '¡Perdiste!';
        message.style.color = 'red';
    }

    message.innerText = result;
    message.style.fontSize = '25px';

    // Limpiar después de mostrar el resultado
    setTimeout(() => {
        divUser.innerHTML = '';
        divMaq.innerHTML = '';
        message.innerHTML = '';
        imgUser.style.display = 'none'; // Ocultar imagen del usuario
        imgCompu.style.display = 'none'; // Ocultar imagen de la máquina
    }, 3000); // 3 segundos antes de limpiar
};

btnPlay.addEventListener('click', playgame);
