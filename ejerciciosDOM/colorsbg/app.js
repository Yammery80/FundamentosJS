//Declaración de constantes
const body = document.querySelector('body');
const btnChange = document.getElementById('btnChange');

//declarar función
    const changeColor = () => {
//Declarar variables de función
    let cat='#';
    let hexa='0123456789ABCDEF';
    
    //Ciclo para elegir las letras del color
    for (let i = 0; i < 6; i++){
    cat += hexa[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = cat;
    }

    btnChange.addEventListener('click', changeColor);